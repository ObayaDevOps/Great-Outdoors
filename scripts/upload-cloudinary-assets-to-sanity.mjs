#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { createClient } from '@sanity/client'

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const defaultCsvPath = path.join(repoRoot, 'CloudinaryToSanityAssetMapping.csv')
const defaultAssetRoot = '/media/obi/Seagate/Cloudinary_Bulk_Download_March_4_2026'

const rawArgs = process.argv.slice(2)
const dryRun = rawArgs.includes('--dry-run')
const positionalArgs = rawArgs.filter((arg) => !arg.startsWith('--'))
const csvPath = positionalArgs[0] ? path.resolve(process.cwd(), positionalArgs[0]) : defaultCsvPath
const assetRoot = positionalArgs[1] ? path.resolve(process.cwd(), positionalArgs[1]) : defaultAssetRoot

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'y563wtf6'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN
const apiVersion = process.env.SANITY_API_VERSION || '2024-09-12'

if (!fs.existsSync(csvPath)) {
  console.error(`CSV file not found: ${csvPath}`)
  process.exit(1)
}

if (!fs.existsSync(assetRoot)) {
  console.error(`Asset root not found: ${assetRoot}`)
  process.exit(1)
}

if (!dryRun && !token) {
  console.error('Missing SANITY_API_TOKEN. Set it in your shell before running this script.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

const IMAGE_EXTENSIONS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.avif',
  '.gif',
  '.svg',
  '.tif',
  '.tiff',
  '.bmp',
  '.heic',
  '.heif',
])

function parseCsvLine(line) {
  const out = []
  let current = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i]
    if (ch === '"') {
      const next = line[i + 1]
      if (inQuotes && next === '"') {
        current += '"'
        i += 1
      } else {
        inQuotes = !inQuotes
      }
    } else if (ch === ',' && !inQuotes) {
      out.push(current)
      current = ''
    } else {
      current += ch
    }
  }
  out.push(current)
  return out
}

function toCsvLine(values) {
  return values
    .map((value) => {
      const stringValue = value == null ? '' : String(value)
      if (stringValue.includes('"') || stringValue.includes(',') || stringValue.includes('\n')) {
        return `"${stringValue.replace(/"/g, '""')}"`
      }
      return stringValue
    })
    .join(',')
}

function hasRealValue(value) {
  if (value == null) return false
  const normalized = String(value).trim().toLowerCase()
  return normalized !== '' && normalized !== 'tbd' && normalized !== 'null' && normalized !== 'undefined'
}

function loadCsv(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n').trimEnd()
  const lines = raw.split('\n')
  const headers = parseCsvLine(lines[0])
  const rows = lines.slice(1).map((line) => {
    const values = parseCsvLine(line)
    const row = {}
    headers.forEach((key, idx) => {
      row[key] = values[idx] ?? ''
    })
    return row
  })
  return { headers, rows }
}

function writeCsv(filePath, headers, rows) {
  const serialized = [toCsvLine(headers), ...rows.map((row) => toCsvLine(headers.map((h) => row[h] ?? '')))].join('\n')
  fs.writeFileSync(filePath, `${serialized}\n`, 'utf8')
}

function walkFiles(rootDir) {
  const stack = [rootDir]
  const files = []
  while (stack.length > 0) {
    const current = stack.pop()
    const entries = fs.readdirSync(current, { withFileTypes: true })
    for (const entry of entries) {
      const full = path.join(current, entry.name)
      if (entry.isDirectory()) {
        stack.push(full)
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase()
        if (IMAGE_EXTENSIONS.has(ext)) {
          files.push(full)
        }
      }
    }
  }
  return files
}

