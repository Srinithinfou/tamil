const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

try {
  console.log("🚀 Starting Next.js build...")

  // Clean previous build
  const outDir = path.join(process.cwd(), "out")
  if (fs.existsSync(outDir)) {
    console.log("🧹 Cleaning previous build...")
    fs.rmSync(outDir, { recursive: true, force: true })
  }

  // Run Next.js build
  execSync("next build", { stdio: "inherit" })

  // Run post-build script
  execSync("node scripts/post-build.js", { stdio: "inherit" })

  // Verify build
  if (fs.existsSync(outDir)) {
    console.log("✅ Build completed successfully")

    // Check CSS file exists
    const staticDir = path.join(outDir, "_next", "static", "css")
    if (fs.existsSync(staticDir)) {
      const cssFiles = fs.readdirSync(staticDir).filter((f) => f.endsWith(".css"))
      console.log(`✅ Found ${cssFiles.length} CSS file(s):`, cssFiles)
    }

    // Check main HTML files
    const htmlFiles = ["index.html", "about/index.html", "contact/index.html"]
    htmlFiles.forEach((file) => {
      const filePath = path.join(outDir, file)
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, "utf8")
        if (content.includes("/_next/static/css/")) {
          console.log(`✅ CSS linked in ${file}`)
        } else {
          console.log(`⚠️  No CSS found in ${file}`)
        }
      }
    })
  }
} catch (error) {
  console.error("❌ Build failed:", error.message)
  process.exit(1)
}
