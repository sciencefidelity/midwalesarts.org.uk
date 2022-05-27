import groq from "groq"

const omitDrafts = "!(_id in path('drafts.**'))"
const slug = "'slug': slug.current"
const body = `body[]{ ..., markDefs[]{ ..., item->{ _type, ${slug} } } }`
const seo = "ogDescription, ogImage, ogTitle"
const ctaLink = "ctaLink->{ 'cy': __i18n_refs[0]->.slug.current, 'en': slug.current }"

const artistSubset = `
  "artists": *[_type == "artist" && __i18n_lang == ^.__i18n_lang && ${omitDrafts}]{
    _id, mainImage, ${slug}, title
  }
`

const eventSubset = `
  "events": *[
    _type == "event"
    && __i18n_lang == ^.__i18n_lang
    && dateTime(now()) < dateTime(date)
    && ${omitDrafts}
  ] | order(date asc){
    _id, date, mainImage, ${slug}, title
  },
  "pastEvents": *[
    _type == "event"
    && __i18n_lang == ^.__i18n_lang
    && dateTime(now()) > dateTime(date)
    && ${omitDrafts}
  ] | order(date desc){
    _id, date, mainImage, ${slug}, title
  }
`

const exhibitionSubset = `
  "exhibitions": *[
    _type == "exhibition"
    && __i18n_lang == ^.__i18n_lang
    && dateTime(now()) >= dateTime(dateStart)
    && dateTime(now()) <= dateTime(dateEnd)
    && ${omitDrafts}
  ] | order(dateStart asc){
    _id, dateEnd, dateStart, mainImage, ${slug}, title
  },
  "futureExhibitions": *[
    _type == "exhibition"
    && __i18n_lang == ^.__i18n_lang
    && dateTime(now()) < dateTime(dateStart)
    && ${omitDrafts}
  ] | order(dateStart desc){
    _id, dateEnd, dateStart, mainImage, ${slug}, title
  },
  "pastExhibitions": *[
    _type == "exhibition"
    && __i18n_lang == ^.__i18n_lang
    && dateTime(now()) > dateTime(dateEnd)
    && ${omitDrafts}
  ] | order(dateStart desc){
    _id, dateEnd, dateStart, mainImage, ${slug}, title
  }
`

const postSubset = `
  "posts": *[
    _type == "post" && __i18n_lang == ^.__i18n_lang && ${omitDrafts}
  ] | order(publishedAt desc){
    image, publishedAt, ${slug}, title
  }
`

const videoSubset = `
  "videos": *[
    _type == "video" && __i18n_lang == ^.__i18n_lang && ${omitDrafts}
  ] | order(publishDate desc){
    _id, mainImage, ${slug}, title
  }
`

const workshopSubset = `
  "workshops": *[_type == "workshop" && __i18n_lang == ^.__i18n_lang && ${omitDrafts}]{
    _id, day, endTime, mainImage, ${slug}, startTime, title
  }
`

const feedback = `
  "feedback": *[_type == "feedback" && ${omitDrafts}].feedback[]{  _key, quote{ cy, en } }
`

const headline = `
  headline[]->{
    _id, body{ cy, en }, caption{ cy, en }, cta{ cy, en }, ${ctaLink},
    heading{ cy, en }, mainImage, subImage, title{ cy, en }
  }
`

const labels = `
  "labels": *[_type == "labelGroup" && ${omitDrafts}][0].labels[]{ key, text{ cy, en } }
`

/*
const localizationFields = `
  "id": _id, "locale": __i18n_lang,
  "slug": select(
    slug.current == "index" => [""],
    slug.current != "index" => select(
      _type == "page" => [slug.current],
      _type == "post" && __i18n_lang == "cy" => [*[_type == "page" && template == "News"][0].__i18n_refs[0]->.slug.current, slug.current],
      _type == "post" && __i18n_lang == "en" => [*[_type == "page" && template == "News"][0].slug.current, slug.current]
    ),
  )
`
*/

const localization = `
  "localization": select(
    defined(__i18n_refs[]) => __i18n_refs[0]->{
      "id": _id, "locale": __i18n_lang,
      "slug": [slug.current]
    },
    defined(__i18n_base) => __i18n_base->{
      "id": _id, "locale": __i18n_lang,
      "slug": [slug.current]
    }
  )
`

const navigation = `
  "navigation": *[_type == "navigation" && ${omitDrafts}][0].primary[]{
    _key, label{ cy, en },
    "slug": url->{ "cy": __i18n_refs[0]->.slug.current, "en": slug.current }
  }
`

const organisation = `
  "organisation": *[_type == "organisation" && ${omitDrafts}][0]{
    address{ county, postcode, town }, email, opening{ cy, en }, telephone
  }
`

const spaces = `
  "spaces": select(
    defined(__i18n_refs[]) => spaces[]->{ _id, ${body}, mainImage, ${slug}, title },
    defined(__i18n_base) => spaces[]->.__i18n_refs[]->{ _id, ${body}, mainImage, ${slug}, title }
  )
`

const settings = `
  "settings": *[_type == "settings" && ${omitDrafts}][0]{
    canonicalURL, description{ cy, en }, ogDescription{ cy, en }, ogImage, ogTitle{ cy, en },
    social[]{ _key, name, url }, title{ cy, en }
  }
`

const page = `
  "page": *[
    _type == "page"
    && slug.current == $slug
    && __i18n_lang == $locale
    && ${omitDrafts}
  ][0]{
    __i18n_lang, _type, ${slug}, template, title, ${seo},
    template == "Artists" => { ${artistSubset}, subtitle },
    template == "Events" => { ${eventSubset}, subtitle },
    template == "Exhibitions" => { ${exhibitionSubset}, subtitle },
    template == "Home" => { ${body}, cta, ${ctaLink}, mainImage, subImage, ${headline} },
    template == "News" => { ${postSubset}, subtitle },
    template == "Page" => { ${body}, mainImage, subtitle },
    template == "Support" => { ${body}, ${feedback}, mainImage, subtitle },
    template == "Videos" => { subtitle, ${videoSubset} },
    template == "Visit" => { mainImage, ${spaces}, subtitle },
    template == "Workshops" => { ${body}, subtitle, ${workshopSubset} },
    ${localization}
  }
`

export const localizePageQuery = groq`{
  "page": *[_type == "page" && _id == $id && ${omitDrafts}]{
    __i18n_lang, _id, _type, body, canonicalURL,
    mataTitle, ogTitle, "slug": slug.current, title,
    "localization": [select(
      defined(__i18n_refs[]) => __i18n_refs[0]->{
        "id": _id, "locale": __i18n_lang, "slug": slug.current
      },
      defined(__i18n_base) => __i18n_base->{
        "id": _id, "locale": __i18n_lang, "slug": slug.current
      }
    )]
  }
}`

export const pagePathQuery = groq`
  *[_type == "page" && defined(slug) && ${omitDrafts}]{
    "params": select(
      template != "Home" => { "slug": [ slug.current ] },
      template == "Home" => { "slug": false }
    ),
    "locale": __i18n_lang
  }
`

export const pageQuery = groq`{
  ${labels}, ${navigation}, ${organisation}, ${page}, ${settings}
}`



