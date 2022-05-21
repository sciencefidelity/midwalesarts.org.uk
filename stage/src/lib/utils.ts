import imageUrlBuilder from '@sanity/image-url'
import { client } from '../client'

export const urlFor = (source: any) => {
  return imageUrlBuilder(client).image(source)
}
