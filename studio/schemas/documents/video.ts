import { FaYoutube } from "react-icons/fa"

export default {
  name: "video",
  title: "Video",
  type: "document",
  icon: FaYoutube,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "body",
      title: "Body",
      type: "localeRichText",
    },
    {
      name: "videoLink",
      title: "Video Link",
      type: "url",
    },
    {
      name: "publishDate",
      title: "Publish date",
      type: "date",
      options: {
        dateFormat: "dddd, MMMM Do YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "localeSlug",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
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
