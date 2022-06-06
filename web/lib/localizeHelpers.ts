import sanityClient from "lib/sanityClient"
import { localizePageQuery } from "lib/queries"
import { PageContext } from "lib/interfaces"

export const formatSlug = (
  slug: string[],
  locale: string,
  defaultLocale: string
) => {
  return locale === defaultLocale
    ? `/${slug.join("/")}`
    : `/${locale}/${slug.join("/")}`
}

export const getLocalizedPaths = (pageContext: PageContext) => {
  const paths = pageContext.locales.map(locale => {
    return {
      locale,
      href: localizePath({ ...pageContext, locale })
    }
  })
  return paths
}

export const localizePath = (pageContext: PageContext) => {
  const { defaultLocale, locale, localization } = pageContext
  return formatSlug(localization.slug, locale, defaultLocale)
}

export const getLocalizedPage = async (pageContext: PageContext) => {
  const { data } = await sanityClient.fetch(
    localizePageQuery, { id: pageContext.localization.id }
  )
  return data.page
}
