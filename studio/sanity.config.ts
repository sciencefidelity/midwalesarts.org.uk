import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {dashboardTool} from '@sanity/dashboard'
import {plausibleWidget} from './src/widgets/plausibleWidget'
import {
  documentI18n,
  getFilteredDocumentTypeListItems,
  IdStructure,
  ReferenceBehavior,
  Ti18nConfig,
  withDocumentI18nPlugin,
} from '@sanity/document-internationalization'
import {schemaTypes} from './src/schemas'
import {defaultDocumentNode} from './src/structure'
import {
  Art,
  Artist,
  Books,
  CardFileBox,
  Clipboard,
  ClassicalBuilding,
  Compass,
  Date,
  Dolls,
  // EarthAfrica,
  FilmProjector,
  FramedPicture,
  Gear,
  Label,
  Newspaper,
  Paintbrush,
  PostOffice,
  SpeechBalloon,
  StudioMicrophone,
  Tickets,
  WorldMap,
  WritingHand,
} from './src/components/twemoji'

export default createConfig({
  name: 'default',
  title: 'Mid Wales Arts',

  projectId: import.meta.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_API_DATASET,

  plugins: withDocumentI18nPlugin(
    (pluginConfig) => [
      dashboardTool({
        widgets: [
          // projectInfoWidget(),
          // projectUsersWidget(),
          plausibleWidget(),
        ],
      }),
      deskTool({
        defaultDocumentNode,
        structure: (S, {schema, client}) => {
          getFilteredDocumentTypeListItems({
            S,
            schema,
            config: i18nConfig as Ti18nConfig,
          })

          return S.list()
            .title('Content')
            .items([
              S.listItem()
                .title('Event')
                .icon(Date)
                .child(
                  S.list()
                    .title('Events')
                    .items([
                      S.listItem()
                        .title('Event')
                        .icon(StudioMicrophone)
                        .child(
                          S.documentTypeList('event')
                            .title('Event')
                            .filter('_type == "event" && __i18n_lang != "cy"')
                        ),
                      S.listItem()
                        .title('Exhibition')
                        .icon(FramedPicture)
                        .child(
                          S.documentTypeList('exhibition')
                            .title('Exhibition')
                            .filter('_type == "exhibition" && __i18n_lang != "cy"')
                        ),
                      S.listItem()
                        .title('Workshop')
                        .icon(Clipboard)
                        .child(
                          S.documentTypeList('workshop')
                            .title('Workshop')
                            .filter('_type == "workshop" && __i18n_lang != "cy"')
                        ),
                    ])
                ),
              S.listItem()
                .title('News')
                .icon(WritingHand)
                .child(
                  S.documentTypeList('post')
                    .title('News')
                    .filter('_type == "post" && __i18n_lang != "cy"')
                ),
              S.listItem()
                .title('Page')
                .icon(Books)
                .child(
                  S.documentTypeList('page')
                    .title('Page')
                    .filter('_type == "page" && __i18n_lang != "cy"')
                ),
              S.listItem()
                .title('Artist')
                .icon(Artist)
                .child(
                  S.documentTypeList('artist')
                    .title('Artist')
                    .filter('_type == "artist" && __i18n_lang != "cy"')
                ),
              S.listItem()
                .title('Artwork')
                .icon(Art)
                .child(S.documentTypeList('artwork').title('Artwork')),
              S.listItem()
                .title('Video')
                .icon(FilmProjector)
                .child(
                  S.documentTypeList('video')
                    .title('Video')
                    .filter('_type == "video" && __i18n_lang != "cy"')
                ),
              S.divider(),
              S.listItem()
                .title('Headline')
                .icon(Newspaper)
                .child(S.documentTypeList('frontPageSection').title('Headline')),
              S.listItem()
                .title('Space')
                .icon(ClassicalBuilding)
                .child(
                  S.documentTypeList('space')
                    .title('Space')
                    .filter('_type == "space" && __i18n_lang != "cy"')
                ),
              S.listItem()
                .title('Friends')
                .icon(Dolls)
                .child(
                  S.list()
                    .title('Friends')
                    .items([
                      S.listItem()
                        .title('Feedback')
                        .icon(SpeechBalloon)
                        .child(S.document().schemaType('feedback').documentId('feedback')),
                      S.listItem()
                        .title('Friend')
                        .icon(Dolls)
                        .child(S.documentTypeList('friend').title('Friend')),
                    ])
                ),
              S.listItem()
                .title('Taxonomy')
                .icon(WorldMap)
                .child(
                  S.list()
                    .title('Taxonomy')
                    .items([
                      S.listItem()
                        .title('Tag')
                        .icon(Label)
                        .child(S.documentTypeList('tag').title('Tag')),
                      S.listItem()
                        .title('Category')
                        .icon(Tickets)
                        .child(S.documentTypeList('category').title('Category')),
                      S.listItem()
                        .title('Discipline')
                        .icon(Paintbrush)
                        .child(S.documentTypeList('discipline').title('Discipline')),
                    ])
                ),
              S.divider(),
              S.listItem()
                .title('Settings')
                .icon(Gear)
                .child(
                  S.list()
                    .title('Settings')
                    .items([
                      S.listItem()
                        .title('Settings')
                        .icon(Gear)
                        .child(S.document().schemaType('settings').documentId('settings')),
                      S.listItem()
                        .title('Navigation')
                        .icon(Compass)
                        .child(S.document().schemaType('navigation').documentId('navigation')),
                      S.listItem()
                        .title('Organisation')
                        .icon(PostOffice)
                        .child(S.document().schemaType('organisation').documentId('organisation')),
                      S.listItem()
                        .title('Label Group')
                        .icon(CardFileBox)
                        .child(S.document().schemaType('labelGroup').documentId('labelGroup')),
                    ])
                ),
              S.divider(),
              // Structure.getMaintenanceListItem().icon(EarthAfrica).serialize(),
              ...S.documentTypeListItems().filter(
                (item: any) =>
                  ![
                    'artist',
                    'artwork',
                    'category',
                    'discipline',
                    'event',
                    'exhibition',
                    'feedback',
                    'friend',
                    'frontPageSection',
                    'labelGroup',
                    'navigation',
                    'organisation',
                    'page',
                    'post',
                    'settings',
                    'space',
                    'tag',
                    'video',
                    'workshop',
                  ].includes(item.getId())
              ),
            ])
        },
      }),
    ],
    {
      includeDeskTool: false,
    }
  ),

  schema: {
    types: schemaTypes,
  },
})

const i18nConfig = documentI18n({
  base: 'en',
  languages: [
    {
      title: 'English',
      id: 'en',
    },
    {
      title: 'Welsh',
      id: 'cy',
    },
  ],
  idStructure: 'delimiter' as IdStructure,
  referenceBehavior: 'strong' as ReferenceBehavior,
  withTranslationsMaintenance: false,
  fieldNames: {
    lang: '__i18n_lang',
    references: '__i18n_refs',
    baseReference: '__i18n_base',
  },
})
