import { groq } from "next-sanity"

export const postQuery = groq`*[_type == "post"][0..2]{
    body,
    slug,
    publishedAt,
    title
  }
`
