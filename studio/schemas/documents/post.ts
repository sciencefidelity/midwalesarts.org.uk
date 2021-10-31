import { FaPencilAlt } from "react-icons/fa"

export default {
  name: "post",
  title: "Post",
  type: "document",
  icon: FaPencilAlt,
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
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published on",
      type: "datetime",
      initialValue: new Date().toISOString(),
      options: {
        dateFormat: "dddd, MMMM Do YYYY,",
        timeFormat: "h:mm a",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "localeSlug",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "title.en",
      media: "image",
    },
  },
}
