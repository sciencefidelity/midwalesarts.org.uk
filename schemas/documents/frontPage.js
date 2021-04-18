export default {
  name: 'frontPage',
  title: 'Front Page',
  type: 'document',
  localize: true,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'captionImage',
      options: {
        hotspot: true,
      },
      localize: false,
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
      type: 'captionImage',
      options: {
        hotspot: true,
      },
      localize: false,
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
      type: 'url',
      localize: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
