export default {
  name: 'frontPageSection',
  title: 'Front Page Section',
  type: 'document',
  localize: true,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Caption',
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
      name: 'subImage',
      title: 'Inset image',
      type: 'captionImage',
      options: {
        hotspot: true,
      },
      localize: false,
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
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
