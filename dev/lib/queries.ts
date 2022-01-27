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
    template,
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
  "spaces": *[_type == "space"]{
    _id,
    body,
    mainImage,
    title,
    slug
  }
}`

export const pagePathQuery = groq`
  *[_type == "page" && defined(slug) && slug.en.current != "index"][].slug.en.current
`

// export const postQuery = groq`
//   *[_type == "post"] | order(publishedAt desc){
//     title,
//     slug,
//     _id,
//     publishedAt
//   }
// `
