import S from '@sanity/desk-tool/structure-builder'

const hiddenDocTypes = listItem => ![
  'frontPage'
].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Front Page')
        .child(
          S.document()
            .id('frontPage')
            .schemaType('frontPage')
            .documentId('frontPage-single')
        ),
      ...S.documentTypeListItems()
        .filter(hiddenDocTypes)
    ])
