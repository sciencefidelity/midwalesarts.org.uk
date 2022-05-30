import { i18n } from '../../languages'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
// import { TimeInput } from '../../components/TimeInput'
import { Rule } from '@sanity/types'
import { Clipboard } from '../../components/twemoji'

export default {
  name: 'workshop',
  title: 'Workshop',
  type: 'document',
  icon: Clipboard,
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
      name: 'day',
      title: 'Day of the week',
      type: 'string',
      options: {
        list: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ]
      },
      group: 'settings'
    },
    {
      name: 'startTime',
      title: 'Start time',
      type: 'string',
      group: 'settings'
    },
    {
      name: 'endTime',
      title: 'End time',
      type: 'string',
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
      validation: (Rule: Rule) => Rule.required(),
      group: 'settings'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
      group: 'settings'
    },
    {
      name: 'briteLink',
      title: 'Eventbrite link',
      description: 'Leave blank if the event is not on Eventbrite.',
      type: 'url',
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
      day: 'day',
      startTime: 'startTime',
      endTime: 'endTime',
      media: 'mainImage'
    },
    prepare: ({ day, endTime, media, startTime, title }) => {
      return {
        title,
        subtitle: `${day}s – ${startTime} to ${endTime}`,
        media
      }
    }
  }
}
