/**
 * AL STUDIO — ZIP Export Script
 * Usage: node scripts/zip.js
 */

const { execSync } = require('child_process')
const path = require('path')
const fs   = require('fs')

const ROOT = path.join(__dirname, '..')
const OUT  = path.join(ROOT, 'al-studio-spoofer.zip')

console.log('⬡ AL STUDIO — ZIP Builder')
console.log('─'.repeat(40))

if (fs.existsSync(OUT)) fs.unlinkSync(OUT)

try {
  execSync(`cd "${ROOT}" && zip -r al-studio-spoofer.zip . -x "*.git*" -x "node_modules/*" -x "*.zip"`)
  const size = (fs.statSync(OUT).size / 1024).toFixed(1)
  console.log('✓ Created:', OUT)
  console.log('✓ Size:', size, 'KB')
} catch (e) {
  console.error('✗ Error:', e.message)
  console.log('Alternative: install zip → sudo apt install zip')
}
