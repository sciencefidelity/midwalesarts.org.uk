import { i18n } from '../../languages'
import { Label } from '../../components/twemoji'

export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: Label,
  i18n,
  initialValue: {
    __i18n_lang: i18n.base,
    __i18n_refs: []
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
    }
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'title.cy'
    },
    prepare({ subtitle, title }) {
      return {
        title: title,
        subtitle: subtitle,
        media: Label
      }
    }
  }
}
