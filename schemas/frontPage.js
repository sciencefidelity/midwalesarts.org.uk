export default {
  name: 'frontPage',
  title: 'Front Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageTitle',
      title: 'Image title',
      type: 'string',
    },
    {
      name: 'imageCaption',
      title: 'Image caption',
      type: 'string',
    },
    {
      name: 'subImage',
      title: 'Inset image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Introduction',
      type: 'blockContent',
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'Link',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
