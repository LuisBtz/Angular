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
      projectId: "mqltihbr",
      dataset: "production",
      watchMode: true,
      overlayDrafts: true, 
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
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://angular.us14.list-manage.com/subscribe/post?u=fbce6b8aeb51b3bdf3ddde008&amp;id=4e9ac4963b&amp;f_id=00e1bee0f0", // string; add your MC list endpoint here; see instructions below
      timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
    },
  },
]
};



