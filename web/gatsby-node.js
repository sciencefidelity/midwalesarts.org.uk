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