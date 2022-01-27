import groq from "groq"

export const frontPageQuery = groq`{
  "site": *[_type == "site"][0]{
    openingHeading,
    openingTimes,
    addressLine1,
    addressLine2,
    telephone,
    siteName,
    email,
    signUp,
    signUpPlaceholder
  },
  "frontPage": *[_type == "frontPage"][0]{
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
  "menu": *[_type == "menu"][0]{
    items[]->{
      _id,
      slug,
      menuTitle
    }
  },
  "socialLinks": *[_type == "site"][0]{
    socialLinks[]->{
      _id, link, site
    }
  }
}`

export const pageQuery = groq`{
  "site": *[_type == "site"][0]{
    openingHeading,
    openingTimes,
    addressLine1,
    addressLine2,
    telephone,
    siteName,
    email,
    signUp,
    signUpPlaceholder
  },
  "page": *[_type == "page" && slug.en.current == $slug][0]{
    "body": body{en, cy},
    "heroImage": mainImage,
    "heroColor": mainImage.asset->metadata.palette.dominant.background,
    "slug": slug{en, cy},
    subtitle,
    template[0],
    "title": title{en, cy}
  },
  "menu": *[_type == "menu"][0]{
    items[]->{
      _id,
      slug,
      menuTitle
    }
  },
  "socialLinks": *[_type == "site"][0]{
    socialLinks[]->{
      _id, link, site
    }
  },
  "artists": *[_type == "artist" && !(_id in path("drafts.**"))] | order(title asc)[]{
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
  "heroArtist": *[_type == "artist" && !(_id in path("drafts.**"))]{
    ...,
    "random": (dateTime(now()) - dateTime(_createdAt)) % 199
  } | order(random desc)[0],
  "spaces": *[_type == "space"]{
    _id,
    body,
    mainImage,
    title,
    slug
  },
  "pastEvents": *[_type == "event" && recurring != true && dateTime(now()) > dateTime(date)] | order(date desc)[0..2]{
    _id,
    body,
    briteLink,
    date,
    mainImage,
    slug,
    title
  },
  "recurringEvents": *[_type == "event" && recurring == true][]{
    _id,
    body,
    briteLink,
    date,
    mainImage,
    slug,
    title
  },
  "upcomingEvents": *[_type == "event" && recurring != true && dateTime(now()) < dateTime(date)] | order(date asc)[]{
    _id,
    body,
    briteLink,
    date,
    mainImage,
    slug,
    title
  }
}`

export const artistPageQuery = groq`{
  "artist": *[_type == "artist" && slug.current == $slug]{
    body,
    disciplines[]->{
      _id,
      title
    },
    mainImage,
    title,
    "artworks": *[_type == "artwork" && artist == ^.title]{
      artist,
      date,
      dimensions,
      mainImage,
      medium,
      price,
      title
    }
  },
  "site": *[_type == "site"][0]{
    openingHeading,
    openingTimes,
    addressLine1,
    addressLine2,
    telephone,
    siteName,
    email,
    signUp,
    signUpPlaceholder
  },
  "menu": *[_type == "menu"][0]{
    items[]->{
      _id,
      slug,
      menuTitle
    }
  },
  "socialLinks": *[_type == "site"][0]{
    socialLinks[]->{
      _id, link, site
    }
  }
}`

export const eventPageQuery = groq`{
  "event": *[_type == "event" && slug.en.current == $slug]{
    body,
    briteLink,
    date,
    mainImage,
    slug,
    title
  },
  "site": *[_type == "site"][0]{
    openingHeading,
    openingTimes,
    addressLine1,
    addressLine2,
    telephone,
    siteName,
    email,
    signUp,
    signUpPlaceholder
  },
  "menu": *[_type == "menu"][0]{
    items[]->{
      _id,
      slug,
      menuTitle
    }
  },
  "socialLinks": *[_type == "site"][0]{
    socialLinks[]->{
      _id, link, site
    }
  }
}`

export const pagePathQuery = groq`
  *[_type == "page" && defined(slug) && slug.en.current != "index"][].slug.en.current
`

export const artistPathQuery = groq`
  *[_type == "artist" && defined(slug)][].slug.current
`

export const eventPathQuery = groq`
  *[_type == "event" && defined(slug)][].slug.en.current
`

export const exhibitionPathQuery = groq`
  *[_type == "exhibition" && defined(slug)][].slug.en.current
`

// export const postQuery = groq`
//   *[_type == "post"] | order(publishedAt desc){
//     title,
//     slug,
//     _id,
//     publishedAt
//   }
// `
