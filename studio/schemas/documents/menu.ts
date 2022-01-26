export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
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
