import { FaLandmark } from 'react-icons/fa'

export default {
  name: 'exhibition',
  title: 'Exhibition',
  type: 'document',
  icon: FaLandmark,
  groups: [
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
      type: 'localeSlug',
      group: 'content'
    },
    {
      name: 'dateStart',
      title: 'Start date',
      type: 'datetime',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY',
        timeFormat: ''
      },
      group: 'content'
    },
    {
      name: 'dateEnd',
      title: 'End date',
      type: 'datetime',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY',
        timeFormat: ''
      },
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
      type: 'captionImage',
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
