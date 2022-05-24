import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import address from './object/address'
import captionImage from './object/captionImage'
import portableText from './object/portableText'
import social from './object/social'
import youtube from './object/youtube'

// locale
import localeAddress from './object/localeAddress'
import localeEmail from './object/localeEmail'
import localeString from './object/localeString'
import localeText from './object/localeText'

// documement translation
import artist from './document/artist'
import event from './document/event'
import exhibition from './document/exhibition'
import page from './document/page'
import post from './document/post'
import space from './document/space'
import video from './document/video'
import workshop from './document/workshop'

// field translation
import artwork from './field/artwork'
import feedback from './field/feedback'
import labelGroup from './field/labelGroup'
import navigation from './field/navigation'
import organisation from './field/organisation'
import settings from './field/settings'

// taxonomy
import tag from './taxonomy/tag'
import discipline from './taxonomy/discipline'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

    // objects
    address,
    captionImage,
    portableText,
    social,
    youtube,

    // locale
    localeAddress,
    localeEmail,
    localeString,
    localeText,

    // documement translation
    artist,
    discipline,
    event,
    exhibition,
    page,
    post,
    space,
    tag,
    video,
    workshop,

    // field translation
    artwork,
    feedback,
    labelGroup,
    navigation,
    organisation,
    settings

  ])
})
