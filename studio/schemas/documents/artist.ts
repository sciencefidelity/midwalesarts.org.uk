import { FaUserAstronaut } from "react-icons/fa"

export default {
  name: "artist",
  title: "Artist",
  type: "document",
  icon: FaUserAstronaut,
  fields: [
    {
      name: "title",
      title: "Name",
      description: "Artist full name.",
      type: "string"
    },
    {
      name: "body",
      title: "Biography",
      description:
        "Artist biography or artistic statment, choose Quote from the dropdown in the top left for statements.",
      type: "localeRichText"
    },
    {
      name: "disciplines",
      title: "Disciplines",
      description:
        "Choose from the dropdown. Add disciplines in the Discipline section.",
      type: "array",
      of: [{ type: "reference", to: { type: "discipline" } }]
    },
    {
      name: "slug",
      title: "Slug",
      description: "Click Generate.",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "mainImage",
      title: "Main image",
      description:
        "Images should be jpeg of 1440px along the longest edge, 500-600k is best.",
      type: "captionImage",
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage"
    }
  }
}
