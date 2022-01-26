import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import blockContent from './objects/blockContent'
import captionImage from './objects/captionImage'

// localization
// import { baseLanguage, supportedLanguages } from './languages'
import localeRichText from './objects/localeRichText'
import localeSlug from './objects/localeSlug'
import localeString from './objects/localeString'

// documents
import artist from './documents/artist'
import artwork from './documents/artwork'
import event from './documents/event'
import exhibition from './documents/exhibition'
import frontPage from './documents/frontPage'
import frontPageSection from './documents/frontPageSection'
import menu from './documents/menu'
import page from './documents/page'
import post from './documents/post'
import space from './documents/space'
import video from './documents/video'

// taxonomy
import category from './taxonomy/category'
import discipline from './taxonomy/discipline'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

      // objects
      blockContent,
      captionImage,
      localeRichText,
      localeSlug,
      localeString,

      // documents
      artist,
      artwork,
      event,
      exhibition,
      frontPage,
      frontPageSection,
      menu,
      page,
      space,
      post,
      video,

      // taxonomy
      category,
      discipline,

    ])
})
