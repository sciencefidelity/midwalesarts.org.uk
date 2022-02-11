import { FaRocket } from 'react-icons/fa'

export default {
  name: 'social',
  title: 'Social Links',
  type: 'document',
  icon: FaRocket,
  fields: [
    {
      name: 'site',
      title: 'site',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    }
  ],

  preview: {
    select: {
      title: 'site'
    }
  }
}
