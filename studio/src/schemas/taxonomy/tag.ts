import { Label } from '../../components/twemoji'

export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: Label,
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
