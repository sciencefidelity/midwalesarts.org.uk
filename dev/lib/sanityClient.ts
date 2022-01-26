import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2021-09-20",
  useCdn: true
})
