export default {
  name: 'social',
  title: 'Social links',
  type: 'array',
  of: [
    {
      name: 'socialLink',
      title: 'Social link',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Social network',
          type: 'string'
        },
        {
          name: 'url',
          title: 'URL',
          type: 'url'
        }
      ]
    }
  ]
}
