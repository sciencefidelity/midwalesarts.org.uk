export const config = {
  dataset: process.env.SANITY_DATASET || "",
  projectId: process.env.SANITY_PROJECT_ID || "production",
  apiVersion: "2021-09-20",
  useCdn: true
}
