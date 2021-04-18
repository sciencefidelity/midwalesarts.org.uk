// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import { translateFields } from './fieldTranslation'
// objects
import blockContent from './objects/blockContent'
import captionImage from './objects/captionImage'
import localeSlug from './objects/localeSlug'
// documents
import artist from './documents/artist'
import artwork from './documents/artwork'
import category from './documents/category'
import discipline from './documents/discipline'
import exhibition from './documents/exhibition'
import frontPage from './documents/frontPage'
import frontPageSection from './documents/frontPageSection'
import post from './documents/post'
import space from './documents/space'
import video from './documents/video'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat(translateFields([
      // The following are document types which will appear
      // in the studio.
      artist,
      artwork,
      category,
      discipline,
      exhibition,
      frontPage,
      frontPageSection,
      space,
      post,
      video,
    ]))
      // When added to this list, object types can be used as
      // { type: 'typename' } in other document schemas
    .concat([
      blockContent,
      captionImage,
      localeSlug,
    ]),
})
