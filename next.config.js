/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['media.graphassets.com', 'media.graphcms.com'],
    formats: ['image/webp'],
  },
}
