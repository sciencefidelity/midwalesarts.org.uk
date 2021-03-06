import { Rule } from '@sanity/types'
import { Art } from '../../components/twemoji'

export default {
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  icon: Art,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
    },
    {
      name: 'artist',
      title: 'Artist',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'medium',
      title: 'Medium',
      type: 'localeString'
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Date',
      description: 'The year the work was created.',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Price',
      description:
        'Add £ before the price, use POA for enquire only, and NFS for not for sale.',
      type: 'string'
    },
    {
      name: 'sold',
      title: 'Sold?',
      description: 'Sold artworks will not display on the artist\'s page.',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'exhibition',
      title: 'In exhibition',
      description:
        'Before adding artworks to a new exhibition, add the exhibition in the Exhibitions section.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'exhibition' },
          options: {
            filter: () => {
              return {
                filter: '__i18n_lang == "en"'
              }
            }
          }
        }
      ]
    },
    {
      name: 'mainImage',
      title: 'Main image',
      description:
        'Images should be jpeg of 1440px along the longest edge, 500-600k is best.',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: 'title.en',
      subtitle: 'artist',
      media: 'mainImage'
    }
  }
}
