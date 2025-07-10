const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

try {
  console.log("🚀 Starting Next.js build and export...")

  // Clean previous build
  const outDir = path.join(process.cwd(), "out")
  if (fs.existsSync(outDir)) {
    console.log("🧹 Cleaning previous build...")
    fs.rmSync(outDir, { recursive: true, force: true })
  }

  // Run Next.js build
  execSync("next build", { stdio: "inherit" })

  // Verify out directory and contents
  if (fs.existsSync(outDir)) {
    console.log("✅ Build successful - out directory created")

    // Check for CSS files
    const staticDir = path.join(outDir, "_next", "static")
    if (fs.existsSync(staticDir)) {
      console.log("✅ Static assets directory found")

      // Look for CSS files
      const findCSSFiles = (dir) => {
        const files = fs.readdirSync(dir)
        files.forEach((file) => {
          const filePath = path.join(dir, file)
          const stats = fs.statSync(filePath)
          if (stats.isDirectory()) {
            findCSSFiles(filePath)
          } else if (file.endsWith(".css")) {
            console.log(`✅ CSS file found: ${filePath.replace(outDir, "")}`)
          }
        })
      }

      findCSSFiles(staticDir)
    }

    // List main files
    const files = fs.readdirSync(outDir)
    console.log("📁 Main files in out directory:")
    files.forEach((file) => {
      console.log(`   📄 ${file}`)
    })

    // Check for index.html
    const indexPath = path.join(outDir, "index.html")
    if (fs.existsSync(indexPath)) {
      console.log("✅ index.html found")

      // Check if CSS is referenced in HTML
      const htmlContent = fs.readFileSync(indexPath, "utf8")
      if (htmlContent.includes(".css")) {
        console.log("✅ CSS references found in HTML")
      } else {
        console.log("⚠️  No CSS references found in HTML")
      }
    }
  } else {
    console.error("❌ Build failed - out directory not found")
    process.exit(1)
  }
} catch (error) {
  console.error("❌ Build failed:", error.message)
  process.exit(1)
}
