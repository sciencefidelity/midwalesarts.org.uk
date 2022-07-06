export const languages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'cy', title: 'Welsh' }
]

export const i18n = {
  languages: languages,
  base: languages.find(item => item.isDefault)?.id
}
