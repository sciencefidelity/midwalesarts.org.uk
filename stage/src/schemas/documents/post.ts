import { i18n } from '../../languages'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
import StringWithLimits from '../../components/StringWithLimits'
import { WritingHand } from '../../components/twemoji'
import { Rule } from '@sanity/types'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: WritingHand,
  i18n,
  initialValue: {
    __i18n_lang: i18n.base,
    __i18n_refs: [],
    publishedAt: new Date().toISOString()
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
      name: 'meta',
      title: 'Meta'
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
      title: 'Title',
      type: 'string',
      group: 'content'
    },
    {
      name: 'image',
      title: 'Feature image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'content'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueLocale
      },
      group: 'settings'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      options: {
        filter: ({ document }) => {
          const { __i18n_lang } = document
          return {
            filter: `__i18n_lang == "${__i18n_lang}"`
          }
        }
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'tag' },
          options: {
            filter: ({ document }) => {
              const { __i18n_lang } = document
              return {
                filter: `__i18n_lang == "${__i18n_lang}"`
              }
            }
          }
        }
      ],
      group: 'settings'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'settings'
    },
    {
      name: 'mataTitle',
      title: 'Meta Title',
      type: 'string',
      inputComponent: StringWithLimits,
      validation: (Rule: Rule) => Rule.max(70).warning("Some text won't be visible."),
      group: 'meta'
    },
    {
      name: 'mataDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 156 characters.', // You’ve used 0
      validation: (Rule: Rule) => Rule.max(156).warning("Some text won't be visible."),
      group: 'meta'
    },
    {
      name: 'canonicalURL',
      title: 'Canonical URL',
      type: 'url',
      group: 'meta'
    },
    {
      name: 'ogImage',
      title: 'Social image',
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
      description: 'Recommended: 125 characters.', // You’ve used 0
      group: 'social'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.title',
      media: 'image'
    },
    prepare: ({ title, author, media }) => {
      return {
        title,
        subtitle: author && `by ${author}`,
        media
      }
    }
  }
}
