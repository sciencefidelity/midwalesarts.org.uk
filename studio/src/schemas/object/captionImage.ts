export default {
  title: 'Image',
  name: 'captionImage',
  type: 'image',
  description: 'Images should be jpeg of 1440px along the longest edge, 500-600k is best.',
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Image caption (title of artwork)',
      options: {
        isHighlighted: true
      }
    }
  ]
}
