/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["en", "cy"],
    defaultLocale: "en"
  },
  images: {
    domains: ["cdn.sanity.io"]
  },
  swcMinify: true
}

module.exports = nextConfig
