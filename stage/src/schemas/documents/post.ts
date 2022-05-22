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
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }]
    },
    {
      name: 'publishedAt',
      title: 'Published on',
      type: 'datetime',
      initialValue: new Date().toISOString(),
      options: {
        dateFormat: 'dddd, MMMM Do YYYY,',
        timeFormat: 'h:mm a',
        calendarTodayLabel: 'Today'
      }
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
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
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
