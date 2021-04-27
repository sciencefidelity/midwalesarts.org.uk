const path = require(`path`)

exports.createPages = ({ actions: { createPage }}) => {
  createPage({
    path: '/artists/',
    component: require.resolve('./src/pages/artists.tsx')
  })
  createPage({
    path: '/about/',
    component: require.resolve('./src/pages/about.tsx')
  })
  createPage({
    path: '/events/',
    component: require.resolve('./src/pages/events.tsx')
  })
  createPage({
    path: '/exhibitions/',
    component: require.resolve('./src/pages/exhibitions.tsx')
  })
  createPage({
    path: '/news/',
    component: require.resolve('./src/pages/news.tsx')
  })
  createPage({
    path: '/support/',
    component: require.resolve('./src/pages/support.tsx')
  })
  createPage({
    path: '/videos/',
    component: require.resolve('./src/pages/videos.tsx')
  })
  createPage({
    path: '/visit/',
    component: require.resolve('./src/pages/visit.tsx')
  })
  createPage({
    path: '/workshops/',
    component: require.resolve('./src/pages/workshops.tsx')
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const artistTemplate = path.resolve(`src/templates/artist.tsx`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query loadArtistsQuery {
      allSanityArtist {
        edges {
          node {
            title
            slug {
              current
            }
            mainImage {
              asset {
                gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create artist pages.
    result.data.allSanityArtist.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.slug.current}`,
        component: artistTemplate,
        context: {
          name: `${edge.node.title}`,
          slug: `${edge.node.slug.current}`,
          mainImage: `${edge.node.mainImage.asset.gatsbyImageData}`
        },
      })
    })
  })
}
