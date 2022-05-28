import groq from "groq"

const omitDrafts = "!(_id in path('drafts.**'))"
const slug = "'slug': slug.current"
const body = `body[]{ ..., markDefs[]{ ..., item->{ _type, ${slug} } } }`
const seo = "ogDescription, ogImage, ogTitle"
const ctaLink = `
  "ctaLink": select(
    __i18n_lang == "en" => {
      "_type": ctaLink->._type,
      "slug": ctaLink->.slug.current
    },
    __i18n_lang == "cy" => {
      "_type": ctaLink->._type,
      "slug": __i18n_base->.ctaLink->.__i18n_refs[0]->.slug.current
    }
  )
`

const artist = `
  "artist": *[
    _type == "artist"
    && slug.current == $slug
    && __i18n_lang == $locale
    && ${omitDrafts}
  ][0]{
    ${body}, "disciplines": disciplines[]->title[$locale], mainImage, ${seo}, title,
    "works": *[_type == "artwork" && artist == ^.title && ${omitDrafts}]{
      _id, date, mainImage, medium, price, title
    }
  }
`

const event = `
  "event": *[
    _type == "event"
    && slug.current == $slug
    && __i18n_lang == $locale
    && ${omitDrafts}
  ][0]{
    ${body}, briteLink, date, mainImage, ${seo}, title
  }
`

const exhibition = `
  "exhibition": *[
    _type == "exhibition"
    && slug.current == $slug
    && __i18n_lang == $locale
    && ${omitDrafts}
  ][0]{
    ${body}, dateEnd, dateStart, mainImage, ${seo}, title,
    "works": *[_type == "artwork" && references(^._id)]{
      artist, mainImage, medium, price, title
    }
  }
`

const post = `
  "post": *[
    _type == "post"
    && slug.current == $slug
    && __i18n_lang == $locale
    && ${omitDrafts}
  ][0]{
    ${body}, image, publishedAt, ${seo}, "tags": tags[]->title[$locale], title,
    "previousPost": *[
      _type == "post" && __i18n_lang == $locale && publishedAt < ^.publishedAt
    ] | order(publishedAt desc)[0]{ _type, ${slug}, title },
    "nextPost": *[
      _type == "post" && __i18n_lang == $locale && publishedAt > ^.publishedAt
    ] | order(publishedAt asc)[0]{ _type, ${slug}, title }
  }
`

const video = `
  "video": *[
    _type == "video"
    && slug.current == $slug
    && __i18n_lang == $locale
    && ${omitDrafts}
  ][0]{ ${body}, mainImage, publishDate, ${seo}, title, videoLink }
`

const workshop = `
  "workshop": *[
    _type == "workshop" && __i18n_lang == $locale
  ][0]{ ${body}, day, endTime, mainImage, ${seo}, startTime, title }
`

const artistSubset = `
  "artists": *[_type == "artist" && __i18n_lang == ^.__i18n_lang && ${omitDrafts}]{
    _id, _type, "disciplines": disciplines[]->title[$locale], mainImage, ${slug}, title,
    "hero": *[_type == "artist" && ${omitDrafts}]{
      ...,
      "random": (dateTime(now()) - dateTime(_createdAt)) % 199
    } | order(random desc)[0]
  }
`

const eventSubset = `
  "events": *[
    _type == "event"
    && __i18n_lang == ^.__i18n_lang
    && dateTime(now()) < dateTime(date)
    && ${omitDrafts}
  ] | order(date asc){
    _id, _type, date, mainImage, ${slug}, title
  },
  "pastEvents": *[
    _type == "event"
    && __i18n_lang == ^.__i18n_lang
    && dateTime(now()) > dateTime(date)
    && ${omitDrafts}
  ] | order(date desc){
    _id, _type, date, mainImage, ${slug}, title
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
    _id, _type, dateEnd, dateStart, mainImage, ${slug}, title
  },
  "futureExhibitions": *[
    _type == "exhibition"
    && __i18n_lang == ^.__i18n_lang
    && dateTime(now()) < dateTime(dateStart)
    && ${omitDrafts}
  ] | order(dateStart desc){
    _id, _type, dateEnd, dateStart, mainImage, ${slug}, title
  },
  "pastExhibitions": *[
    _type == "exhibition"
    && __i18n_lang == ^.__i18n_lang
    && dateTime(now()) > dateTime(dateEnd)
    && ${omitDrafts}
  ] | order(dateStart desc){
    _id, _type, dateEnd, dateStart, mainImage, ${slug}, title
  }
`

