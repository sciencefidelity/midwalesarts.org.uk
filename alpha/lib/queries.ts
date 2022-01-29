import groq from "groq"
// const QUERY_OMIT_DRAFTS = "!(_id in path('drafts.**'))"
const siteFields = `
  openingHeading,
  openingTimes,
  addressLine1,
  addressLine2,
  telephone,
  siteName,
  seoDescription,
  seoImage,
  email,
  signUp,
  signUpPlaceholder
`

export const frontPageQuery = groq`{
  "site": *[_type == "site" && !(_id in path('drafts.**'))][0]{
    ${siteFields}
  },
  "frontPage": *[_type == "frontPage" && !(_id in path('drafts.**'))][0]{
    body,
    cta,
    ctaLink,
    "heroImage": mainImage,
    "heroColor": mainImage.asset->metadata.palette.dominant.background,
    subImage,
    "subColor": subImage.asset->metadata.palette.dominant.background,
    featured[0..3]->{
      _id,
      title,
      caption,
      heading,
      body,
      cta,
      ctaLink,
      mainImage,
      "sectionHeroColor": mainImage.asset->metadata.palette.dominant.background,
      subImage,
      "sectionSubColor": subImage.asset->metadata.palette.dominant.background
    }
  },
  "menu": *[_type == "menu" && !(_id in path('drafts.**'))][0]{
    items[]->{
      _id,
      slug,
      menuTitle
    }
  },
  "socialLinks": *[_type == "site" && !(_id in path('drafts.**'))][0]{
    socialLinks[]->{
      _id, link, site
    }
  }
}`

export const pageQuery = groq`{
  "site": *[_type == "site" && !(_id in path('drafts.**'))][0]{
    ${siteFields}
  },
  "page": *[_type == "page" && slug.en.current == $slug && !(_id in path('drafts.**'))][0]{
    "body": body{en, cy},
    "heroImage": mainImage,
    "heroColor": mainImage.asset->metadata.palette.dominant.background,
    "slug": slug{en, cy},
    subtitle,
    template[0],
    "title": title{en, cy}
  },
  "menu": *[_type == "menu" && !(_id in path('drafts.**'))][0]{
    items[]->{
      _id,
      slug,
      menuTitle
    }
  },
  "socialLinks": *[_type == "site" && !(_id in path('drafts.**'))][0]{
    socialLinks[]->{
      _id, link, site
    }
  },
  "sidebar": {
    "posts": *[_type == "post" && !(_id in path('drafts.**'))]
    | order(publishedAt desc)[0..3]{
      _id, slug, title
    },
    "events": *[_type == "event" && recurring != true && dateTime(now()) < dateTime(date) && !(_id in path('drafts.**'))]
    | order(date asc)[0..3]{
      _id, slug, title
    },
    "exhibitions": *[_type == "exhibition" && dateTime(now()) < dateTime(dateStart) && !(_id in path('drafts.**'))]
    | order(dateStart asc)[0..3]{
      _id, dateStart, dateEnd, slug, title
    }
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
  }
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
      mainImage,
      medium,
      price,
      title
    }
  },
  "site": *[_type == "site" && !(_id in path('drafts.**'))][0]{
    ${siteFields}
  },
  "menu": *[_type == "menu" && !(_id in path('drafts.**'))][0]{
    items[]->{
      _id,
      slug,
      menuTitle
    }
  },
  "socialLinks": *[_type == "site" && !(_id in path('drafts.**'))][0]{
    socialLinks[]->{
      _id, link, site
    }
  }
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
  "site": *[_type == "site" && !(_id in path('drafts.**'))][0]{
    ${siteFields}
  },
  "menu": *[_type == "menu" && !(_id in path('drafts.**'))][0]{
    items[]->{
      _id,
      slug,
      menuTitle
    }
  },
  "socialLinks": *[_type == "site" && !(_id in path('drafts.**'))][0]{
    socialLinks[]->{
      _id, link, site
    }
  },
  "sidebar": {
    "posts": *[_type == "post" && !(_id in path('drafts.**'))]
    | order(publishedAt desc)[0..3]{
      _id, slug, title
    },
    "events": *[_type == "event" && recurring != true && dateTime(now()) < dateTime(date) && !(_id in path('drafts.**'))]
    | order(date asc)[0..3]{
      _id, slug, title
    },
    "exhibitions": *[_type == "exhibition" && dateTime(now()) < dateTime(dateStart) && !(_id in path('drafts.**'))]
    | order(dateStart asc)[0..3]{
      _id, dateStart, dateEnd, slug, title
    }
  }
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
      medium,
      price,
      title
    }
  },
  "site": *[_type == "site" && !(_id in path('drafts.**'))][0]{
    ${siteFields}
  },
  "menu": *[_type == "menu" && !(_id in path('drafts.**'))][0]{
    items[]->{
      _id,
      slug,
      menuTitle
    }
  },
  "socialLinks": *[_type == "site" && !(_id in path('drafts.**'))][0]{
    socialLinks[]->{
      _id, link, site
    }
  }
}`

