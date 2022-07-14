import sanityClient from "@sanity/client";

/**
 * Defines the projectId and dataset to connect to the Sanity database
 * @remarks uses project id and dataset defined in `.env`
 * {@link https://www.sanity.io/manage}
 */
export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2022-05-25",
  useCdn: true,
});
