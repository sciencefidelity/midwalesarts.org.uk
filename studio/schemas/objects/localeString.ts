export default {
  name: 'localeString',
  title: 'Localized string',
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
      type: 'string'
    },
    {
      title: 'Welsh',
      name: 'cy',
      type: 'string'
    }
  ]
}
