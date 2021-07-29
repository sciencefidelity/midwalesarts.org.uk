import { FaCalendarAlt } from "react-icons/fa"

export default {
  name: "event",
  title: "Event",
  type: "document",
  icon: FaCalendarAlt,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "slug",
      title: "Slug",
      description: "Click Generate.",
      type: "localeSlug",
    },
    {
      name: "date",
      title: "Date and time",
      type: "datetime",
      options: {
        dateFormat: "dddd, MMMM Do YYYY,",
        timeFormat: "h:mm a",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "briteLink",
      title: "Eventbrite link",
      description: "Leave blank if the event is not on Eventbrite.",
      type: "url",
    },
    {
      name: "body",
      title: "Body",
      type: "localeRichText",
    },
    {
      name: "mainImage",
      title: "Main image",
      description:
        "Images should be jpeg of 1440px along the longest edge, 500-600k is best.",
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
