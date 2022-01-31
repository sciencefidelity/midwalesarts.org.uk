import groq from "groq"

const omitDrafts = "!(_id in path('drafts.**'))"
// const dominantBg = "asset->metadata.palette.dominant.background"
const siteFields = `
  addressLine1,
  addressLine2,
  email,
  keywords,
  openingHeading,
  openingTimes,
  seoDescription,
  seoImage,
  seoTitle,
  signUp,
  signUpPlaceholder,
  siteDescription,
  siteName,
  telephone,
  twitterHandle
`

const sideBarFields = `
  "posts": *[
    _type == "post"
    && ${omitDrafts}
  ] | order(publishedAt desc)[0..3]{ _id, slug, title },
  "events": *[
    _type == "event"
    && recurring != true
    && dateTime(now()) < dateTime(date)
    && ${omitDrafts}
  ] | order(date asc)[0..3]{ _id, slug, title },
  "exhibitions": *[
    _type == "exhibition"
    && dateTime(now()) < dateTime(dateStart)
    && ${omitDrafts}
  ] | order(dateStart asc)[0..3]{ _id, dateStart, dateEnd, slug, title }
`

const allPageFields = `
  "site": *[_type == "site" && ${omitDrafts}][0]{
    ${siteFields}
  },
  "menu": *[_type == "menu" && ${omitDrafts}][0].items[]->{
    _id, slug, menuTitle
  },
  "sidebar": {
    ${sideBarFields}
  },
  "socialLinks": *[_type == "site" && ${omitDrafts}][0].socialLinks[]->{
    _id, link, site
  }
`

// "heroColor": mainImage.${dominantBg},
// "subColor": subImage.${dominantBg},
export const frontPageQuery = groq`{
  "frontPage": *[_type == "frontPage"][0]{
    body, cta, ctaLink, mainImage, subImage
  },
  "featured": *[_type == "frontPage" && ${omitDrafts}][0].featured[0..3]->{
    _id,
    title,
    caption,
    heading,
    body,
    cta,
    ctaLink,
    mainImage,
    subImage,
  },
  ${allPageFields}
}`

export const pageQuery = groq`{
  "page": *[
    _type == "page"
    && slug.en.current == $slug && ${omitDrafts}
  ][0]{
    "body": body{ en, cy },
    mainImage,
    "slug": slug{ en, cy },
    subtitle,
    template,
    "title": title{ en, cy }
  },
  "artists": *[
    _type == "artist"
    && ${omitDrafts}
  ]
    | order(title asc)[]{
    _id,
    title,
    slug,
    body,
    mainImage,
    disciplines[]->{ _id, title }
  },
  "heroArtist": *[_type == "artist" && ${omitDrafts}]{
    ...,
    "random": (dateTime(now()) - dateTime(_createdAt)) % 199
  } | order(random desc)[0],
  "spaces": *[_type == "space" && ${omitDrafts}]{
    _id,
    body,
    mainImage,
    title,
    slug
  },
  "pastEvents": *[
    _type == "event"
    && recurring != true
    && dateTime(now()) > dateTime(date)
    && ${omitDrafts}
  ] | order(date desc)[]{
    _id,
    body,
    briteLink,
    date,
    mainImage,
    slug,
    title
  },
  "recurringEvents": *[
    _type == "event"
    && recurring == true
    && ${omitDrafts}
  ][]{
    _id,
    body,
    briteLink,
    date,
    mainImage,
    slug,
    title
  },
  "upcomingEvents": *[
    _type == "event"
    && recurring != true
    && dateTime(now()) < dateTime(date)
    && ${omitDrafts}
  ] | order(date asc)[]{
    _id,
    body,
    briteLink,
    date,
    mainImage,
    slug,
    title
  },
  "currentExhibitions": *[
    _type == "exhibition"
    && dateTime(now()) >= dateTime(dateStart)
    && dateTime(now()) <= dateTime(dateEnd)
    && ${omitDrafts}
  ] | order(dateStart asc){
    _id,
    body,
    dateEnd,
    dateStart,
    mainImage,
    slug,
    title
  },
  "pastExhibitions": *[
    _type == "exhibition"
    && dateTime(now()) > dateTime(dateEnd)
    && ${omitDrafts}
  ] | order(dateStart desc){
    _id,
    body,
    dateEnd,
    dateStart,
    mainImage,
    slug,
    title
  },
  "futureExhibitions": *[
    _type == "exhibition"
    && dateTime(now()) < dateTime(dateStart)
    && ${omitDrafts}
  ] | order(dateStart desc){
    _id,
    body,
    dateEnd,
    dateStart,
    mainImage,
    slug,
    title
  },
  "posts": *[
    _type == "post"
    && ${omitDrafts}
  ] | order(publishedAt desc){
    _id,
    body,
    categories[]->{title},
    image,
    publishedAt,
    slug,
    title
  },
  "videos": *[_type == "video"
    && ${omitDrafts}]
    | order(publishDate desc){
    _id,
    mainImage,
    publishDate,
    slug,
    title
  },
  ${allPageFields}
}`

