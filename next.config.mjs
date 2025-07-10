/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // Ensure CSS is properly handled in static export
  experimental: {
    appDir: true,
  },
  // Configure asset prefix for proper CSS loading
  assetPrefix: '',
  // Ensure proper static generation
  distDir: 'out',
}

export default nextConfig
