import { emailRender, linkRender } from '../../components/textComponents'
import { MdOutlineAddLink, MdOutlineAlternateEmail } from 'react-icons/md'
import { RiExternalLinkLine, RiHashtag } from 'react-icons/ri'

export default {
  title: 'Rich Text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      options: { spellCheck: true },
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' }
        ],
        annotations: [
          {
            title: 'Internal link',
            name: 'internalLink',
            type: 'object',
            fields: [
              {
                name: 'item',
                type: 'reference',
                to: [
                  { type: 'artist' },
                  { type: 'event' },
                  { type: 'exhibition' },
                  { type: 'page' },
                  { type: 'post' },
                  { type: 'video' },
                  { type: 'workshop' }
                ],
                options: {
                  filter: ({ document }) => {
                    const { __i18n_lang } = document
                    return {
                      filter: `__i18n_lang == '${__i18n_lang}'`
                    }
                  }
                }
              }
            ],
            blockEditor: {
              icon: MdOutlineAddLink,
              render: linkRender
            }
          },
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                name: 'href',
                type: 'url'
              },
              {
                title: 'Open in a new window',
                name: 'blank',
                type: 'boolean',
                initialValue: true
              }
            ],
            blockEditor: {
              icon: RiExternalLinkLine
            }
          },
          {
            title: 'Email',
            name: 'mailto',
            type: 'object',
            fields: [
              {
                name: 'mailto',
                type: 'email'
              }
            ],
            blockEditor: {
              icon: MdOutlineAlternateEmail,
              render: emailRender
            }
          }
        ]
      }
    },
    {
      type: 'image',
      options: { hotspot: true }
    },
    {
      type: 'youtube'
    },
  ]
}
