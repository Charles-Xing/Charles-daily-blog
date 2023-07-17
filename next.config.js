/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // Increase website security and performance by preventing the loading of malicious or unauthorized images.
  images: {
    domains: ["links.papareact.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  }
}

module.exports = nextConfig
