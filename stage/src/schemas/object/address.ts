export default {
  name: 'address',
  title: 'Address',
  type: 'object',
  fields: [
    {
      name: 'line1',
      title: 'Address Line 1',
      type: 'string'
    },
    {
      name: 'line2',
      title: 'Address Line 2',
      type: 'string'
    },
    {
      name: 'city',
      title: 'City',
      type: 'string'
    },
    {
      name: 'postcode',
      title: 'Postcode',
      type: 'string'
    }
  ],
  options: {
    collapsible: true,
    collapsed: true
  }
}
