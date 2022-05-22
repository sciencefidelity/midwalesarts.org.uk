import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import localeString from './objects/localeString'
import localeText from './objects/localeText'
import portableText from './objects/portableText'

// documement translation
import artist from './documents/artist'
import event from './documents/event'
import exhibition from './documents/exhibition'
import navigation from './fields/navigation'
import page from './documents/page'
import post from './documents/post'
import video from './documents/video'
import workshop from './documents/workshop'

// field translation
import artwork from './fields/artwork'
import labelGroup from './fields/labelGroup'
import settings from './fields/settings'

// taxonomy
import tag from './taxonomy/tag'
import discipline from './taxonomy/discipline'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

    // objects
    localeString,
    localeText,
    portableText,

    // documement translation
    artist,
    event,
    exhibition,
    page,
    post,
    video,
    workshop,

    // field translation
    artwork,
    labelGroup,
    navigation,
    settings,

    // taxonomy
    discipline,
    tag
  ])
})
