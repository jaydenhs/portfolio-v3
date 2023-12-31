/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Jayden Hsiao - Designer & Developer`,
    description: `I strive to bridge the gap between empathetic design and innovative software.`,
    author: `Jayden Hsiao`,
    siteUrl: `https://jaydenh.com/`,
  },
  plugins: [
    //// MDX
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/work`,
      },
    },

    //// Image Optimization

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    // static images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    // dynamic images
    `gatsby-transformer-sharp`,

    //// Manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/logo.png`, // This path is relative to the root of the site.
      },
    },

    //// Styles
    "gatsby-plugin-postcss",

    //// Netlify
    "gatsby-plugin-netlify",
  ],
}
