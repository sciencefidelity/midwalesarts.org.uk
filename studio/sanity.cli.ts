import {createCliConfig} from 'sanity/cli'

export default createCliConfig({
  api: {
    projectId: import.meta.env.SANITY_STUDIO_API_PROJECT_ID,
    dataset: import.meta.env.SANITY_STUDIO_API_DATASET,
  },
})
