import { FaLandmark } from "react-icons/fa"

export default {
  name: "exhibition",
  title: "Exhibition",
  type: "document",
  icon: FaLandmark,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "dateStart",
      title: "Start date",
      type: "date",
      options: {
        dateFormat: "dddd, MMMM Do YYYY",
      },
    },
    {
      name: "dateEnd",
      title: "End date",
      type: "date",
      options: {
        dateFormat: "dddd, MMMM Do YYYY",
      },
    },
    {
      name: "body",
      title: "Body",
      type: "localeRichText",
    },
    {
      name: "slug",
      title: "Slug",
      type: "localeSlug",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "captionImage",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "title.en",
      media: "mainImage",
    },
  },
}
