module.exports = {
  siteMetadata: {
    title: `Centenary: Stefan Knapp`,
    description: `A Mid Wales Arts exhibition.`,
    author: `Matt Cook <matt@sciencefidelity.co.uk>`,
    keywords: [`stefan knapp`, `artist`, `sculptor`, `painter`, `enamelist`, `exhibition`, `polish`, `british`, `mid wales arts`],
    siteUrl: `https://centenary.midwalesarts.org.uk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./generated/graphqlTypes.ts`,
      }
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/icons/mwa-icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
