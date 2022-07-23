/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com']
  },
  async redirects() {
    return [
      { source: '/', destination: '/home', permanent: true }, // a permanent redirect
    ];
  },
}

module.exports = nextConfig
