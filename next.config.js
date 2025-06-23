/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/MaxTkachPortfolioWeb',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 