import { groq } from "next-sanity"

export const postQuery = groq`
  *[_type == "post"][0]{
    _id, title, body, publishedAt,
    "author": author->name,
    categories[]->{_id, title}
  }
`
