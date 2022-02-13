import { RiHomeSmileLine } from 'react-icons/ri'
import { StringValidation } from '../interfaces'

export default {
  name: 'frontPage',
  type: 'document',
  title: 'Front Page',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  icon: RiHomeSmileLine,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
    },
    {
      name: 'body',
      title: 'Introduction',
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
      title: 'Link',
      name: 'ctaLink',
      type: 'object',
      fields: [
        {
          name: 'item',
          type: 'reference',
          to: [
            { type: 'artist' },
            { type: 'event' },
            { type: 'exhibition' },
            { type: 'page' },
            { type: 'post' },
            { type: 'video' },
          ]
        }
      ],
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
    },
    {
      name: 'featured',
      title: 'Feature Sections',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'frontPageSection' } }],
      sortable: true,
      description: 'Maximum three items',
      validation: (Rule: StringValidation) => Rule.max(4)
    }
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'mainImage'
    }
  }
}
