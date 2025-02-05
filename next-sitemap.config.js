module.exports = {
    siteUrl: 'https://la-verriere-menu.vercel.app/', // Replace with your website's URL
    generateRobotsTxt: true, // Generate a robots.txt file
    // Split large sitemaps into multiple files
     // Exclude specific pages from the sitemap
    changefreq: 'daily', // Set the default change frequency
    priority: 0.7, // Set the default priority
    transform: async (config, path) => {
      return {
        loc: path, // URL of the page
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: new Date().toISOString(), // Add the last modified date
      };
    },
  };