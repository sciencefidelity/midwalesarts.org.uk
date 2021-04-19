export default {
  name: 'discipline',
  title: 'Discipline',
  type: 'document',
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
