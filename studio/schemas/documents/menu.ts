import { FaList } from "react-icons/fa"

export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: FaList,
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'items',
      title: 'Manu Items',
      type: 'array',
      of: [{ type: 'reference', to: {type: 'page' }}],
      sortable: true
    },
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
