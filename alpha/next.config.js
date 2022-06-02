/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/friend",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "http://sendgrid.com" },
          { key: "Access-Control-Allow-Methods", value: "POST, GET, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "X-Requested-With" },
        ]
      }
    ]
  },
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
