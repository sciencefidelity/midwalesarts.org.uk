import { Gear } from '../../components/twemoji'

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: Gear,
  groups: [
    {
      name: 'meta',
      title: 'Meta'
    },
    {
      name: 'social',
      title: 'Social'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Site name',
      type: 'localeString',
      group: 'meta'
    },
    {
      name: 'description',
      title: 'Site description',
      type: 'localeText',
      group: 'meta'
    },
    {
      name: 'canonicalURL',
      title: 'Canonical URL',
      type: 'url',
      group: 'meta'
    },
    {
      name: 'ogImage',
      title: 'Social image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'social'
    },
    {
      name: 'ogTitle',
      title: 'Social title',
      type: 'localeString',
      group: 'social'
    },
    {
      name: 'ogDescription',
      title: 'Social Description',
      type: 'localeText',
      group: 'social'
    }

  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'description.en'
    }
  }
}
