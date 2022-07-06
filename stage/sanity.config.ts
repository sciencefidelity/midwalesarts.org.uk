import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {structure, defaultDocumentNode} from './src/structure'
import {schemaTypes} from './src/schemas'
import {dashboardTool, projectUsersWidget, projectInfoWidget} from '@sanity/dashboard'

export default createConfig({
  name: 'default',
  title: 'Mid Wales Arts',

  projectId: 'atuc1oy0',
  dataset: 'production',

  plugins: [
    dashboardTool({
      widgets: [projectInfoWidget(), projectUsersWidget()],
    }),
    deskTool({
      defaultDocumentNode,
      structure,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
