import { groq } from "next-sanity"

export const postQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0]{
    body,
    slug,
    publishedAt,
    title
  }
`
