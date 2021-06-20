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
      description: 'The order that items appear on the front page (1 is first)',
      type: 'number',
    },
    {
      name: 'title',
      title: 'Headline',
      type: 'localeString',
      description: 'Limit 15 characters.',
      validation: (Rule:any) => Rule.max(15).warning(`Limit 35 characters.`),
    },
    {
      name: 'caption',
      title: 'Subheading',
      type: 'localeString',
      description: 'Limit 35 characters.',
      validation: (Rule:any) => Rule.max(35).warning(`Limit 35 characters.`),
    },
    {
      name: 'heading',
      title: 'Heading',
      description: 'Limit 30 characters.',
      type: 'localeString',
      validation: (Rule:any) => Rule.max(30).warning(`Limit 30 characters.`),
    },
    {
      name: 'body',
      title: 'Body',
      description: 'Limit 400 characters.',
      type: 'localeRichText',
      validation: (Rule:any) => Rule.max(400).warning(`Limit 400 characters.`),
    },
    {
      name: 'cta',
      title: 'Call to Action',
      description: 'A call to action for the internal link (20 characters max).',
      type: 'localeString',
      validation: (Rule:any) => Rule.max(20).warning(`Maximum 20 characters.`),
    },
    {
      name: 'ctaLink',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      description: 'Images should be jpeg of 1440px along the longest edge, 500-600k is best.',
      type: 'captionImage',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'subImage',
      title: 'Inset image',
      description: 'Images should be jpeg of 1440px along the longest edge, 500-600k is best.',
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
