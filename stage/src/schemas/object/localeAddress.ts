export default {
  name: 'localeAddress',
  title: 'Localized Address',
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
      type: 'address'
    },
    {
      title: 'Welsh',
      name: 'cy',
      type: 'address'
    }
  ]
}
