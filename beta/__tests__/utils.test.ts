import { buildUrl, capitalize } from "lib/utils"

const mockSlugData = {
  _type: "artist",
  slug: {
    current: "matt-cook"
  }
} as const

const mockSlugDataLocalized = {
  _type: "post",
  slug: {
    cy: {
      current: "helo-byd"
    },
    en: {
      current: "hello-world"
    }
  }
} as const

const mockSlugMissingData = {
  _type: "page"
} as const

test("Build unlocalized url", () => {
  expect(buildUrl(mockSlugData)).toBe("/artists/matt-cook")
})

test("Build localized url", () => {
  expect(buildUrl(mockSlugDataLocalized)).toBe("/news/hello-world")
})

test("Handle missing slug", () => {
  expect(buildUrl(mockSlugMissingData)).toBe("/")
})

test("Change home to Home", () => {
  expect(capitalize("home")).toBe("Home")
})

test("Works if word is already capitalized", () => {
  expect(capitalize("Home")).toBe("Home")
})

test("Works with a sentence", () => {
  expect(capitalize("support us")).toBe("Support Us")
})

test("De-slugify", () => {
  expect(capitalize("support-us")).toBe("Support Us")
})
