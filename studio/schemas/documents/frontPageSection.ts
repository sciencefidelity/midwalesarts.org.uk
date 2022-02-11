import { FaNewspaper } from 'react-icons/fa'

export default {
  name: 'frontPageSection',
  title: 'Headline',
  type: 'document',
  icon: FaNewspaper,
  localize: true,
  fields: [
    {
      name: 'title',
      title: 'Headline',
      type: 'localeString',
      description: 'Limit 15 characters.'
    },
    {
      name: 'caption',
      title: 'Subheading',
      type: 'localeString',
      description: 'Limit 35 characters.'
    },
    {
      name: 'heading',
      title: 'Heading',
      description: 'Limit 30 characters.',
      type: 'localeString'
    },
    {
      name: 'body',
      title: 'Body',
      description: 'Limit 400 characters.',
      type: 'localeRichText'
    },
    {
      name: 'cta',
      title: 'Call to Action',
      description:
        'A call to action for the internal link (20 characters max).',
      type: 'localeString'
    },
    {
      name: 'ctaLink',
      title: 'Link',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      description:
        'Images should be jpeg of 1440px along the longest edge, 500-600k is best.',
      type: 'captionImage',
      options: {
        hotspot: true
      }
    },
    {
      name: 'subImage',
      title: 'Inset image',
      description:
        'Images should be jpeg of 1440px along the longest edge, 500-600k is best.',
      type: 'captionImage',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'mainImage'
    }
  }
}
