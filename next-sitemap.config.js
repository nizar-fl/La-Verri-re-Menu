/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://la-verriere-menu.vercel.app/', // Replace with your domain
    generateRobotsTxt: true, // Generate robots.txt file
    changefreq: 'daily', // Optional: Frequency of content updates
    priority: 0.7, // Optional: Default priority
    sitemapSize: 5000, // Optional: Max entries per sitemap file
  };
  
  module.exports = config;
  