/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Fix for the Turbopack root warning
  experimental: {
    // In many recent versions, the key is 'turbopack' not 'turbo'
    turbopack: {
      root: '.',
    },
  },
  // Redirect old routes to the new premium structure
  async redirects() {
    return [
      {
        source: '/inquiry',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/prices',
        destination: '/services',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig