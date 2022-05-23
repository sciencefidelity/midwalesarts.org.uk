import { i18n } from '../../languages'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
// import { Rule } from '@sanity/types'
import { ClassicalBuilding } from '../../components/twemoji'

export default {
  name: 'space',
  title: 'Space',
  type: 'document',
  icon: ClassicalBuilding,
  i18n,
  initialValue: {
    __i18n_lang: i18n.base,
    __i18n_refs: []
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
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'mainImage'
    }
  }
}
