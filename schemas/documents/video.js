export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      localize: true,
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'localeSlug',
    },
    {
      name: 'videoLink',
      title: 'Video Link',
      type: 'url',
    },
    {
      name: 'publishDate',
      title: 'Publish date',
      type: 'date',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      localize: true,
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
      media: 'mainImage',
    },
  },
}
