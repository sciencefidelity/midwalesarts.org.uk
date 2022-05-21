import { i18n } from '../../languages'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { Artist } from '../../components/twemoji'

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: Artist,
  i18n,
  initialValue: {
    __i18n_lang: i18n.base,
    __i18n_refs: []
  },
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string'
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
      name: 'biography',
      title: 'Biography',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueLocale
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}
