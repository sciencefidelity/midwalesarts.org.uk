export default {
  supportedLanguages: [
    {id: 'en', title: 'English'},
    {id: 'cy', title: 'Welsh'},
    //...
  ],
  defaultLanguages: ['en'],
  // Only show language filter for document type `page` (schemaType.name)
  documentTypes: ['navigation', 'settings'],
  filterField: (enclosingType, field, selectedLanguageIds) =>
    !enclosingType.name.startsWith('locale') ||
    selectedLanguageIds.includes(field.name),
}
