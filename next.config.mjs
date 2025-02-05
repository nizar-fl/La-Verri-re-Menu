/** @type {import('next').NextConfig} */
const withSitemap = require('next-sitemap');

module.exports = withSitemap({
  // Your existing Next.js configuration
  reactStrictMode: true,
  images: {
    domains: ['Laverieremenu.com'], // Add your image domains here
  },
});
const nextConfig = {};

export default nextConfig;
