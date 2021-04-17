import { languages } from '../languages'

export default {
  name: 'localeSlug',
  title: 'Localized slugs',
  type: 'object',
  fields: [
    {
      title: 'English',
      name: 'en',
      type: 'slug',
      options: {
        source: `title.${languages[0].name}`,
      },
    },
    {
      title: 'Welsh',
      name: 'cy',
      type: 'slug',
      options: {
        source: `title.${languages[1].name}`,
      },
    },
  ],
  options: { collapsible: true },
}
