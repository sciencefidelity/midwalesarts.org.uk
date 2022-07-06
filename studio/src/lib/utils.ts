import sanityClient from './sanityClient'
import imageUrlBuilder from '@sanity/image-url'

export const urlFor = (source: any) => {
  const client = sanityClient.withConfig({apiVersion: '2021-03-25'})
  return imageUrlBuilder(client).image(source)
}
