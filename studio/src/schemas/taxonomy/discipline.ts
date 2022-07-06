import {Paintbrush} from '../../components/twemoji'

export default {
  name: 'discipline',
  title: 'Discipline',
  type: 'document',
  icon: Paintbrush,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'title.cy',
    },
    prepare({subtitle, title}: {subtitle: string; title: string}) {
      return {
        title: title,
        subtitle: subtitle,
        media: Paintbrush,
      }
    },
  },
}
