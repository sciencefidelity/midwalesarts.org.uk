import S from '@sanity/desk-tool/structure-builder'
import { FaHome } from 'react-icons/fa'

const hiddenDocTypes = listItem => ![
  'frontPage'
].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Front Page')
        .icon(FaHome)
        .child(
          S.document()
            .id('frontPage')
            .schemaType('frontPage')
            .documentId('frontPage-single')
        ),
      ...S.documentTypeListItems()
        .filter(hiddenDocTypes)
    ])
