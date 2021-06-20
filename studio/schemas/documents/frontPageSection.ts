import { FaNewspaper } from 'react-icons/fa'

export default {
  name: 'frontPageSection',
  title: 'Headline',
  type: 'document',
  icon: FaNewspaper,
  localize: true,
  fields: [
    {
      name: 'order',
      title: 'Order',
      description: 'The order that items appear on the fromt page (1 to 4)',
      type: 'number',
    },
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
