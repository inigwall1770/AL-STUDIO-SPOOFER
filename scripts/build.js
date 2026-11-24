/**
 * AL STUDIO — Build Script
 * Copies src/index.html ke docs/ untuk GitHub Pages deployment
 */

const fs   = require('fs')
const path = require('path')

const SRC  = path.join(__dirname, '..', 'src', 'index.html')
const DEST = path.join(__dirname, '..', 'docs', 'index.html')

console.log('⬡ AL STUDIO Build Script')
console.log('─'.repeat(40))

// Ensure docs dir
if (!fs.existsSync(path.dirname(DEST))) {
  fs.mkdirSync(path.dirname(DEST), { recursive: true })
  console.log('✓ Created docs/ directory')
}

// Read source
const html = fs.readFileSync(SRC, 'utf8')

// Inject build timestamp
const built = html.replace(
  '</title>',
  `</title>\n<!-- Build: ${new Date().toISOString()} -->`
)

fs.writeFileSync(DEST, built)
console.log('✓ Built → docs/index.html')
console.log('✓ Size:', (built.length / 1024).toFixed(1), 'KB')
console.log('─'.repeat(40))
console.log('Deploy ke GitHub Pages: Settings → Pages → /docs')
