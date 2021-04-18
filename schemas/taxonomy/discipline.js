export default {
  name: 'discipline',
  title: 'Discipline',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      localize: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
