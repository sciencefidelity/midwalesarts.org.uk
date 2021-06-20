export default {
  name: 'frontPage',
  title: 'Front Page',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'imageTitle',
      title: 'Headline',
      type: 'localeString',
    },
    {
      name: 'imageCaption',
      title: 'Subheading',
      type: 'localeString',
    },
    {
      name: 'body',
      title: 'Introduction',
      type: 'localeRichText',
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'localeString',
    },
    {
      name: 'ctaLink',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'captionImage',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'subImage',
      title: 'Inset image',
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
