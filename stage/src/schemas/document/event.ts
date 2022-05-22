import { i18n } from '../../languages'
import moment from 'moment'
import { StringWithLimits } from '../../components/StringWithLimits'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { Rule } from '@sanity/types'
import { StudioMicrophone } from '../../components/twemoji'

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: StudioMicrophone,
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
      name: 'date',
      title: 'Date and time',
      type: 'datetime',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY,',
        timeFormat: 'h:mm a',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      },
      group: 'content'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
      group: 'content'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      description:
        'Images should be jpeg of 1440px along the longest edge, 500-600k is best.',
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
      // validation: (Rule: Rule) => Rule.required(),
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
      subtitle: 'date',
      media: 'mainImage'
    },
    prepare: ({ title, subtitle, media }) => {
      return {
        title: title,
        subtitle: `${
          subtitle ? moment(subtitle).format('ddd Do MMM YYYY') : 'TBA'
        }`,
        media: media
      }
    }
  }
}

