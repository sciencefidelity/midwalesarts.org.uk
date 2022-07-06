import {Rule} from '@sanity/types'
import {CardFileBox} from '../../components/twemoji'

export default {
  name: 'labelGroup',
  title: 'Label Group',
  type: 'document',
  icon: CardFileBox,
  fields: [
    {
      name: 'labels',
      title: 'Labels',
      description: 'Strings of text that are used through the Website and require translation',
      type: 'array',
      of: [
        {
          name: 'label',
          title: 'Label',
          type: 'object',
          fields: [
            {
              name: 'key',
              title: 'Key',
              type: 'string',
              description: `This will be used to identify the label in the code. It should be unique and contain only lowercase letters and periods`,
              validation: (Rule: Rule) =>
                Rule.regex(/^[a-z.]+$/).error(
                  'The key should contain only lowercase letters and periods'
                ),
            },
            {name: 'text', type: 'localeString'},
          ],
          preview: {
            select: {
              title: 'text.en',
              subtitle: 'text.cy',
            },
            prepare({subtitle, title}: {subtitle: string; title: string}) {
              return {
                title: title,
                subtitle: subtitle,
                media: CardFileBox,
              }
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Label groups',
        media: CardFileBox,
      }
    },
  },
}
