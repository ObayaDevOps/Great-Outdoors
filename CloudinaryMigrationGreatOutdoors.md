# Great-Outdoors Cloudinary -> Sanity Migration Plan

Branch: `cloudinaryImageMigration`  
Date: March 4, 2026  
Base reference: `/home/obi/dev/CloudinaryMigration.md`  
Production URL for parity checks: `https://www.greatoutdoorsuganda.com`  
Local Cloudinary export path: `/media/obi/Seagate/Cloudinary_Bulk_Download_March_4_2026`  
Sanity target: `projectId=y563wtf6`, `dataset=production`

## 1) Scope and Goal

Migrate all image usage in `Great-Outdoors` from Cloudinary to Sanity while preserving page appearance and behavior.

Success criteria:
1. No runtime image dependency on `res.cloudinary.com` for live page content.
2. Visual parity with production before migration (desktop + mobile) on critical routes.
3. SEO image fields (`og:image`, favicon equivalents) resolve correctly after deployment.
4. Asset mapping is complete and auditable.

## 2) Current Repo Findings

Detected Cloudinary usage types:
1. Direct hardcoded URLs across pages/components (majority).
2. Helper utility usage via `src/util/cloudinaryImageRetreival.js`.
3. Next.js image allowlist includes `res.cloudinary.com` in `next.config.js`.
4. Dependency includes `cloudinary-build-url` in `package.json`.

Likely high-impact files include:
1. `src/pages/gallery.js`
2. `src/pages/index.js`
3. `src/pages/rejuvenate/index.js`
4. `src/pages/retreat2.js`
5. `src/pages/rest/index.js`
6. landing-page components under `src/components/landingPage/*`
7. shared branding/meta usage (`src/components/navbar.js`, `src/components/footer.js`, multiple page `<Head>` blocks)

## 3) Sanity Schema Coverage (Images)

This repo already has Sanity image fields that can host migrated media.

Primary schema docs and image-capable fields:
1. `landingPage` (`src/sanity/schemaTypes/landingPageSchema.js`)
- `aboutUsBackgroundImage`
- `corporateBackgroundImage`
- `eatAndDrinkBackgroundImage`
- `forestBackgroundImage`

2. `galleryPage` (`src/sanity/schemaTypes/galleryPageSchema.js`)
- `galleryImages[]` (array of `image`)

3. `retreatPage` (`src/sanity/schemaTypes/retreatPageSchema.js`)
- `heroImage`
- `corporateSpace.image`
- `activities[].image`
- `accommodation.image`
- `gallery.images[]`

4. `foodPage` (`src/sanity/schemaTypes/rejuvenate/foodPageSchema.js`)
- `foodCards[].image`
- `seo.ogImage`

5. `rejuvenatePage` (`src/sanity/schemaTypes/rejuvenate/rejuvenatePageSchema.js`)
- `aboutUsBackgroundImage`

6. Rest/accommodation schemas (all include image arrays):
- `src/sanity/schemaTypes/rest/cabinPageSchema.js` -> `images[]`
- `src/sanity/schemaTypes/rest/cottagePageSchema.js` -> `images[]`
- `src/sanity/schemaTypes/rest/deluxeRoomPageSchema.js` -> `images[]`
- `src/sanity/schemaTypes/rest/deluxeTwinRoomPageSchema.js` -> `images[]`
- `src/sanity/schemaTypes/rest/doubleCottagePageSchema.js` -> `images[]`

Migration implication:
1. Most hardcoded Cloudinary URLs can move to Sanity document fields.
2. Remaining static assets (favicon/logo fallback strings) can be replaced with Sanity CDN URLs from uploaded assets.

## 4) Workstreams and Ownership

## A) Asset Upload and Mapping

Objective:
1. Import local files from `/media/obi/Seagate/Cloudinary_Bulk_Download_March_4_2026` into Sanity.
2. Build and validate mapping table between old Cloudinary URLs and new Sanity asset URLs.

Task breakdown:
1. Build initial candidate URL list from repo code references.
2. Normalize file names/public IDs and map to local downloaded files.
3. Upload to Sanity production dataset and capture resulting `assetId` + URL.
4. Fill mapping table and flag unresolved rows.

Execution mode:
1. Local file inspection and CSV prep: Programmatic.
2. Upload in Studio/Media UI: Manual Browser.
3. Optional upload automation via CLI/import script: Programmatic.

## B) Code Migration

Objective:
1. Replace direct Cloudinary URLs using mapping table.
2. Replace helper behavior (`cloudinaryImageRetreival.js`) with Sanity image URL logic or remove helper if obsolete.
3. Remove Cloudinary dependency/config after validation.

Execution mode:
1. File replacements and code updates: Programmatic.
2. Final visual review/signoff: Manual Browser.

## C) Parity Verification (Before vs After)

Objective:
1. Prove pages appear equivalent before and after migration.
2. Detect regressions in missing images, layout shifts, and SEO images.

Execution mode:
1. Browser snapshots and interaction capture with Playwright MCP: Programmatic.
2. Human final review and approval: Manual Browser.

## 5) Playwright MCP Verification Plan (Before and After)

