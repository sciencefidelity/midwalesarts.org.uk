export default {
  name: 'localeText',
  title: 'Locale Text',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations'
    }
  ],
  fields: [
    {
      title: 'English',
      name: 'en',
      type: 'text',
    },
    {
      title: 'Welsh',
      name: 'cy',
      type: 'text',
    }
  ]
}
