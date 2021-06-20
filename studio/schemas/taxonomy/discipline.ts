import { FaLightbulb } from 'react-icons/fa'

export default {
  name: 'discipline',
  title: 'Discipline',
  type: 'document',
  icon: FaLightbulb,
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
    },
  },
}
