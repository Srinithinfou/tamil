const fs = require("fs")
const path = require("path")

function fixCSSPaths(dir) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      fixCSSPaths(filePath)
    } else if (file.endsWith(".html")) {
      let content = fs.readFileSync(filePath, "utf8")

      // Fix CSS paths to be absolute
      content = content.replace(/href="\/_next/g, 'href="/_next')
      content = content.replace(/src="\/_next/g, 'src="/_next')

      // Ensure CSS loads properly
      if (content.includes("/_next/static/css/")) {
        console.log(`✅ Fixed CSS paths in: ${filePath}`)
      }

      fs.writeFileSync(filePath, content)
    }
  })
}

// Fix CSS paths in all HTML files
const outDir = path.join(process.cwd(), "out")
if (fs.existsSync(outDir)) {
  console.log("🔧 Fixing CSS paths in HTML files...")
  fixCSSPaths(outDir)
  console.log("✅ CSS paths fixed")
}
