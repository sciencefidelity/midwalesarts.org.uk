import { FramedPicture } from '../../components/twemoji'

export default {
  name: 'exhibition',
  title: 'Exhibition',
  type: 'document',
  icon: FramedPicture,
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
      type: 'string',
      group: 'content'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
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
          description: 'Image caption',
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      description:
        'Displayed on Facebook and Twitter shares (max 60 characters).',
      group: 'seo'
    },
    {
      name: 'seoDescription',
      title: 'SEO description',
      type: 'string',
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
