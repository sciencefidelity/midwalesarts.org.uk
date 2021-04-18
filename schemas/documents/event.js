export default {
  name: 'event',
  title: 'Event',
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
      name: 'briteLink',
      title: 'Eventbrite link',
      type: 'url',
    },
    {
      name: 'date',
      title: 'Date and time',
      type: 'datetime',
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
