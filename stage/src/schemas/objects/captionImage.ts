export default {
  title: 'Image',
  name: 'captionImage',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Image caption',
      options: {
        isHighlighted: true
      }
    }
  ]
}
