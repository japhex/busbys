/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'pixels-commissions.s3.eu-west-1.amazonaws.com'],
  },
  // https://github.com/vercel/next.js/issues/35835
  optimizeFonts: false,
}

module.exports = nextConfig
