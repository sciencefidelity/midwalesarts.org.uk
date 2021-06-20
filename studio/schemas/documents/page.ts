import { FaStickyNote } from 'react-icons/fa'

export default {
  name: 'page',
  title: 'Information',
  type: 'document',
  icon: FaStickyNote,
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
      type: 'captionImage',
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
