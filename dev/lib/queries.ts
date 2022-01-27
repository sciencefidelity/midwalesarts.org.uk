import groq from "groq"

export const frontPageQuery = groq`{
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
      title
    }
  }
}`

// export const mainMenuQuery = groq`*[_type == "menu"][0]{
//   items[]->{
//     _id,
//     slug,
//     title
//   }
// }`

// export const postQuery = groq`
//   *[_type == "post"] | order(publishedAt desc){
//     title,
//     slug,
//     _id,
//     publishedAt
//   }
// `
