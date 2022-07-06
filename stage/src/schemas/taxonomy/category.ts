import {Tickets} from '../../components/twemoji'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: Tickets,
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
        media: Tickets,
      }
    },
  },
}
