import client from 'part:@sanity/base/client'

// Note: this assumes that every document that has a slug field
// has it on the `slug` field at the root
export function isUniqueLocale(slug, options) {
  const { document } = options

  const id = document._id.replace(/^drafts\./, '')
  const params = {
    draft: `drafts.${id}`,
    published: id,
    type: document._type,
    locale: document.__i18n_lang,
    slug
  }

  const constraints = [
    '!(_id in [$draft, $published])',
    '_type == $type',
    '__i18n_lang == $locale',
    'slug.current == $slug'
  ].join(' && ')
  const query = `!defined(*[${constraints}][0]._id)`

  return client.fetch(query, params)
}
