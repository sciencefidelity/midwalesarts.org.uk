import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "lib/sanityClient";
import { Artist, Artwork, Image, Locale, LocaleString } from "lib/interfaces";

/**
 * Capitalizes a string
 * @remarks changes the first letter of each word to uppercase
 * @param str - a string
 * @returns the capitalized string
 */
export function capitalize(str: string): string {
  return str
    .split(/[\s-]/g)
    .map((e) => e.replace(e[0], e[0].toUpperCase()))
    .join(" ");
}

/**
 * Adds a non-breaking space to a name
 * @remarks replaces spaces with non-breaking spaces prevents string from breaking
 * @param name - a name as a string
 * @returns the string with non-breaking spaces
 */
export function joinName(name: string): string {
  return name.split(" ").join("&nbsp;");
}

/**
 * Localizes a Sanity string definded by the {@link LocaleString} interface
 * @remarks returns the localized string
 * @param content - the LocaleString object
 * @param locale - the current locale
 * @returns the localized string
 */
export function localize(content: LocaleString, locale: string): string {
  return locale === "cy" && content.cy ? content.cy : content.en;
}

/**
 * Sorts the names of the represented artists by their last name
 * @remarks used in the `/artists` page
 * @param artists - an array of artist documents from the Sanity database
 * @returns the sorted array of artists
 */
export function sortArtists(artists: Artist[]): Artist[] {
  return artists.sort((a, b) =>
    a.title
      .trim()
      .replace(/(^\b\w+\s)/gi, "")
      .localeCompare(b.title.trim().replace(/(^\b\w+\s)/gi, ""))
  );
}

/**
 * Sorts artworks by the name of the artist who created them
 * @remarks used in the each `/exhibition/*` page
 * @param artworks - an array of artwork documents from the Sanity database
 * @returns the sorted array of artworks
 */
export function sortArtworks(artworks: Artwork[]): Artwork[] {
  return artworks.sort((a, b) =>
    a.artist
      .trim()
      .replace(/(^\b\w+\s)/gi, "")
      .localeCompare(b.artist.trim().replace(/(^\b\w+\s)/gi, ""))
  );
}

/**
 * Returns the subdirectory of the site based on the schema type
 * @remarks works alongside the `buildURL` function
 * @param locale - the current locale as a string
 * @param type - the document type defined in the Sanity schema
 * @returns the subdirectory used in the site
 */
export function subdir(locale: Locale, type: string): string {
  if (locale === "cy") {
    switch (type) {
      case "artist":
        return "artistiaid";
      case "event":
        return "digwyddiadau";
      case "exhibition":
        return "arddangosfeydd";
      case "post":
        return "newyddion";
      case "video":
        return "fideos";
      case "workshop":
        return "gweithdai";
      default:
        return "";
    }
  }
  if (locale === "en") {
    switch (type) {
      case "artist":
        return "artists";
      case "event":
        return "events";
      case "exhibition":
        return "exhibitions";
      case "post":
        return "news";
      case "video":
        return "videos";
      case "workshop":
        return "workshops";
      default:
        return "";
    }
  }
  return "";
}

/**
 * Builds a URL to a page relative to the root of the site
 * @remarks Uses the `subdir` function to determine the subdirectory
 * @param locale - the current locale as a string
 * @param type - the document type defined in the Sanity schema
 * @param slug - the slug defined in the document
 * @returns the URL to the page formatted as `subdirectory/slug`
 */
export function buildURL(locale: Locale, slug: string, type: string): string {
  return `${subdir(locale, type)}/${slug}`;
}

/**
 * Returns the image url for the given image object
 * @remarks uses `sanityClient` and `imageUrlBuilder` from NPM
 * @param source - the image object
 * @returns the image url
 */
export function urlFor(source: Image) {
  return imageUrlBuilder(sanityClient).image(source);
}
