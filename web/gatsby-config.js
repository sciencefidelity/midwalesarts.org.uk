module.exports = {
  siteMetadata: {
    title: `Mid Wales Arts | Gallery, Sculpture Trail, Cafe & Accommodation`,
    description: `Not-for-profit organisation working with artists and the local community to develop access to the arts across Mid Wales.`,
    author: `@sciencefidelity`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
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
        icon: `src/images/mwa-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `e5f80r5a`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