Use Playwright MCP to capture baseline (before changes) and compare against migrated build (after changes).

## Routes to Validate

Critical route set:
1. `/`
2. `/gallery`
3. `/rejuvenate`
4. `/rejuvenate/food`
5. `/rest`
6. `/rest/cabins`
7. `/rest/cottage`
8. `/rest/cottage-double-room`
9. `/rest/deluxe-room`
10. `/rest/deluxe-room-twin`
11. `/contact`
12. `/reservations`
13. `/testimonials`
14. `/retreat2`

## Baseline Capture (Pre-migration)

1. Open production page for each route.
2. Capture:
- full-page screenshot (desktop)
- full-page screenshot (mobile viewport)
- network failures for image requests
- count of image elements with broken loads
3. Save artifacts under:
- `artifacts/playwright/before/<route>/...`

## Post-migration Capture

1. Run against staging/preview deployment of this branch (recommended).
2. Repeat same checks and save under:
- `artifacts/playwright/after/<route>/...`

## Diff and Gates

1. Pixel diff threshold per page:
- target <= 1.5% differing pixels for stable sections
- manual accept list for expected dynamic regions (carousels, animated sections)
2. Zero broken image responses for first-party page image requests.
3. Verify social image tags:
- `meta[property='og:image']`
- `meta[property='og:image:secure_url']`
4. Verify favicon URL is valid and not Cloudinary.

## 6) Detailed Phased Checklist

## Phase 0 - Safety and Baseline

1. Confirm branch: `cloudinaryImageMigration`.
2. Keep local stash untouched until migration done.
3. Run Playwright baseline capture against production URL.
4. Export current Cloudinary references into a CSV seed list.

## Phase 1 - Asset Upload + Mapping

1. Prepare mapping templates:
- `/home/obi/dev/Great-Outdoors/CloudinaryToSanityAssetMapping.csv`
- `/home/obi/dev/Great-Outdoors/CloudinaryToSanityAssetMapping.md`
2. Populate rows from code references.
3. Match each Cloudinary item to local file from external disk folder.
4. Upload assets into Sanity production.
5. Record `sanity_asset_id`, `sanity_url`, `document_target`, `field_path`.
6. Resolve all missing/unmatched rows before code edits.

## Phase 2 - Code Cutover

1. Replace direct Cloudinary URLs route by route (start with shared logo/meta assets).
2. Migrate page-specific media (`gallery`, `rejuvenate`, `retreat`, `rest`).
3. Refactor/remove `cloudinaryImageRetreival.js` usage.
4. Keep temporary compatibility if needed for partial rollout.
5. Update `next.config.js`:
- keep `res.cloudinary.com` until post-deploy validation completes
- ensure `cdn.sanity.io` remains enabled
6. Remove `cloudinary-build-url` dependency when no references remain.

## Phase 3 - Verification and Launch

1. Run local build/lint checks.
2. Deploy preview/staging.
3. Run Playwright post-migration captures.
4. Run before/after diff and resolve regressions.
5. Run manual browser walkthrough for critical routes.
6. Promote to production.

## Phase 4 - Post-Launch Cleanup

1. Re-scan repo for `res.cloudinary.com` and Cloudinary helpers.
2. Remove Cloudinary allowlist from `next.config.js`.
3. Remove stale commented Cloudinary URLs where practical.
4. Archive migration artifacts and mapping table with date/version.

## 7) Programmatic vs Manual Browser Matrix

| Task | Programmatic | Manual Browser |
|---|---|---|
| Enumerate Cloudinary references | Yes | No |
| Seed mapping table from code | Yes | No |
| Match URLs to local files by naming rules | Yes | Optional |
| Upload assets to Sanity | Optional (script) | Yes (default) |
| Replace code references | Yes | No |
| Build/lint checks | Yes | No |
| Playwright baseline and post-migration captures | Yes | No |
| Visual approval and acceptance | Optional | Yes |
| Deployment promotion and production approval | Optional | Yes |
| Final Cloudinary decommission decisions | No | Yes |

## 8) Pre-Migration and Post-Migration Verification Checklist

## Before

1. Baseline screenshots captured for all critical routes.
2. Baseline OG image values collected for critical pages.
3. Current favicon URL captured.
4. Cloudinary reference inventory exported and frozen.

## After

1. All critical routes pass screenshot diff threshold.
2. No broken image requests on tested routes.
3. OG image tags resolve to valid URLs.
4. No functional regressions in gallery/lightbox/carousel sections.
5. Repo scan shows no active `res.cloudinary.com` references in production code paths.

## 9) Decisions Locked for Execution

1. Mapping table is pre-populated from current source Cloudinary references.
2. Visual parity checks use strict page diff (no dynamic-section exclusions).
3. Migration targets Sanity document fields first, not hardcoded CDN links where schema support exists.
4. Baseline comparison target is production: `https://www.greatoutdoorsuganda.com`.
5. Upload target is Sanity `projectId=y563wtf6`, `dataset=production`.

## 10) Deliverables for This Repo

1. Repo-specific plan document (this file).
2. Asset mapping templates (CSV + Markdown).
3. Playwright before/after artifact folders and diff report.
4. Migration PR on `cloudinaryImageMigration`.
