exports.createPages = ({ actions: { createPage }}) => {
  createPage({
    path: '/artists/',
    component: require.resolve('./src/pages/artists.tsx')
  })
  createPage({
    path: '/exhibitions/',
    component: require.resolve('./src/pages/exhibitions.tsx')
  })
}