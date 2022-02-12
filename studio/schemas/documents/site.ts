import { FaMobileAlt } from 'react-icons/fa'
import { Rule } from '@sanity/types'

export default {
  name: 'site',
  title: 'Site',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  icon: FaMobileAlt,
  groups: [
    {
      name: 'meta',
      title: 'Meta'
    },
    {
      name: 'seo',
      title: 'SEO'
    },
    {
      name: 'footer',
      title: 'Footer'
    }
  ],
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'localeString',
      group: 'meta'
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'localeString',
      group: 'meta'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'localeString',
      description: 'A list of keywords seperated by commas.',
      group: 'meta'
    },
    {
      name: 'seoTitle',
      title: 'SEO title',
      type: 'localeString',
      description:
        'Displayed on Facebook and Twitter shares (max 60 characters).',
      group: 'seo'
    },
    {
      name: 'seoDescription',
      title: 'SEO description',
      type: 'localeString',
      description:
        'Displayed on Facebook and Twitter shares (max 65 characters).',
      group: 'seo'
    },
    {
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string',
      group: 'seo'
    },
    {
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image',
      description: 'Ideal size 1200 x 630px.',
      options: {
        hotspot: true
      },
      group: 'seo'
    },
    {
      name: 'openingHeading',
      title: 'Opening Heading',
      description: 'Heading before opening times (ie Opening Times)',
      type: 'localeString',
      group: 'footer'
    },
    {
      name: 'openingTimes',
      title: 'Opening Times',
      description: 'One line only (ie Thursday - Sunday 11-4)',
      type: 'localeString',
      group: 'footer'
    },
    {
      name: 'addressLine1',
      title: 'Address Line 1',
      type: 'string',
      group: 'footer'
    },
    {
      name: 'addressLine2',
      title: 'Address Line 2',
      type: 'string',
      group: 'footer'
    },
    {
      name: 'telephone',
      title: 'Telephone',
      type: 'string',
      group: 'footer'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'footer',
      validation: (Rule: Rule) =>
        Rule.regex(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ).error('Not a valid email address')
    },
    {
      name: 'signUp',
      title: 'Sign Up Title',
      description: 'One line only (ie Sign up to our mailing list)',
      type: 'localeString',
      group: 'footer'
    },
    {
      name: 'signUpPlaceholder',
      title: 'Sign Up Placeholder',
      description: 'One line only (ie Email address...)',
      type: 'localeString',
      group: 'footer'
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'social' } }],
      sortable: true
    }
  ],
  preview: {
    select: {
      title: 'siteName.en',
      subtitle: 'siteName.cy',
      media: 'seoImage'
    }
  }
}
