const path = require('path');

module.exports = {
  siteMetadata: {
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resources`,
        path: `${__dirname}/static/resources/`,
      },
    },
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Access-Control-Allow-Origin: https://*.ridibooks.com, https://*.ridi.io",
            "Vary: Origin",
          ],
        },
      }
    },
  ],
};
