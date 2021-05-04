export default {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Biography',
      type: 'localeRichText',
    },
    {
      name: 'disciplines',
      title: 'Disciplines',
      type: 'array',
      of: [{type: 'reference', to: {type: 'discipline'}}],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
      title: 'title',
      media: 'mainImage',
    },
  },
}