export const artistPageQuery = groq`{
  "artist": *[
    _type == "artist" && slug.current == $slug && ${omitDrafts}][0]{
    body,
    disciplines[]->{
      _id,
      title
    },
    mainImage,
    title,
    "artworks": *[
      _type == "artwork"
      && artist == ^.title
      && ${omitDrafts}
    ]{
      artist,
      "aspect": mainImage.asset->metadata.dimensions.aspectRatio,
      date,
      dimensions,
      mainImage{
        _type,
        asset,
      },
      medium,
      price,
      title
    }
  },
  ${allPageFields}
}`

export const eventPageQuery = groq`{
  "event": *[
    _type == "event"
    && slug.en.current == $slug
    && ${omitDrafts}
  ][0]{
    body,
    briteLink,
    date,
    mainImage,
    slug,
    title
  },
  ${allPageFields}
}`

export const exhibitionPageQuery = groq`{
  "exhibition": *[
    _type == "exhibition"
    && slug.en.current == $slug
    && ${omitDrafts}
  ][0]{
    body,
    dateEnd,
    dateStart,
    mainImage,
    slug,
    title,
    "artworks": *[
      _type == "artwork" && references(^._id)
      && ${omitDrafts}
    ] | order(artist asc){
      _id,
      artist,
      date,
      dimensions,
      mainImage,
      "aspectRatio": mainImage.asset->metadata.dimensions.aspectRatio,
      medium,
      price,
      title
    }
  },
  ${allPageFields}
}`

export const postPageQuery = groq`{
  "post": *[
    _type == "post"
    && slug.en.current == $slug
    && ${omitDrafts}][0]{
    body,
    categories[]->{title},
    image,
    publishedAt,
    title
  },
  ${allPageFields}
}`

export const videoPageQuery = groq`{
  "video": *[
    _type == "video"
    && slug.en.current == $slug
    && ${omitDrafts}][0]{
    body,
    mainImage,
    title,
    videoLink
  },
  ${allPageFields}
}`

export const notFoundQuery = groq`{
  ${allPageFields}
}`

export const pagePathQuery = groq`
  *[
    _type == "page"
    && defined(slug)
    && slug.en.current != "index"
    && ${omitDrafts}
  ][].slug.en.current
`

export const artistPathQuery = groq`
  *[
    _type == "artist"
    && defined(slug)
    && ${omitDrafts}
  ][].slug.current
`

export const eventPathQuery = groq`
  *[
    _type == "event"
    && defined(slug)
    && ${omitDrafts}
  ][].slug.en.current
`

export const exhibitionPathQuery = groq`
  *[
    _type == "exhibition"
    && defined(slug)
    && ${omitDrafts}
  ][].slug.en.current
`

export const postPathQuery = groq`
  *[
    _type == "post"
    && defined(slug)
    && ${omitDrafts}
  ][].slug.en.current
`

export const videoPathQuery = groq`
  *[
    _type == "video"
    && defined(slug)
    && ${omitDrafts}
  ][].slug.en.current
`
