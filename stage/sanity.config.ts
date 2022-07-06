import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {dashboardTool, projectUsersWidget, projectInfoWidget} from '@sanity/dashboard'
import {
  documentI18n,
  getDocumentList,
  withDocumentI18nPlugin,
} from '@sanity/document-internationalization'
import {schemaTypes} from './src/schemas'
import {defaultDocumentNode} from './src/structure'

export default createConfig({
  name: 'default',
  title: 'Mid Wales Arts',

  projectId: 'atuc1oy0',
  dataset: 'production',

  plugins: withDocumentI18nPlugin(
    (pluginConfig) => [
      documentI18n({
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
        idStructure: 'delimiter',
        referenceBehavior: 'strong',
        withTranslationsMaintenance: false,
        fieldNames: {
          lang: '__i18n_lang',
          references: '__i18n_refs',
          baseReference: '__i18n_base',
        },
      }),
      dashboardTool({
        widgets: [projectInfoWidget(), projectUsersWidget()],
      }),
      deskTool({
        defaultDocumentNode,
        structure: (S, {schema}) => getDocumentList({S, schema, config: pluginConfig}),
      }),
    ],
    {
      includeDeskTool: false,
      // .. your i18n config
    }
  ),

  schema: {
    types: schemaTypes,
  },
})
