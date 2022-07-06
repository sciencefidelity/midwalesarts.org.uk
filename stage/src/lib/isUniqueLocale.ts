import sanityClient from './sanityClient'

interface Options {
  document: {
    __i18n_lang: String
    _id: String
    _type: string
  }
}

// Note: this assumes that every document that has a slug field
// has it on the `slug` field at the root
export function isUniqueLocale(slug: string, options: Options) {
  const {document} = options
  // const client = sanityClient({apiVersion: '2022-05-25'})
  const id = document._id.replace(/^drafts\./, '')
  const params = {
    draft: `drafts.${id}`,
    published: id,
    type: document._type,
    locale: document.__i18n_lang,
    slug,
  }

  const constraints = [
    '!(_id in [$draft, $published])',
    '_type == $type',
    '__i18n_lang == $locale',
    'slug.current == $slug',
  ].join(' && ')
  const query = `!defined(*[${constraints}][0]._id)`

  return sanityClient.fetch(query, params)
}