const postSubset = `
  "posts": *[
    _type == "post" && __i18n_lang == ^.__i18n_lang && ${omitDrafts}
  ] | order(publishedAt desc){
    _id, _type, image, publishedAt, ${slug}, title
  }
`

const videoSubset = `
  "videos": *[
    _type == "video" && __i18n_lang == ^.__i18n_lang && ${omitDrafts}
  ] | order(publishDate desc){
    _id, _type, mainImage, publishDate, ${slug}, title
  }
`

const workshopSubset = `
  "workshops": *[_type == "workshop" && __i18n_lang == ^.__i18n_lang && ${omitDrafts}]{
    _id, _type, day, endTime, mainImage, ${slug}, startTime, title
  }
`

const feedback = `
  "feedback": *[_type == "feedback" && ${omitDrafts}].feedback[]{  _key, quote{ cy, en } }
`

const headlines = `
  "headlines": select(
    __i18n_lang == "en" => headline[]->{
      _id, "body": body.en, "caption": caption.en, "cta": cta.en,
      "heading": heading.en, mainImage, subImage, "title": title.en,
      "ctaLink": {"_type": ctaLink.item->._type, "slug": ctaLink.item->.slug.current}
    },
    __i18n_lang == "cy" => __i18n_base->.headline[]->{
      _id, "body": body.cy, "caption": caption.cy, "cta": cta.cy,
      "heading": heading.cy, mainImage, subImage, "title": title.cy,
      "ctaLink": { "_type": ctaLink.item->._type, "slug": ctaLink.item->.__i18n_refs[0]->.slug.current }
    }
  )
`

const heroArtist = `
  "hero": *[_type == "artist"]{
    mainImage,
    "random": (dateTime(now()) - dateTime(_createdAt)) % 199
  } | order(random desc)[0]
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

const sidebar = `
  "sidebar": {
    "posts": *[
      _type == "post" && __i18n_lang == $locale
    ] | order(publishedAt desc)[0..4]{
      _type, publishedAt, ${slug}, title
    },
    "events": *[
      _type == "event" && __i18n_lang == $locale && dateTime(now()) < dateTime(date)
    ] | order(date asc)[0..4]{
      _type, date, ${slug}, title
    },
    "exhibitions": *[
      _type == "exhibition" && __i18n_lang == $locale && dateTime(now()) < dateTime(dateEnd)
    ][0..4] | order(dateStart asc){
      _type, dateEnd, dateStart, ${slug}, title
    },
    "workshops": *[_type == "workshop" && __i18n_lang == $locale][0..4]{
      _type, day, startTime, ${slug}, title
    }
  }
`

const page = `
  "page": *[
    _type == "page"
    && slug.current == $slug
    && __i18n_lang == $locale
    && ${omitDrafts}
  ][0]{
    __i18n_lang, _type, ${slug}, template, title,
    template == "Artists" => { ${artistSubset}, ${heroArtist}, subtitle, ${seo} },
    template == "Events" => { ${eventSubset}, subtitle, ${seo},${workshopSubset} },
    template == "Exhibitions" => { ${exhibitionSubset}, subtitle, ${seo} },
    template == "Home" => { ${body}, cta, ${ctaLink}, mainImage, subImage, ${headlines} },
    template == "News" => { ${postSubset}, subtitle, ${seo} },
    template == "Page" => { ${body}, mainImage, subtitle, ${seo}, ${sidebar} },
    template == "Support" => { ${body}, ${feedback}, mainImage, subtitle, ${seo}, ${sidebar} },
    template == "Videos" => { subtitle, ${videoSubset}, ${seo} },
    template == "Visit" => { mainImage, ${spaces}, subtitle, ${seo} },
    template == "Workshops" => { ${body}, mainImage, subtitle, ${workshopSubset}, ${seo}, ${sidebar} },
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

export const artistQuery = groq`{
  ${artist}, ${labels}, ${navigation}, ${organisation}, ${settings}
}`

export const eventQuery = groq`{
  ${event}, ${labels}, ${navigation}, ${organisation}, ${settings}
}`

export const exhibitionQuery = groq`{
  ${exhibition}, ${labels}, ${navigation}, ${organisation}, ${settings}
}`

export const newsQuery = groq`{
  ${labels}, ${navigation}, ${organisation}, ${post}, ${settings}
}`

export const videoQuery = groq`{
  ${labels}, ${navigation}, ${organisation}, ${settings}, ${video}
}`

export const workshopQuery = groq`{
  ${labels}, ${navigation}, ${organisation}, ${settings}, ${workshop}
}`


