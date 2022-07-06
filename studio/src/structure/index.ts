// import {getDocumentList} from '@sanity/document-internationalization'
import {Facebook, Google, Twitter} from '../components/social'
// import {
//   Art,
//   Artist,
//   Books,
//   CardFileBox,
//   Clipboard,
//   ClassicalBuilding,
//   Compass,
//   Date,
//   Dolls,
//   // EarthAfrica,
//   FilmProjector,
//   FramedPicture,
//   Gear,
//   Label,
//   Newspaper,
//   Paintbrush,
//   PostOffice,
//   SpeechBalloon,
//   StudioMicrophone,
//   Tickets,
//   WorldMap,
//   WritingHand,
// } from '../components/twemoji'

export const defaultDocumentNode = (S: any, {schemaType}: {schemaType: any}) => {
  if (
    schemaType === 'artist' ||
    schemaType === 'event' ||
    schemaType === 'exhibition' ||
    schemaType === 'page' ||
    schemaType === 'post' ||
    schemaType === 'video' ||
    schemaType === 'workshop'
  ) {
    return S.document().views([
      S.view.form(),
      S.view.component(Google).title('Google'),
      S.view.component(Twitter).title('Twitter'),
      S.view.component(Facebook).title('Facebook'),
    ])
  }
}

// export const items = [
//   S.listItem()
//     .title('Event')
//     .icon(Date)
//     .child(
//       S.list()
//         .title('Events')
//         .items([
//           S.listItem()
//             .title('Event')
//             .icon(StudioMicrophone)
//             .child(
//               S.documentTypeList('event')
//                 .title('Event')
//                 .filter('_type == "event" && __i18n_lang != "cy"')
//             ),
//           S.listItem()
//             .title('Exhibition')
//             .icon(FramedPicture)
//             .child(
//               S.documentTypeList('exhibition')
//                 .title('Exhibition')
//                 .filter('_type == "exhibition" && __i18n_lang != "cy"')
//             ),
//           S.listItem()
//             .title('Workshop')
//             .icon(Clipboard)
//             .child(
//               S.documentTypeList('workshop')
//                 .title('Workshop')
//                 .filter('_type == "workshop" && __i18n_lang != "cy"')
//             ),
//         ])
//     ),
//   S.listItem()
//     .title('News')
//     .icon(WritingHand)
//     .child(
//       S.documentTypeList('post').title('News').filter('_type == "post" && __i18n_lang != "cy"')
//     ),
//   S.listItem()
//     .title('Page')
//     .icon(Books)
//     .child(
//       S.documentTypeList('page').title('Page').filter('_type == "page" && __i18n_lang != "cy"')
//     ),
//   S.listItem()
//     .title('Artist')
//     .icon(Artist)
//     .child(
//       S.documentTypeList('artist')
//         .title('Artist')
//         .filter('_type == "artist" && __i18n_lang != "cy"')
//     ),
//   S.listItem().title('Artwork').icon(Art).child(S.documentTypeList('artwork').title('Artwork')),
//   S.listItem()
//     .title('Video')
//     .icon(FilmProjector)
//     .child(
//       S.documentTypeList('video').title('Video').filter('_type == "video" && __i18n_lang != "cy"')
//     ),
//   S.divider(),
//   S.listItem()
//     .title('Headline')
//     .icon(Newspaper)
//     .child(S.documentTypeList('frontPageSection').title('Headline')),
//   S.listItem()
//     .title('Space')
//     .icon(ClassicalBuilding)
//     .child(
//       S.documentTypeList('space').title('Space').filter('_type == "space" && __i18n_lang != "cy"')
//     ),
//   S.listItem()
//     .title('Friends')
//     .icon(Dolls)
//     .child(
//       S.list()
//         .title('Friends')
//         .items([
//           S.listItem()
//             .title('Feedback')
//             .icon(SpeechBalloon)
//             .child(S.document().schemaType('feedback').documentId('feedback')),
//           S.listItem()
//             .title('Friend')
//             .icon(Dolls)
//             .child(S.documentTypeList('friend').title('Friend')),
//         ])
//     ),
//   S.listItem()
//     .title('Taxonomy')
//     .icon(WorldMap)
//     .child(
//       S.list()
//         .title('Taxonomy')
//         .items([
//           S.listItem().title('Tag').icon(Label).child(S.documentTypeList('tag').title('Tag')),
//           S.listItem()
//             .title('Category')
//             .icon(Tickets)
//             .child(S.documentTypeList('category').title('Category')),
//           S.listItem()
//             .title('Discipline')
//             .icon(Paintbrush)
//             .child(S.documentTypeList('discipline').title('Discipline')),
//         ])
//     ),
//   S.divider(),
//   S.listItem()
//     .title('Settings')
//     .icon(Gear)
//     .child(
//       S.list()
//         .title('Settings')
//         .items([
//           S.listItem()
//             .title('Settings')
//             .icon(Gear)
//             .child(S.document().schemaType('settings').documentId('settings')),
//           S.listItem()
//             .title('Navigation')
//             .icon(Compass)
//             .child(S.document().schemaType('navigation').documentId('navigation')),
//           S.listItem()
//             .title('Organisation')
//             .icon(PostOffice)
//             .child(S.document().schemaType('organisation').documentId('organisation')),
//           S.listItem()
//             .title('Label Group')
//             .icon(CardFileBox)
//             .child(S.document().schemaType('labelGroup').documentId('labelGroup')),
//         ])
//     ),
//   S.divider(),
//   // Structure.getMaintenanceListItem().icon(EarthAfrica).serialize(),
//   ...S.documentTypeListItems().filter(
//     (item: any) =>
//       ![
//         'artist',
//         'artwork',
//         'category',
//         'discipline',
//         'event',
//         'exhibition',
//         'feedback',
//         'friend',
//         'frontPageSection',
//         'labelGroup',
//         'navigation',
//         'organisation',
//         'page',
//         'post',
//         'settings',
//         'space',
//         'tag',
//         'video',
//         'workshop',
//       ].includes(item.getId())
//   ),
// ]
