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
      title: 'title.en'
    }
  }
}
