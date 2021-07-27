const path = require(`path`)

// TODO: temporary workaround for https://github.com/gatsbyjs/gatsby/issues/31878
exports.onCreateWebpackConfig = ({
  actions,
  plugins,
  stage,
  getConfig
}) => {
  // override config only during production JS & CSS build
  if (stage === 'build-javascript') {
    // get current webpack config
    const config = getConfig()

    const options = {
      minimizerOptions: {
        preset: [
          `default`,
          {
            svgo: {
              full: true,
              plugins: [
                // potentially destructive plugins removed - see https://github.com/gatsbyjs/gatsby/issues/15629
                // use correct config format and remove plugins requiring specific params - see https://github.com/gatsbyjs/gatsby/issues/31619
                `removeUselessDefs`,
                `cleanupAttrs`,
                `cleanupEnableBackground`,
                `cleanupIDs`,
                `cleanupListOfValues`,
                `cleanupNumericValues`,
                `collapseGroups`,
                `convertColors`,
                `convertPathData`,
                `convertStyleToAttrs`,
                `convertTransform`,
                `inlineStyles`,
                `mergePaths`,
                `minifyStyles`,
                `moveElemsAttrsToGroup`,
                `moveGroupAttrsToElems`,
                `prefixIds`,
                `removeAttrs`,
                `removeComments`,
                `removeDesc`,
                `removeDimensions`,
                `removeDoctype`,
                `removeEditorsNSData`,
                `removeEmptyAttrs`,
                `removeEmptyContainers`,
                `removeEmptyText`,
                `removeHiddenElems`,
                `removeMetadata`,
                `removeNonInheritableGroupAttrs`,
                `removeOffCanvasPaths`,
                `removeRasterImages`,
                `removeScriptElement`,
                `removeStyleElement`,
                `removeTitle`,
                `removeUnknownsAndDefaults`,
                `removeUnusedNS`,
                `removeUselessStrokeAndFill`,
                `removeXMLProcInst`,
                `reusePaths`,
                `sortAttrs`,
              ],
            },
          },
        ],
      }
    }
    // find CSS minimizer
    const minifyCssIndex = config.optimization.minimizer.findIndex(
      minimizer => minimizer.constructor.name ===
        'CssMinimizerPlugin'
    )
    // if found, overwrite existing CSS minimizer with the new one
    if (minifyCssIndex > -1) {
      config.optimization.minimizer[minifyCssIndex] =
        plugins.minifyCss(options)
    }
    // replace webpack config with the modified object
    actions.replaceWebpackConfig(config)
  }
}

function getCurrentDate() {
  const d = new Date()
  let month = (d.getMonth() + 1).toString()
  if (month.length < 2) {
    month = `0${month}`
  }
  let day = d.getDate().toString()
  if (day.length < 2) {
    day = `0${day}`
  }
  return `${d.getFullYear()}-${month}-${day}`
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const eventsPage = require.resolve(`./src/templates/events.tsx`)
  const exhibitionsPage = require.resolve(`./src/templates/exhibitions.tsx`)
  const artistTemplate = path.resolve(`./src/templates/artist.tsx`)
  const eventTemplate = path.resolve(`./src/templates/event.tsx`)
  const exhibitionTemplate = path.resolve(`./src/templates/exhibition.tsx`)
  const postTemplate = path.resolve(`./src/templates/post.tsx`)
  const videoTemplate = path.resolve(`./src/templates/video.tsx`)

  // Create static pages
  createPage({
    path: `/events/`,
    component: eventsPage,
    context: {
      currentDate: getCurrentDate(),
    },
  })
  createPage({
    path: `/exhibitions/`,
    component: exhibitionsPage,
    context: {
      currentDate: getCurrentDate(),
    },
  })

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
      allSanityPost(sort: {order: ASC, fields: publishedAt}) {
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
        path: `/artists/${edge.node.slug.current}/`,
        component: artistTemplate,
        context: {
          name: `${edge.node.title}`,
        },
      })
    })

    // Create event pages.
    result.data.allSanityEvent.edges.forEach(edge => {
      createPage({
        path: `/events/${edge.node.slug.en.current}/`,
        component: eventTemplate,
        context: {
          slug: `${edge.node.slug.en.current}`,
        },
      })
    })

    // Create exhibition pages.
    result.data.allSanityExhibition.edges.forEach(edge => {
      createPage({
        path: `/exhibitions/${edge.node.slug.en.current}/`,
        component: exhibitionTemplate,
        context: {
          title: `${edge.node.title.en}`,
        },
      })
    })

    // Create post pages.
    const posts = result.data.allSanityPost.edges
    posts.forEach(({ node }, index) => {
      createPage({
        path: `/news/${node.slug.en.current}/`,
        component: postTemplate,
        context: {
          slug: `${node.slug.en.current}`,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node
        },
      })
    })

    // Create video pages.
    result.data.allSanityVideo.edges.forEach(edge => {
      createPage({
        path: `/videos/${edge.node.slug.en.current}/`,
        component: videoTemplate,
        context: {
          slug: `${edge.node.slug.en.current}`,
        },
      })
    })
  })
}

