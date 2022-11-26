/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com', 'media.graphcms.com'],
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/post-page/1',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
