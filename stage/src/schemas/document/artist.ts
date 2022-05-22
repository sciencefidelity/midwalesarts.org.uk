import { i18n } from '../../languages'
import { StringWithLimits } from '../../components/StringWithLimits'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { Rule } from '@sanity/types'
import { Artist } from '../../components/twemoji'

export default {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  icon: Artist,
  i18n,
  initialValue: {
    __i18n_lang: i18n.base,
    __i18n_refs: []
  },
  groups: [
    {
      name: 'content',
      title: 'Content'
    },
    {
      name: 'settings',
      title: 'Settings'
    },
    {
      name: 'social',
      title: 'Social'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Name',
      description: 'Artist full name.',
      type: 'string',
      group: 'content'
    },
    {
      name: 'body',
      title: 'Biography',
      description: 'Biography or artistic statment, choose Quote from the dropdown in the top left for statements.',
      type: 'portableText',
      group: 'content'
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
          title: 'Caption',
          description: 'Image caption (title of artwork)',
          options: {
            isHighlighted: true
          }
        }
      ],
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
        isUnique: isUniqueLocale
      },
      // validation: (Rule: Rule) => Rule.required(),
      group: 'settings'
    },
    {
      name: 'disciplines',
      title: 'Disciplines',
      description: 'Choose from the dropdown. Add disciplines in the Discipline section.',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'discipline' } }],
      group: 'settings'
    },
    {
      name: 'ogImage',
      title: 'Social image',
      description: 'Image for Facebook and Twitter share (1200 x 630px).',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'social'
    },
    {
      name: 'ogTitle',
      title: 'Social title',
      type: 'string',
      inputComponent: StringWithLimits,
      validation: (Rule: Rule) => Rule.max(70).warning("Some text won't be visible."),
      group: 'social'
    },
    {
      name: 'ogDescription',
      title: 'Social Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 125 characters.',
      group: 'social'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}
