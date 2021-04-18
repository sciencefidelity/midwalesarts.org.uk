export default {
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      localize: true,
    },
    {
      name: 'artist',
      title: 'Artist',
      type: 'string',
    },
    {
      name: 'medium',
      title: 'Medium',
      type: 'string',
      localize: true,
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'sold',
      title: 'Sold?',
      type: 'boolean',
    },
    {
      name: 'exhibition',
      title: 'In exhibition',
      type: 'array',
      of: [{type: 'reference', to: {type: 'exhibition'}}],
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
      title: 'title',
      subtitle: 'artist',
      media: 'mainImage',
    },
  },
}
