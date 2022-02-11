import { FaKey } from 'react-icons/fa'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: FaKey,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
    }
  ],

  preview: {
    select: {
      title: 'title.en'
    }
  }
}