export const postPageQuery = groq`{
  "post": *[_type == "post" && slug.en.current == $slug && !(_id in path('drafts.**'))][0]{
    body,
    categories[]->{title},
    image,
    publishedAt,
    title
  },
  "site": *[_type == "site" && !(_id in path('drafts.**'))][0]{
    ${siteFields}
  },
  "menu": *[_type == "menu" && !(_id in path('drafts.**'))][0]{
    items[]->{
      _id,
      slug,
      menuTitle
    }
  },
  "socialLinks": *[_type == "site" && !(_id in path('drafts.**'))][0]{
    socialLinks[]->{
      _id, link, site
    }
  },
  "sidebar": {
    "posts": *[_type == "post" && !(_id in path('drafts.**'))]
    | order(publishedAt desc)[0..3]{
      _id, slug, title
    },
    "events": *[_type == "event" && recurring != true && dateTime(now()) < dateTime(date) && !(_id in path('drafts.**'))]
    | order(date asc)[0..3]{
      _id, slug, title
    },
    "exhibitions": *[_type == "exhibition" && dateTime(now()) < dateTime(dateStart) && !(_id in path('drafts.**'))]
    | order(dateStart asc)[0..3]{
      _id, dateStart, dateEnd, slug, title
    }
  }
}`

export const videoPageQuery = groq`{
  "video": *[_type == "video" && slug.en.current == $slug && !(_id in path('drafts.**'))][0]{
    body,
    mainImage,
    title,
    videoLink
  },
  "site": *[_type == "site" && !(_id in path('drafts.**'))][0]{
    ${siteFields}
  },
  "menu": *[_type == "menu" && !(_id in path('drafts.**'))][0]{
    items[]->{
      _id,
      slug,
      menuTitle
    }
  },
  "socialLinks": *[_type == "site" && !(_id in path('drafts.**'))][0]{
    socialLinks[]->{
      _id, link, site
    }
  },
  "sidebar": {
    "posts": *[_type == "post" && !(_id in path('drafts.**'))]
    | order(publishedAt desc)[0..3]{
      _id, slug, title
    },
    "events": *[_type == "event" && recurring != true && dateTime(now()) < dateTime(date) && !(_id in path('drafts.**'))]
    | order(date asc)[0..3]{
      _id, slug, title
    },
    "exhibitions": *[_type == "exhibition" && dateTime(now()) < dateTime(dateStart) && !(_id in path('drafts.**'))]
    | order(dateStart asc)[0..3]{
      _id, dateStart, dateEnd, slug, title
    }
  }
}`

export const notFoundQuery = groq`{
  "notFound": *[_type == "page" && slug.en.current == "about"  && !(_id in path('drafts.**'))][0]{
    mainImage
  },
  "site": *[_type == "site" && !(_id in path('drafts.**'))][0]{
    ${siteFields}
  },
  "menu": *[_type == "menu" && !(_id in path('drafts.**'))][0]{
    items[]->{
      _id,
      slug,
      menuTitle
    }
  },
  "socialLinks": *[_type == "site" && !(_id in path('drafts.**'))][0]{
    socialLinks[]->{
      _id, link, site
    }
  }
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
