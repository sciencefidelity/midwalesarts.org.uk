import { Compass } from '../../components/twemoji'

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: Compass,
  fields: [
    {
      name: 'primary',
      title: 'Main menu',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'localeString'
            },
            {
              name: 'url',
              type: 'reference',
              to: [{ type: 'page' }],
              options: {
                filter: () => {
                  return {
                    filter: '__i18n_lang == "en"'
                  }
                }
              }
            }
          ],
          preview: {
            select: {
              title: 'label.en',
              subtitle: 'label.cy'
            },
            prepare({ title, subtitle }) {
              return {
                title: title,
                subtitle: subtitle,
                media: Compass
              }
            }
          }
        }
      ],
      sortable: true
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare: () => {
      return {
        title: 'Navigation'
      }
    }
  }
}
