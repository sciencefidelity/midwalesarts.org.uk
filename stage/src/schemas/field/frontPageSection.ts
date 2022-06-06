import { Rule } from '@sanity/types'
import { Newspaper } from '../../components/twemoji'

export default {
  name: 'frontPageSection',
  title: 'Headline',
  type: 'document',
  icon: Newspaper,
  groups: [
    {
      name: 'headline',
      title: 'Headline'
    },
    {
      name: 'body',
      title: 'Body'
    },
    {
      name: 'images',
      title: 'Images'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Headline',
      type: 'localeString',
      description: 'Limit 15 characters.',
      group: 'headline'
    },
    {
      name: 'caption',
      title: 'Subheading',
      type: 'localeString',
      description: 'Limit 35 characters.',
      group: 'headline'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'localeString',
      description: 'Limit 30 characters.',
      group: 'headline'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeText',
      description: 'Limit 400 characters.',
      group: 'body'
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'localeString',
      description: 'A call to action for the internal link (20 characters max).',
      group: 'body'
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
            { type: 'workshop' }
          ],
          options: {
            filter: () => {
              return {
                filter: '__i18n_lang == "en"'
              }
            }
          }
        }
      ],
      validation: (Rule: Rule) => Rule.required(),
      group: 'body'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      description: 'Should be jpeg of 1440px along the longest edge, 500-600k is best.',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'caption',
          type: 'localeString',
          title: 'Caption',
          description: 'Image caption (title of artwork)',
          options: {
            isHighlighted: true
          }
        }
      ],
      group: 'images'
    },
    {
      name: 'subImage',
      title: 'Inset image',
      description: 'Should be jpeg of 1440px along the longest edge, 500-600k is best.',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'caption',
          type: 'localeString',
          title: 'Caption',
          description: 'Image caption (title of artwork)',
          options: {
            isHighlighted: true
          }
        }
      ],
      group: 'images'
    }
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'mainImage'
    }
  }
}
