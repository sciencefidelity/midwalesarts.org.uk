export default {
  name: 'frontPageSection',
  title: 'Front Page Section',
  type: 'document',
  localize: true,
  fields: [
    {
      name: 'title',
      title: 'Headline',
      type: 'localeString',
    },
    {
      name: 'caption',
      title: 'Subheading',
      type: 'localeString',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'localeString',
    },
    {
      name: 'body',
      title: 'Body',
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
      type: 'url',
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
