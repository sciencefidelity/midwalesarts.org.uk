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
          type: 'string',
          options: {
            list: [
              'facebook',
              'github',
              'instagram',
              'linkedin',
              'pinterest',
              'soundcloud',
              'tiktok',
              'twitter',
              'youtube',
              'vimeo'
            ]
          }
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
