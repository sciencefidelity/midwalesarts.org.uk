import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// localization
import { translateFields } from './fieldTranslation'
// objects
import blockContent from './objects/blockContent'
import captionImage from './objects/captionImage'
import localeSlug from './objects/localeSlug'
// documents
import artist from './documents/artist'
import artwork from './documents/artwork'
import exhibition from './documents/exhibition'
import frontPage from './documents/frontPage'
import frontPageSection from './documents/frontPageSection'
import post from './documents/post'
import space from './documents/space'
import video from './documents/video'
// taxonomy
import category from './taxonomy/category'
import discipline from './taxonomy/discipline'

export default createSchema({
  name: 'default',
  types: schemaTypes
  
    .concat(translateFields([
      // documents
      artist,
      artwork,
      exhibition,
      frontPage,
      frontPageSection,
      space,
      post,
      video,
      
      // taxonomy
      category,
      discipline,
    ]))

    .concat([
      // objects
      blockContent,
      captionImage,
      localeSlug,
    ]),
})
