import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'atuc1oy0',
  dataset: 'production',
  apiVersion: '2022-05-25',
  useCdn: true,
})
