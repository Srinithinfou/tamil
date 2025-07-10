const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

try {
  console.log("🚀 Starting Next.js build and export...")

  // Run Next.js build with export
  execSync("next build", { stdio: "inherit" })

  // Verify out directory exists and check contents
  const outDir = path.join(process.cwd(), "out")
  if (fs.existsSync(outDir)) {
    console.log("✅ Build successful - out directory created")

    const files = fs.readdirSync(outDir)
    console.log("📁 Files in out directory:")
    files.forEach((file) => {
      const filePath = path.join(outDir, file)
      const stats = fs.statSync(filePath)
      if (stats.isFile()) {
        console.log(`   📄 ${file}`)
      } else if (stats.isDirectory()) {
        console.log(`   📁 ${file}/`)
      }
    })

    // Check for index.html specifically
    const indexPath = path.join(outDir, "index.html")
    if (fs.existsSync(indexPath)) {
      console.log("✅ index.html found")
    } else {
      console.log("⚠️  index.html not found - checking for alternative structure")
    }

    // Check for 404.html
    const notFoundPath = path.join(outDir, "404.html")
    if (fs.existsSync(notFoundPath)) {
      console.log("✅ 404.html found")
    } else {
      console.log("⚠️  404.html not found")
    }
  } else {
    console.error("❌ Build failed - out directory not found")
    process.exit(1)
  }
} catch (error) {
  console.error("❌ Build failed:", error.message)
  process.exit(1)
}
