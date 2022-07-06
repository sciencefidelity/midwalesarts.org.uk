import {SpeechBalloon} from '../../components/twemoji'

export default {
  name: 'feedback',
  title: 'Feedback',
  type: 'document',
  icon: SpeechBalloon,
  fields: [
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'array',
      of: [
        {
          name: 'feedback',
          title: 'Feedback',
          type: 'object',
          fields: [
            {
              name: 'quote',
              title: 'Quote',
              type: 'localeText',
            },
            {
              name: 'cite',
              title: 'Citation',
              type: 'string',
              description: 'Who is the quote by?',
            },
            {
              name: 'date',
              title: 'date',
              type: 'localeString',
              description: 'When is the quote from?',
            },
          ],
          preview: {
            select: {
              title: 'cite',
              subtitle: 'date.en',
            },
            prepare({title, subtitle}: {title: string; subtitle: string}) {
              return {
                title: title,
                subtitle: subtitle,
                media: SpeechBalloon,
              }
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'cite',
      subtitle: 'date.en',
    },
    prepare({title, subtitle}: {title: string; subtitle: string}) {
      return {
        title: title,
        subtitle: subtitle,
        media: SpeechBalloon,
      }
    },
  },
}
