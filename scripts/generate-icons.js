const fs = require('fs')
const path = require('path')

// Path to your SVG directory
const SVG_DIR = path.join(__dirname, '../public/assets/tx-artworks')
// Output path for the generated icon set
const OUTPUT_FILE = path.join(__dirname, '../src/assets/tx-icons.json')

function generateIconSet() {
  const icons = {}
  const files = fs.readdirSync(SVG_DIR)

  files.forEach((file) => {
    if (file.endsWith('.svg')) {
      const name = file.replace('tx-', '').replace('.svg', '')
      const filePath = path.join(SVG_DIR, file)
      const content = fs.readFileSync(filePath, 'utf8')

      // Extract SVG content
      const svgMatch = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i)
      if (svgMatch) {
        // Extract viewBox if it exists
        const viewBoxMatch = content.match(/viewBox=["']([^"']+)["']/)
        const viewBox = viewBoxMatch ? viewBoxMatch[1].split(' ').map(Number) : [0, 0, 24, 24]

        // Clean up the SVG content
        const cleanedContent = svgMatch[1]
          .replace(/<\?xml.*?\?>/g, '')
          .replace(/<!\[CDATA\[.*?\]\]>/g, '')
          .replace(/<!--.*?-->/g, '')
          .trim()

        icons[name] = {
          body: cleanedContent,
          width: viewBox[2],
          height: viewBox[3]
        }
      }
    }
  })

  const iconSet = {
    prefix: 'tx',
    icons: icons,
    width: 24,
    height: 24
  }

  // Write the icon set file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(iconSet, null, 2))
  console.log(`Generated icon set with ${Object.keys(icons).length} icons`)
}

generateIconSet()
