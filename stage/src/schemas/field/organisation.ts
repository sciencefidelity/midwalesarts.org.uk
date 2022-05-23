import { PostOffice } from '../../components/twemoji'

export default {
  name: 'organisation',
  title: 'Organisation',
  type: 'document',
  icon: PostOffice,
  fields: [
    {
      name: 'title',
      title: 'Organisation name',
      type: 'localeString'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'localeAddress'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'localeEmail'
    },
    {
      name: 'telephone',
      title: 'Telephone',
      type: 'string'
    },
    {
      name: 'opening',
      title: 'Opening times',
      type: 'localeString'
    }
  ],
  preview: {
    select: {
      title: 'title.en'
    },
    prepare({ title }) {
      return {
        title: title,
        media: PostOffice
      }
    }
  }
}
