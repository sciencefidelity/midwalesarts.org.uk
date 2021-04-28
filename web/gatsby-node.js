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
            body {
              _rawEn(resolveReferences: {maxDepth: 10})
            }
            disciplines {
              title {
                en
              }
            }
            id
            mainImage {
              asset {
                gatsbyImageData(sizes: "1440", formats: WEBP, placeholder: BLURRED)
              }
            }
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
            mainImage {
              asset {
                gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
              }
            }
            briteLink
            body {
              _rawEn(resolveReferences: {maxDepth: 10})
            }
            id
            date(formatString: "DDMMYYYY")
            title {
              en
            }
          }
        }
      }
      allSanityExhibition {
        edges {
          node {
            body {
              _rawEn(resolveReferences: {maxDepth: 10})
            }
            dateEnd(formatString: "")
            dateStart(formatString: "")
            id
            mainImage {
              asset {
                gatsbyImageData(width: 1440, placeholder: BLURRED, formats: WEBP)
              }
            }
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
            body {
              _rawEn(resolveReferences: {maxDepth: 10})
            }
            id
            image {
              asset {
                gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
              }
            }
            publishedAt(formatString: "DDMMYYYY")
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
      allSanityVideo {
        edges {
          node {
            body {
              _rawEn(resolveReferences: {maxDepth: 10})
            }
            id
            mainImage {
              asset {
                gatsbyImageData(width: 1440, formats: WEBP, placeholder: BLURRED)
              }
            }
            publishDate(formatString: "DDMMYYYY")
            slug {
              en {
                current
              }
            }
            title {
              en
            }
            videoLink
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
        path: `/artist/${edge.node.slug.current}`,
        component: artistTemplate,
        context: {
          // name: `${edge.node.title}`,
          // slug: `${edge.node.slug.current}`,
          // mainImage: `${edge.node.mainImage.asset.gatsbyImageData}`
        },
      })
    })
    
    // Create event pages.
    result.data.allSanityEvent.edges.forEach(edge => {
      createPage({
        path: `/event/${edge.node.slug.en.current}`,
        component: eventTemplate,
        context: {
          // title: `${edge.node.title.en}`,
          // body: `${edge.node.body._rawEn}`,
          // date: `${edge.node.body.date}`,
          // slug: `${edge.node.slug.current}`,
          // mainImage: `${edge.node.mainImage.asset.gatsbyImageData}`
        },
      })
    })
    
    // Create exhibition pages.
    result.data.allSanityExhibition.edges.forEach(edge => {
      createPage({
        path: `/exhibition/${edge.node.slug.en.current}`,
        component: exhibitionTemplate,
        context: {
          // title: `${edge.node.title}`,
          // body: `${edge.node.body._rawEn}`,
          // startDate: `${edge.node.body.dateStart}`,
          // endDate: `${edge.node.body.dateEnd}`,
          // slug: `${edge.node.slug.current}`,
          // mainImage: `${edge.node.mainImage.asset.gatsbyImageData}`
        },
      })
    })
    
    // Create post pages.
    result.data.allSanityPost.edges.forEach(edge => {
      createPage({
        path: `/news/${edge.node.slug.en.current}`,
        component: postTemplate,
        context: {
          // title: `${edge.node.title}`,
          // body: `${edge.node.body._rawEn}`,
          // startDate: `${edge.node.body.dateStart}`,
          // endDate: `${edge.node.body.dateEnd}`,
          // slug: `${edge.node.slug.current}`,
          // mainImage: `${edge.node.mainImage.asset.gatsbyImageData}`
        },
      })
    })
    
    // Create video pages.
    result.data.allSanityVideo.edges.forEach(edge => {
      createPage({
        path: `/video/${edge.node.slug.en.current}`,
        component: videoTemplate,
        context: {
          // title: `${edge.node.title}`,
          // body: `${edge.node.body._rawEn}`,
          // startDate: `${edge.node.body.dateStart}`,
          // endDate: `${edge.node.body.dateEnd}`,
          // slug: `${edge.node.slug.current}`,
          // mainImage: `${edge.node.mainImage.asset.gatsbyImageData}`
        },
      })
    })
  })
}

