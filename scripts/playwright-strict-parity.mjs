#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { chromium } from '@playwright/test'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'

const args = process.argv.slice(2)
if (args.length < 2) {
  console.error('Usage: node scripts/playwright-strict-parity.mjs <beforeBaseUrl> <afterBaseUrl>')
  process.exit(1)
}

const beforeBase = args[0].replace(/\/$/, '')
const afterBase = args[1].replace(/\/$/, '')
const artifactsRoot = path.resolve('artifacts', 'playwright', 'strict-parity')
const routes = [
  '/',
  '/gallery',
  '/rejuvenate',
  '/rejuvenate/food',
  '/rest',
  '/rest/cabins',
  '/rest/cottage',
  '/rest/cottage-double-room',
  '/rest/deluxe-room',
  '/rest/deluxe-room-twin',
  '/contact',
  '/reservations',
  '/testimonials',
  '/retreat2',
]

const viewports = [
  { name: 'desktop', width: 1440, height: 2200 },
  { name: 'mobile', width: 390, height: 2600 },
]

function slug(route) {
  return route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '__')
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
}

async function takeScreenshot(page, url, outPath) {
  await page.goto(url, { waitUntil: 'load', timeout: 120000 })
  await page.waitForTimeout(1500)
  await page.screenshot({ path: outPath, fullPage: true, timeout: 120000 })
}

function compareImages(beforePath, afterPath, diffPath) {
  const before = PNG.sync.read(fs.readFileSync(beforePath))
  const after = PNG.sync.read(fs.readFileSync(afterPath))

  if (before.width !== after.width || before.height !== after.height) {
    return {
      mismatchPixels: -1,
      mismatchRatio: 1,
      reason: `dimension-mismatch ${before.width}x${before.height} vs ${after.width}x${after.height}`,
    }
  }

  const diff = new PNG({ width: before.width, height: before.height })
  const mismatchPixels = pixelmatch(
    before.data,
    after.data,
    diff.data,
    before.width,
    before.height,
    { threshold: 0 }
  )
  fs.writeFileSync(diffPath, PNG.sync.write(diff))
  const mismatchRatio = mismatchPixels / (before.width * before.height)
  return { mismatchPixels, mismatchRatio, reason: '' }
}

async function run() {
  ensureDir(artifactsRoot)
  const browser = await chromium.launch({ headless: true, channel: 'chrome' })
  const report = {
    beforeBase,
    afterBase,
    generatedAt: new Date().toISOString(),
    strict: true,
    routes: [],
    failures: [],
  }

  try {
    for (const route of routes) {
      const routeKey = slug(route)
      const routeReport = { route, viewports: [] }
      for (const vp of viewports) {
        const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } })
        const beforePage = await context.newPage()
        const afterPage = await context.newPage()

        const dir = path.join(artifactsRoot, routeKey, vp.name)
        ensureDir(dir)

        const beforePath = path.join(dir, 'before.png')
        const afterPath = path.join(dir, 'after.png')
        const diffPath = path.join(dir, 'diff.png')
        const beforeUrl = `${beforeBase}${route}`
        const afterUrl = `${afterBase}${route}`

        await takeScreenshot(beforePage, beforeUrl, beforePath)
        await takeScreenshot(afterPage, afterUrl, afterPath)
        const diff = compareImages(beforePath, afterPath, diffPath)

        const item = {
          viewport: vp.name,
          beforeUrl,
          afterUrl,
          mismatchPixels: diff.mismatchPixels,
          mismatchRatio: diff.mismatchRatio,
          reason: diff.reason,
          pass: diff.mismatchPixels === 0,
        }
        routeReport.viewports.push(item)
        if (!item.pass) {
          report.failures.push({ route, viewport: vp.name, ...item })
        }

        await context.close()
      }
      report.routes.push(routeReport)
    }
  } finally {
    await browser.close()
  }

  const reportPath = path.join(artifactsRoot, 'report.json')
  writeJson(reportPath, report)
  console.log(`Report written: ${reportPath}`)
  console.log(`Failures: ${report.failures.length}`)
  if (report.failures.length > 0) {
    process.exit(2)
  }
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
