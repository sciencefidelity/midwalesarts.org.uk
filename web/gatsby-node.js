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
  const eventTemplate = path.resolve(`src/templates/event.tsx`)
  const exhibitionTemplate = path.resolve(`src/templates/exhibition.tsx`)
  const postTemplate = path.resolve(`src/templates/post.tsx`)
  const videoTemplate = path.resolve(`src/templates/video.tsx`)
  
  return graphql(`
    query LoadPagesQuery {
      allSanityArtist {
        edges {
          node {
            slug {
              current
            }
            title
          }
        }
      }
      allSanityEvent {
        edges {
          node {
            slug {
              en {
                current
              }
            }
          }
        }
      }
      allSanityExhibition {
        edges {
          node {
            slug {
              en {
                current
              }
            }
            title {
              en
            }
          }
        }
      }
      allSanityPost {
        edges {
          node {
            slug {
              en {
                current
              }
            }
          }
        }
      }
      allSanityVideo {
        edges {
          node {
            slug {
              en {
                current
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
        path: `/artists/${edge.node.slug.current}`,
        component: artistTemplate,
        context: {
          name: `${edge.node.title}`,
        },
      })
    })
    
    // Create event pages.
    result.data.allSanityEvent.edges.forEach(edge => {
      createPage({
        path: `/events/${edge.node.slug.en.current}`,
        component: eventTemplate,
        context: {
          slug: `${edge.node.slug.en.current}`,
        },
      })
    })
    
    // Create exhibition pages.
    result.data.allSanityExhibition.edges.forEach(edge => {
      createPage({
        path: `/exhibitions/${edge.node.slug.en.current}`,
        component: exhibitionTemplate,
        context: {
          title: `${edge.node.title.en}`,
        },
      })
    })
    
    // Create post pages.
    result.data.allSanityPost.edges.forEach(edge => {
      createPage({
        path: `/news/${edge.node.slug.en.current}`,
        component: postTemplate,
        context: {
          slug: `${edge.node.slug.en.current}`,
        },
      })
    })
    
    // Create video pages.
    result.data.allSanityVideo.edges.forEach(edge => {
      createPage({
        path: `/videos/${edge.node.slug.en.current}`,
        component: videoTemplate,
        context: {
          slug: `${edge.node.slug.en.current}`,
        },
      })
    })
  })
}

