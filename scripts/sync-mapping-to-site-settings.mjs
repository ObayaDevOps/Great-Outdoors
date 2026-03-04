#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import crypto from 'node:crypto'
import { createClient } from '@sanity/client'

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const defaultCsvPath = path.join(repoRoot, 'CloudinaryToSanityAssetMapping.csv')

const rawArgs = process.argv.slice(2)
const positionalArgs = rawArgs.filter((arg) => !arg.startsWith('--'))
const csvPath = positionalArgs[0] ? path.resolve(process.cwd(), positionalArgs[0]) : defaultCsvPath
const documentId = positionalArgs[1] || 'siteSettings'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'y563wtf6'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN
const apiVersion = process.env.SANITY_API_VERSION || '2024-09-12'

if (!token) {
  console.error('Missing SANITY_API_TOKEN.')
  process.exit(1)
}

if (!fs.existsSync(csvPath)) {
  console.error(`CSV not found: ${csvPath}`)
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

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

function loadRows(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n').trimEnd()
  const lines = raw.split('\n')
  const headers = parseCsvLine(lines[0])
  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line)
    const row = {}
    headers.forEach((key, idx) => {
      row[key] = values[idx] ?? ''
    })
    return row
  })
}

function hasRealValue(value) {
  if (value == null) return false
  const normalized = String(value).trim().toLowerCase()
  return normalized !== '' && normalized !== 'tbd' && normalized !== 'null' && normalized !== 'undefined'
}

function toMappingItem(row) {
  const item = {
    _key: row.mapping_id || crypto.randomUUID().slice(0, 12),
    legacyUrl: row.cloudinary_url || '',
    publicId: row.cloudinary_public_id || '',
    routeOrComponent: row.route_or_component || '',
    targetDocumentType: row.sanity_document_type || '',
    targetDocumentId: row.sanity_document_id || '',
    targetFieldPath: row.sanity_field_path || '',
    sourceFile: row.source_file || '',
    sourceLine: hasRealValue(row.source_line) ? Number(row.source_line) : undefined,
    notes: row.notes || '',
  }

  if (hasRealValue(row.sanity_asset_id)) {
    item.mappedAsset = {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: row.sanity_asset_id,
      },
    }
  }

  return item
}

function toImageRef(assetId) {
  if (!hasRealValue(assetId)) return undefined
  return {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: assetId,
    },
  }
}

async function run() {
  const rows = loadRows(csvPath)
  const uploadedRows = rows.filter((row) => hasRealValue(row.sanity_asset_id) && hasRealValue(row.sanity_url))
  const mappingItems = uploadedRows.map(toMappingItem)
  const pickByField = (fieldPath) => uploadedRows.find((row) => row.sanity_field_path === fieldPath)

  const primaryLogoRow = pickByField('primaryLogo')
  const lightLogoRow = pickByField('lightLogo')
  const faviconRow = pickByField('favicon')
  const defaultOgRow = pickByField('defaultOgImage')

  const tx = client.transaction()
  tx.createIfNotExists({
    _id: documentId,
    _type: 'siteSettings',
    title: 'Great Outdoors Site Settings',
  })
  tx.patch(documentId, {
    set: {
      legacyAssetMappings: mappingItems,
      ...(primaryLogoRow ? { primaryLogo: toImageRef(primaryLogoRow.sanity_asset_id) } : {}),
      ...(lightLogoRow ? { lightLogo: toImageRef(lightLogoRow.sanity_asset_id) } : {}),
      ...(faviconRow ? { favicon: toImageRef(faviconRow.sanity_asset_id) } : {}),
      ...(defaultOgRow ? { defaultOgImage: toImageRef(defaultOgRow.sanity_asset_id) } : {}),
    },
  })
  await tx.commit()

  console.log(`Synced ${mappingItems.length} mapping rows into document ${documentId}`)
  console.log(`Set shared fields: primaryLogo=${Boolean(primaryLogoRow)}, lightLogo=${Boolean(lightLogoRow)}, favicon=${Boolean(faviconRow)}, defaultOgImage=${Boolean(defaultOgRow)}`)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
