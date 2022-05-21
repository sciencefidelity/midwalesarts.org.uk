import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import localeString from './objects/localeString'
import localeText from './objects/localeText'
import portableText from './objects/portableText'

// documements
import author from './documents/author'
import event from './documents/event'
import navigation from './documents/navigation'
import post from './documents/post'
import page from './documents/page'
import settings from './documents/settings'

// taxonomy
import tag from './documents/tag'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // objects
    localeString,
    localeText,
    portableText,

    // documements
    author,
    event,
    navigation,
    post,
    page,
    settings,

    // taxonomy
    tag
  ])
})
