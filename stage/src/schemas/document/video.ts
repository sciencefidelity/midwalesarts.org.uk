import { i18n } from '../../languages'
import moment from 'moment'
// import { isUniqueLocale } from '../../lib/isUniqueLocale'
// import { StringWithLimits } from '../../components/StringWithLimits'
import { Rule } from '@sanity/types'
import { FilmProjector } from '../../components/twemoji'


export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  icon: FilmProjector,
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
      title: 'Title',
      type: 'string',
      group: 'content'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
      group: 'content'
    },
    {
      name: 'videoLink',
      title: 'Video Link',
      type: 'url',
      group: 'settings'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: 'Video thumbnail (1920 x 1080px).',
      options: {
        hotspot: true
      },
      group: 'settings'
    },
    {
      name: 'publishDate',
      title: 'Publish date',
      type: 'datetime',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY',
        calendarTodayLabel: 'Today'
      },
      initialValue: new Date().toISOString(),
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
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'ogImage',
      title: 'Social image',
      type: 'image',
      description: 'Image for Facebook and Twitter share (1200 x 630px).',
      options: {
        hotspot: true
      },
      group: 'social'
    },
    {
      name: 'ogTitle',
      title: 'Social title',
      type: 'string',
      // inputComponent: StringWithLimits,
      validation: (Rule: Rule) => Rule.max(70).warning("Some text won't be visible."),
      group: 'social'
    },
    {
      name: 'ogDescription',
      title: 'Social Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 125 characters.',
      validation: (Rule: Rule) => Rule.max(125).warning("Some text won't be visible."),
      group: 'social'
    }
  ],

  preview: {
    select: {
      title: 'title',
      date: 'publishDate',
      media: 'mainImage'
    },
    prepare: ({ date, media, title }) => {
      return {
        title,
        subtitle: moment(date).format('Do MMM YYYY'),
        media
      }
    }
  }
}
