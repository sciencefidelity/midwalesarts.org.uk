import { supportedLanguages } from "../languages"

export default {
  name: "localeSlug",
  title: "Localized slugs",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],

  fields: [
    {
      title: "English",
      name: "en",
      type: "slug",
      options: {
        source: `title.${supportedLanguages[0].name}`,
      },
    },
    {
      title: "Welsh",
      name: "cy",
      type: "slug",
      fieldset: "translations",
      options: {
        source: `title.${supportedLanguages[1].name}`,
      },
    },
  ],
}
