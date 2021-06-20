import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Front Page')
        .child(
          S.document()
            .schemaType('frontPage')
            .documentId('frontPage')
        ),
      ...S.documentTypeListItems().filter(listItem => !['frontPage'].includes(listItem.getId()))
    ])
