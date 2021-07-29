import { RiHomeSmileLine } from "react-icons/ri"

export default {
  name: "frontPage",
  type: "document",
  title: "Front Page",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  icon: RiHomeSmileLine,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "body",
      title: "Introduction",
      type: "localeRichText",
    },
    {
      name: "cta",
      title: "Call to Action",
      description:
        "A call to action for the internal link (20 characters max).",
      type: "localeString",
    },
    {
      name: "ctaLink",
      title: "Link",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      description:
        "Images should be jpeg of 1440px along the longest edge, 500-600k is best.",
      type: "captionImage",
      options: {
        hotspot: true,
      },
    },
    {
      name: "subImage",
      title: "Inset image",
      description:
        "Images should be jpeg of 1440px along the longest edge, 500-600k is best.",
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
