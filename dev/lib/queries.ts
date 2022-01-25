import groq from "groq"

export const postQuery = groq`
  *[_type == "post"] | order(publishedAt desc)
`
