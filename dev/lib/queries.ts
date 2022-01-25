import groq from "groq"

export const postQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0..2]{
    title,
    slug,
    _id,
    publishedAt
  }
`
