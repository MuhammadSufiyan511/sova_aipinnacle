// scripts/convert-images.mjs
// Run once: node scripts/convert-images.mjs
// Converts all PNGs in src/assets to WebP at 85% quality.
// Original PNGs are kept — Vite imports just need updating to .webp

import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname, basename } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ASSETS_DIR = join(__dirname, '..', 'src', 'assets')

async function findPngs(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await findPngs(full))
    } else if (extname(entry.name).toLowerCase() === '.png') {
      files.push(full)
    }
  }
  return files
}

async function main() {
  const pngs = await findPngs(ASSETS_DIR)
  console.log(`Found ${pngs.length} PNG files\n`)

  for (const png of pngs) {
    const webp = png.replace(/\.png$/i, '.webp')
    const before = (await stat(png)).size
    await sharp(png)
      .webp({ quality: 85, effort: 6 })
      .toFile(webp)
    const after = (await stat(webp)).size
    const saved = Math.round((1 - after / before) * 100)
    console.log(`✓ ${basename(png)} → ${basename(webp)} | ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB (${saved}% smaller)`)
  }
  console.log('\nDone! Now update your imports to use .webp instead of .png')
}

main().catch(console.error)
