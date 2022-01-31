import groq from "groq"

const omitDrafts = "!(_id in path('drafts.**'))"
const dominantBg = "asset->metadata.palette.dominant.background"
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
const menuFields = `
  items[]->{
    _id,
    slug,
    menuTitle
  }
`
const sideBarFields = `
  "posts": *[_type == "post" && ${omitDrafts}]
  | order(publishedAt desc)[0..3]{
    _id, slug, title
  },
  "events": *[_type == "event" && recurring != true && dateTime(now()) < dateTime(date) && ${omitDrafts}]
  | order(date asc)[0..3]{
    _id, slug, title
  },
  "exhibitions": *[_type == "exhibition" && dateTime(now()) < dateTime(dateStart) && ${omitDrafts}]
  | order(dateStart asc)[0..3]{
    _id, dateStart, dateEnd, slug, title
  }
`

const allPageFields = `
  "site": *[_type == "site" && ${omitDrafts}][0]{
    ${siteFields}
  },
  "menu": *[_type == "menu" && ${omitDrafts}][0]{
    ${menuFields}
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
    body,
    cta,
    ctaLink,
    mainImage,
    subImage
  },
  "featured": *[_type == "frontPage"][0].featured[0..3]->{
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
  "page": *[_type == "page" && slug.en.current == $slug && ${omitDrafts}][0]{
    "body": body{en, cy},
    mainImage,
    "heroColor": mainImage.${dominantBg},
    "slug": slug{en, cy},
    subtitle,
    template,
    "title": title{en, cy}
  },
  "artists": *[_type == "artist" && !(_id in path("drafts.**")) && !(_id in path('drafts.**'))] | order(title asc)[]{
    _id,
    title,
    slug,
    body,
    mainImage,
    disciplines[]->{
      _id,
      title
    }
  },
  "heroArtist": *[_type == "artist" && !(_id in path("drafts.**")) && !(_id in path('drafts.**'))]{
    ...,
    "random": (dateTime(now()) - dateTime(_createdAt)) % 199
  } | order(random desc)[0],
  "spaces": *[_type == "space" && !(_id in path('drafts.**'))]{
    _id,
    body,
    mainImage,
    title,
    slug
  },
  "pastEvents": *[_type == "event" && recurring != true && dateTime(now()) > dateTime(date) && !(_id in path('drafts.**'))] | order(date desc)[]{
    _id,
    body,
    briteLink,
    date,
    mainImage,
    slug,
    title
  },
  "recurringEvents": *[_type == "event" && recurring == true && !(_id in path('drafts.**'))][]{
    _id,
    body,
    briteLink,
    date,
    mainImage,
    slug,
    title
  },
  "upcomingEvents": *[_type == "event" && recurring != true && dateTime(now()) < dateTime(date) && !(_id in path('drafts.**'))] | order(date asc)[]{
    _id,
    body,
    briteLink,
    date,
    mainImage,
    slug,
    title
  },
  "currentExhibitions": *[_type == "exhibition" && dateTime(now()) >= dateTime(dateStart) && dateTime(now()) <= dateTime(dateEnd) && !(_id in path('drafts.**'))]
    | order(dateStart asc){
    _id,
    body,
    dateEnd,
    dateStart,
    mainImage,
    slug,
    title
  },
  "pastExhibitions": *[_type == "exhibition" && dateTime(now()) > dateTime(dateEnd) && !(_id in path('drafts.**'))]
    | order(dateStart desc){
    _id,
    body,
    dateEnd,
    dateStart,
    mainImage,
    slug,
    title
  },
  "futureExhibitions": *[_type == "exhibition" && dateTime(now()) < dateTime(dateStart) && !(_id in path('drafts.**'))]
    | order(dateStart desc){
    _id,
    body,
    dateEnd,
    dateStart,
    mainImage,
    slug,
    title
  },
  "posts": *[_type == "post" && !(_id in path('drafts.**'))] | order(publishedAt desc){
    _id,
    body,
    categories[]->{title},
    image,
    publishedAt,
    slug,
    title
  },
  "videos": *[_type == "video" && !(_id in path('drafts.**'))] | order(publishDate desc){
    _id,
    mainImage,
    publishDate,
    slug,
    title
  },
  ${allPageFields}
}`

export const artistPageQuery = groq`{
  "artist": *[_type == "artist" && slug.current == $slug && !(_id in path('drafts.**'))][0]{
    body,
    disciplines[]->{
      _id,
      title
    },
    mainImage,
    title,
    "artworks": *[_type == "artwork" && artist == ^.title && !(_id in path('drafts.**'))]{
      artist,
      date,
      dimensions,
      mainImage{
        _type,
        asset,
        "aspect": asset->metadata.dimensions.aspectRatio
      },
      medium,
      price,
      title
    }
  },
  ${allPageFields}
}`

export const eventPageQuery = groq`{
  "event": *[_type == "event" && slug.en.current == $slug && !(_id in path('drafts.**'))][0]{
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
  "exhibition": *[_type == "exhibition" && slug.en.current == $slug && !(_id in path('drafts.**'))][0]{
    body,
    dateEnd,
    dateStart,
    mainImage,
    slug,
    title,
    "artworks": *[_type == "artwork" && references(^._id) && !(_id in path('drafts.**'))] | order(artist asc){
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
  "post": *[_type == "post" && slug.en.current == $slug && !(_id in path('drafts.**'))][0]{
    body,
    categories[]->{title},
    image,
    publishedAt,
    title
  },
  ${allPageFields}
}`

export const videoPageQuery = groq`{
  "video": *[_type == "video" && slug.en.current == $slug && !(_id in path('drafts.**'))][0]{
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
  *[_type == "page" && defined(slug) && slug.en.current != "index" && !(_id in path('drafts.**'))][].slug.en.current
`

export const artistPathQuery = groq`
  *[_type == "artist" && defined(slug) && !(_id in path('drafts.**'))][].slug.current
`

export const eventPathQuery = groq`
  *[_type == "event" && !(_id in path('drafts.**')) && defined(slug)][].slug.en.current
`

export const exhibitionPathQuery = groq`
  *[_type == "exhibition" && defined(slug) && !(_id in path('drafts.**'))][].slug.en.current
`

export const postPathQuery = groq`
  *[_type == "post" && defined(slug) && !(_id in path('drafts.**'))][].slug.en.current
`

export const videoPathQuery = groq`
  *[_type == "video" && defined(slug) && !(_id in path('drafts.**'))][].slug.en.current
`
