export const supportedLanguages = [
  { name: 'en', title: 'English', isDefault: true },
  { name: 'cy', title: 'Welsh' }
]

export const baseLanguage = supportedLanguages.find(l => l.isDefault)
