import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import captionImage from './objects/captionImage'
import localeString from './objects/localeString'
import localeText from './objects/localeText'
import portableText from './objects/portableText'

// documements
import artist from './documents/artist'
import exhibition from './documents/exhibition'
import event from './documents/event'
import navigation from './fields/navigation'
import post from './documents/post'
import page from './documents/page'
import settings from './fields/settings'

// taxonomy
import tag from './documents/tag'
import discipline from './documents/discipline'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // objects
    captionImage,
    localeString,
    localeText,
    portableText,

    // documement translation
    artist,
    discipline,
    exhibition,
    event,
    post,
    page,
    tag,

    // field translation
    navigation,
    settings
  ])
})
