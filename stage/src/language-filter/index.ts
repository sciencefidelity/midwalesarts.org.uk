export default {
  supportedLanguages: [
    { id: 'en', title: 'English' },
    { id: 'cy', title: 'Welsh' }
    //...
  ],
  defaultLanguages: ['en'],
  // Only show language filter for document type `page` (schemaType.name)
  documentTypes: [
    'artwork',
    'discipline',
    'feedback',
    'frontPageSection',
    'labelGroup',
    'navigation',
    'settings',
    'tag'
  ],
  filterField: (enclosingType, field, selectedLanguageIds) =>
    !enclosingType.name.startsWith('locale') ||
    selectedLanguageIds.includes(field.name)
}
