import { Date } from '../../components/twemoji'

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: Date,
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'day',
      title: 'Day of the week',
      type: 'string',
      options: {
        list: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ]
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}
