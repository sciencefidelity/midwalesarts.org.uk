exports.createPages = ({ actions: { createPage }}) => {
  createPage({
    path: '/artists/',
    component: require.resolve('./src/pages/artists.tsx')
  })
}