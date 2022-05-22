import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { i18n } from '../../languages'
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
  fields: [
    {
      name: 'title',
      title: 'Name',
      description: 'Artist full name.',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Biography',
      description: 'Biography or artistic statment, choose Quote from the dropdown in the top left for statements.',
      type: 'portableText'
    },
    {
      name: 'disciplines',
      title: 'Disciplines',
      description: 'Choose from the dropdown. Add disciplines in the Discipline section.',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'discipline' } }]
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
      validation: (Rule: Rule) => [ Rule.required() ]
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
      ]
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}
