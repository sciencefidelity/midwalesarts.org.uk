export default {
  name: 'localeEmail',
  title: 'Localized Email',
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
      type: 'email'
    },
    {
      title: 'Welsh',
      name: 'cy',
      type: 'email'
    }
  ]
}
