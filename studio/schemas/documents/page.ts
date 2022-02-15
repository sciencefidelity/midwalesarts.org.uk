import { FaStickyNote } from 'react-icons/fa'
import { StringValidation } from '../interfaces'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: FaStickyNote,
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
      validation: (Rule: StringValidation) => Rule.required(),
      group: 'info'
    },
    {
      name: 'menuTitle',
      title: 'Menu Title',
      type: 'localeString',
      description: 'The title shown in the main navigation',
      validation: (Rule: StringValidation) => Rule.required(),
      group: 'info'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localeString',
      description: "Not available for 'Page' type",
      group: 'info'
    },
    {
      name: 'template',
      title: 'Template',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'grid',
        list: [
          { title: 'Page', value: 'page' },
          { title: 'Home', value: 'index' },
          { title: 'News', value: 'news' },
          { title: 'Artists', value: 'artists' },
          { title: 'Events', value: 'events' },
          { title: 'Exhibitions', value: 'exhibitions' },
          { title: 'Videos', value: 'videos' },
          { title: 'Visit Us', value: 'visit-us' }
        ]
      },
      initialValue: {
        title: 'Page',
        value: 'page'
      },
      validation: (Rule: StringValidation) => Rule.required(),
      group: 'info'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'localeSlug',
      options: {
        source: 'title',
        maxLength: 96
      },
      group: 'info'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeRichText',
      description: "Only available for 'Page' type",
      group: 'content'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'captionImage',
      description: "Only available for 'Page' type",
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
    }
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'mainImage'
    }
  }
}
