import { FaSpa } from 'react-icons/fa'

export default {
  name: 'space',
  title: 'Our Spaces',
  type: 'document',
  icon: FaSpa,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeRichText',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'localeSlug',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'mainImage',
    },
  },
}
