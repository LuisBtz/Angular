/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Angular`,
    siteUrl: `https://angular.com/`,
    description: `Angular website`,
    twitterUsername: `@angular.projects`,
    image: `/screenshot.png`,
    author: `angular`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "mqltihbr",
      "dataset": "production"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  }]
};