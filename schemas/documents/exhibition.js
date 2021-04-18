export default {
  name: 'exhibition',
  title: 'Exhibition',
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
      name: 'dateStart',
      title: 'Start date',
      type: 'date',
    },
    {
      name: 'dateEnd',
      title: 'End date',
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
