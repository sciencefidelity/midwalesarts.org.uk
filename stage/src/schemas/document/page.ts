import { i18n } from '../../languages'
// import { StringWithLimits } from '../../components/StringWithLimits'
// import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { Rule } from '@sanity/types'
import { Books, Newspaper } from '../../components/twemoji'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: Books,
  i18n,
  initialValue: {
    __i18n_lang: i18n.base,
    __i18n_refs: []
  },
  groups: [
    {
      name: 'settings',
      title: 'Settings'
    },
    {
      name: 'content',
      title: 'Content'
    },
    {
      name: 'links',
      title: 'Links'
    },
    {
      name: 'headlines',
      title: 'Headlines'
    },
    {
      name: 'social',
      title: 'Social'
    }
  ],
  fields: [
    {
      name: 'template',
      title: 'Page template',
      type: 'string',
      options: {
        list: [
          'Artists',
          'Events',
          'Exhibitions',
          'Home',
          'News',
          'Page',
          'Support',
          'Videos',
          'Visit',
          'Workshops'
        ]
      },
      initialValue: 'Page',
      validation: (Rule: Rule) => Rule.required(),
      group: 'settings'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      // hidden: ({ document }) => document?.template === 'Home',
      group: 'settings'

    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      hidden: ({ document }) => document?.template === 'Home',
      group: 'settings'
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Click Generate.',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        // isUnique: isUniqueLocale
      },
      validation: (Rule: Rule) => Rule.required(),
      hidden: ({ document }) => document?.template === 'Home',
      group: 'settings'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      description: 'Should be a jpeg of 1440px along the longest edge, 500-600k is best.',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Main Image Caption',
          description: 'Image caption (title of artwork)',
          options: {
            isHighlighted: true,
            collapsible: true
          }
        }
      ],
      hidden: ({ document }) => ['Artists', 'Events', 'Exhibitions', 'News', 'Videos'].find(e => e === document?.template),
      group: 'content'
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
          type: 'string',
          title: 'Inset Image Caption',
          description: 'Image caption (title of artwork)',
          options: {
            isHighlighted: true,
            collapsible: true
          }
        }
      ],
      hidden: ({ document }) => document?.template !== 'Home',
      group: 'content'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
      hidden: ({ document }) => ['Artists', 'Events', 'Exhibitions', 'News', 'Videos', 'Visit'].find(e => e === document?.template),
      group: 'content'
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'string',
      description: 'A call to action for the internal link (20 characters max).',
      hidden: ({ document }) => document?.template !== 'Home',
      group: 'links'
    },
    {
      title: 'Link',
      name: 'ctaLink',
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
      },
      hidden: ({ document }) => document?.template !== 'Home',
      group: 'links'
    },
    {
      name: 'spaces',
      title: 'Spaces',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'space' } }],
      sortable: true,
      validation: (Rule: Rule) => Rule.max(6),
      hidden: ({ document }) => document?.template !== 'Visit',
      group: 'content'
    },
    // {
    //   name: 'spaces',
    //   title: 'Spaces',
    //   type: 'array',
    //   of: [
    //     {
    //       name: 'headline',
    //       title: 'Headline',
    //       type: 'object',
    //       fields: [
    //         {
    //           name: 'title',
    //           title: 'Title',
    //           type: 'string'
    //         },
    //         {
    //           name: 'body',
    //           title: 'Body',
    //           type: 'portableText'
    //         },
    //         {
    //           name: 'slug',
    //           title: 'Slug',
    //           description: 'Click Generate.',
    //           type: 'slug',
    //           options: {
    //             source: 'title',
    //             maxLength: 96,
    //             // isUnique: isUniqueLocale
    //           },
    //           // validation: (Rule: Rule) => Rule.required(),
    //         },
    //         {
    //           name: 'mainImage',
    //           title: 'Main image',
    //           type: 'image',
    //           options: {
    //             hotspot: true
    //           }
    //         }
    //       ]
    //     }
    //   ],
    //   group: 'content'
    // },
    {
      name: 'headline',
      title: 'Headline',
      type: 'array',
      of: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Headline',
              type: 'string',
              description: 'Limit 15 characters.',
              validation: (Rule: Rule) => Rule.max(15).warning("15 characters max.")
            },
            {
              name: 'caption',
              title: 'Subheading',
              type: 'string',
              description: 'Limit 35 characters.',
              validation: (Rule: Rule) => Rule.max(35).warning("35 characters max.")
            },
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
              description: 'Limit 30 characters.',
              validation: (Rule: Rule) => Rule.max(30).warning("30 characters max.")
            },
            {
              name: 'body',
              title: 'Body',
              type: 'portableText',
              description: 'Limit 400 characters.',
              validation: (Rule: Rule) => Rule.max(400).warning("400 characters max.")
            },
            {
              name: 'cta',
              title: 'Call to Action',
              type: 'string',
              description: 'A call to action for the internal link (20 characters max).',
              validation: (Rule: Rule) => Rule.max(20).warning("20 characters max.")
            },
            {
              title: 'Link',
              name: 'ctaLink',
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
            },
            {
              name: 'mainImage',
              title: 'Main image',
              description: 'Images should be jpeg of 1440px along the longest edge, 500-600k is best.',
              type: 'image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'subImage',
              title: 'Inset image',
              description: 'Images should be jpeg of 1440px along the longest edge, 500-600k is best.',
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ],
          preview: {
            select: {
              title: 'title',
              media: 'mainImage'
            }
          }
        }
      ],
      hidden: ({ document }) => document?.template !== 'Home',
      group: 'headlines'
    },
    {
      name: 'ogImage',
      title: 'Social image',
      type: 'image',
      description: 'Image for Facebook and Twitter share (1200 x 630px).',
      options: {
        hotspot: true
      },
      hidden: ({ document }) => document?.template === 'Home',
      group: 'social'
    },
    {
      name: 'ogTitle',
      title: 'Social title',
      type: 'string',
      // inputComponent: StringWithLimits,
      description: 'Recommended: 70 characters.',
      validation: (Rule: Rule) => Rule.max(70).warning("Some text won't be visible."),
      hidden: ({ document }) => document?.template === 'Home',
      group: 'social'
    },
    {
      name: 'ogDescription',
      title: 'Social Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 125 characters.',
      validation: (Rule: Rule) => Rule.max(125).warning("Some text won't be visible."),
      hidden: ({ document }) => document?.template === 'Home',
      group: 'social'
    }
  ],

  preview: {
    select: {
      title: 'title',
      template: 'template',
      media: 'mainImage'
    },
    prepare: ({ media, template, title }) => {
      return {
        title: title,
        subtitle: `Template: ${template}`,
        media: media
      }
    }
  }
}

