import S from '@sanity/desk-tool/structure-builder'
import * as Structure from '@sanity/document-internationalization/lib/structure'
import { EarthAfrica } from '../components/twemoji'

const items = [
  ...S.documentTypeListItems(),
  S.divider(),
  Structure.getMaintenanceListItem().icon(EarthAfrica).serialize(),
]

export default () => {
  return (
    S.list()
      .title('Content')
      .items(items)
  )
}