function toKey(value) {
  return (value || '')
    .toLowerCase()
    .replace(/%20/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function buildIndex(files) {
  const byBase = new Map()
  for (const fullPath of files) {
    const base = path.basename(fullPath, path.extname(fullPath))
    const key = toKey(base)
    const arr = byBase.get(key) || []
    arr.push(fullPath)
    byBase.set(key, arr)
  }
  return { byBase }
}

function pickLocalFile(row, index) {
  if (row.local_file_path && fs.existsSync(row.local_file_path) && fs.statSync(row.local_file_path).isFile()) {
    return row.local_file_path
  }

  const candidates = []
  const pushCandidates = (value) => {
    if (!value) return
    const key = toKey(value)
    const found = index.byBase.get(key)
    if (found) candidates.push(...found)
  }

  pushCandidates(row.cloudinary_public_id)

  if (row.cloudinary_url) {
    const tail = row.cloudinary_url.split('/').pop() || ''
    const noExt = tail.replace(/\.[A-Za-z0-9]+$/, '')
    pushCandidates(noExt)
  }

  const unique = [...new Set(candidates)]
  if (unique.length === 1) return unique[0]
  return ''
}

function copyUploadFields(targetRow, sourceRow) {
  targetRow.sanity_asset_id = sourceRow.sanity_asset_id || ''
  targetRow.sanity_url = sourceRow.sanity_url || ''
  targetRow.width = sourceRow.width || ''
  targetRow.height = sourceRow.height || ''
  targetRow.local_file_path = sourceRow.local_file_path || targetRow.local_file_path
  if (!targetRow.status || targetRow.status === 'TODO') {
    targetRow.status = sourceRow.status || 'UPLOADED'
  }
}

async function run() {
  const started = Date.now()
  const { headers, rows } = loadCsv(csvPath)

  const fileList = walkFiles(assetRoot)
  const index = buildIndex(fileList)
  console.log(`Indexed ${fileList.length} local image files under ${assetRoot}`)

  const uploadedByUrl = new Map()
  for (const row of rows) {
    if (hasRealValue(row.cloudinary_url) && hasRealValue(row.sanity_asset_id) && hasRealValue(row.sanity_url)) {
      uploadedByUrl.set(row.cloudinary_url, row)
    }
  }

  let uploaded = 0
  let reused = 0
  let blocked = 0
  let skipped = 0

  for (const row of rows) {
    const status = row.status || 'TODO'
    const isDone = hasRealValue(row.sanity_asset_id) && hasRealValue(row.sanity_url)
    if (isDone) {
      skipped += 1
      continue
    }

    if (status !== 'TODO' && status !== 'BLOCKED') {
      skipped += 1
      continue
    }

    const prior = uploadedByUrl.get(row.cloudinary_url)
    if (prior?.sanity_asset_id && prior?.sanity_url) {
      copyUploadFields(row, prior)
      row.status = 'UPLOADED'
      row.notes = row.notes ? `${row.notes}; deduped-by-url` : 'deduped-by-url'
      reused += 1
      continue
    }

    const localFile = pickLocalFile(row, index)
    if (!localFile) {
      row.status = 'BLOCKED'
      row.notes = row.notes ? `${row.notes}; local-file-not-found` : 'local-file-not-found'
      blocked += 1
      continue
    }

    row.local_file_path = localFile
    if (dryRun) {
      uploadedByUrl.set(row.cloudinary_url, row)
      uploaded += 1
      continue
    }

    try {
      const filename = path.basename(localFile)
      const asset = await client.assets.upload('image', fs.createReadStream(localFile), {
        filename,
        label: row.cloudinary_public_id || filename,
      })

      row.status = 'UPLOADED'
      row.sanity_asset_id = asset._id || ''
      row.sanity_url = asset.url || ''
      row.width = asset?.metadata?.dimensions?.width ? String(asset.metadata.dimensions.width) : row.width
      row.height = asset?.metadata?.dimensions?.height ? String(asset.metadata.dimensions.height) : row.height
      row.notes = row.notes ? `${row.notes}; uploaded` : 'uploaded'

      uploadedByUrl.set(row.cloudinary_url, row)
      uploaded += 1
      console.log(`Uploaded: ${row.mapping_id} -> ${row.sanity_asset_id}`)
    } catch (error) {
      row.status = 'BLOCKED'
      row.notes = row.notes ? `${row.notes}; upload-failed` : 'upload-failed'
      blocked += 1
      console.error(`Upload failed for ${row.mapping_id}: ${error.message}`)
    }
  }

  let backupPath = ''
  if (!dryRun) {
    backupPath = `${csvPath}.bak-${new Date().toISOString().replace(/[:.]/g, '-')}`
    fs.copyFileSync(csvPath, backupPath)
    writeCsv(csvPath, headers, rows)
  }

  const elapsedSec = ((Date.now() - started) / 1000).toFixed(1)
  console.log('')
  console.log(`Done in ${elapsedSec}s`)
  console.log(`Uploaded: ${uploaded}`)
  console.log(`Reused by URL: ${reused}`)
  console.log(`Blocked: ${blocked}`)
  console.log(`Skipped: ${skipped}`)
  if (dryRun) {
    console.log('Dry run only: CSV not modified.')
  } else {
    console.log(`CSV backup: ${backupPath}`)
    console.log(`CSV updated: ${csvPath}`)
  }
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
