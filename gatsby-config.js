module.exports = {
  siteMetadata: {
    title: `dovlius`,
    description: `Desarrollo de soluciones digitales`,
    socialMedia: {
      facebook: 'https://facebook.com/dovlius',
      instagram: 'https://instagram.com/dovlius',
      pinterest: 'https://pinterest.com/dovlius',
      twitter: 'https://twitter.com/dovlius'
    },
    author: `@dovlius`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-122115546-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dovlius`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0070BA`,
        theme_color: `#0070BA`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-material-ui`,
    //   options: {
    //     stylesProvider: {
    //       injectFirst: true,
    //     },
    //   },
    // },
    // `gatsby-plugin-styled-components`
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
