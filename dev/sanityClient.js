import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: process.env.SANITY_PROJECT_ID || "",
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: "2021-09-20",
  useCdn: true
})
