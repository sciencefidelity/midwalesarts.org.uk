import { FaCalendarAlt } from 'react-icons/fa'

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: FaCalendarAlt,
  groups: [
    {
      name: 'info',
      title: 'Info'
    },
    {
      name: 'content',
      title: 'Content'
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      group: 'content'
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Click Generate.',
      type: 'localeSlug',
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
      name: 'recurring',
      title: 'Recurring event',
      type: 'boolean',
      group: 'content'
    },
    {
      name: 'briteLink',
      title: 'Eventbrite link',
      description: 'Leave blank if the event is not on Eventbrite.',
      type: 'url',
      group: 'content'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeRichText',
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
      group: 'content'
    },
    {
      name: 'seoTitle',
      title: 'SEO title',
      type: 'localeString',
      description:
        'Displayed on Facebook and Twitter shares (max 60 characters).',
      group: 'seo'
    },
    {
      name: 'seoDescription',
      title: 'SEO description',
      type: 'localeString',
      description:
        'Displayed on Facebook and Twitter shares (max 65 characters).',
      group: 'seo'
    },
    {
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image',
      description:
        'Ideal size 1200 x 630px (if not added main image will be used).',
      group: 'seo'
    }
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'mainImage'
    }
  }
}
