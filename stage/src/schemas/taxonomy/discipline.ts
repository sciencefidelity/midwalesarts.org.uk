import { Paintbrush } from '../../components/twemoji'

export default {
  name: 'discipline',
  title: 'Discipline',
  type: 'document',
  icon: Paintbrush,
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
        media: Paintbrush
      }
    }
  }
}
