import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Artist
 *
 *
 */
export interface Artist extends SanityDocument {
  _type: "artist";

  /**
   * Name — `string`
   *
   * Artist full name.
   */
  title?: string;

  /**
   * Biography — `localeRichText`
   *
   * Artist biography or artistic statment, choose Quote from the dropdown in the top left for statements.
   */
  body?: LocaleRichText;

  /**
   * Disciplines — `array`
   *
   * Choose from the dropdown. Add disciplines in the Discipline section.
   */
  disciplines?: Array<SanityKeyedReference<Discipline>>;

  /**
   * Slug — `slug`
   *
   * Click Generate.
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Main image — `captionImage`
   *
   * Images should be jpeg of 1440px along the longest edge, 500-600k is best.
   */
  mainImage?: CaptionImage;
}

/**
 * Artwork
 *
 *
 */
export interface Artwork extends SanityDocument {
  _type: "artwork";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Artist — `string`
   *
   *
   */
  artist?: string;

  /**
   * Medium — `localeString`
   *
   *
   */
  medium?: LocaleString;

  /**
   * Dimensions — `string`
   *
   *
   */
  dimensions?: string;

  /**
   * Date — `string`
   *
   * The year the work was created.
   */
  date?: string;

  /**
   * Price — `string`
   *
   * Add £ before the price, use POA for enquire only, and NFS for not for sale.
   */
  price?: string;

  /**
   * Sold? — `boolean`
   *
   * Sold artworks will not display on the artist pages.
   */
  sold?: boolean;

  /**
   * In exhibition — `array`
   *
   * Before adding artworks to a new exhibition, add the exhibition in the Exhibitions section.
   */
  exhibition?: Array<SanityKeyedReference<Exhibition>>;

  /**
   * Main image — `image`
   *
   * Images should be jpeg of 1440px along the longest edge, 500-600k is best.
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Event
 *
 *
 */
export interface Event extends SanityDocument {
  _type: "event";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `localeSlug`
   *
   * Click Generate.
   */
  slug?: LocaleSlug;

  /**
   * Date and time — `datetime`
   *
   *
   */
  date?: string;

  /**
   * Recurring event — `boolean`
   *
   *
   */
  recurring?: boolean;

  /**
   * Eventbrite link — `url`
   *
   * Leave blank if the event is not on Eventbrite.
   */
  briteLink?: string;

  /**
   * Body — `localeRichText`
   *
   *
   */
  body?: LocaleRichText;

  /**
   * Main image — `image`
   *
   * Images should be jpeg of 1440px along the longest edge, 500-600k is best.
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * SEO title — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters).
   */
  seoTitle?: LocaleString;

  /**
   * SEO description — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters).
   */
  seoDescription?: LocaleString;

  /**
   * SEO Image — `image`
   *
   * Ideal size 1200 x 630px (if not added main image will be used).
   */
  seoImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Exhibition
 *
 *
 */
export interface Exhibition extends SanityDocument {
  _type: "exhibition";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `localeSlug`
   *
   *
   */
  slug?: LocaleSlug;

  /**
   * Start date — `datetime`
   *
   *
   */
  dateStart?: string;

  /**
   * End date — `datetime`
   *
   *
   */
  dateEnd?: string;

  /**
   * Body — `localeRichText`
   *
   *
   */
  body?: LocaleRichText;

  /**
   * Main image — `captionImage`
   *
   *
   */
  mainImage?: CaptionImage;

  /**
   * SEO title — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters).
   */
  seoTitle?: LocaleString;

  /**
   * SEO description — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters).
   */
  seoDescription?: LocaleString;

  /**
   * SEO Image — `image`
   *
   * Ideal size 1200 x 630px (if not added main image will be used).
   */
  seoImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Front Page
 *
 *
 */
export interface FrontPage extends SanityDocument {
  _type: "frontPage";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Introduction — `localeRichText`
   *
   *
   */
  body?: LocaleRichText;

  /**
   * Call to Action — `localeString`
   *
   * A call to action for the internal link (20 characters max).
   */
  cta?: LocaleString;

  /**
   * Link — `object`
   *
   *
   */
  ctaLink?: {
    _type: "ctaLink";
    /**
     * item — `reference`
     *
     *
     */
    item?: SanityReference<Artist | Event | Exhibition | Page | Post | Video>;
  };

  /**
   * Main image — `captionImage`
   *
   * Images should be jpeg of 1440px along the longest edge, 500-600k is best.
   */
  mainImage?: CaptionImage;

  /**
   * Inset image — `captionImage`
   *
   * Images should be jpeg of 1440px along the longest edge, 500-600k is best.
   */
  subImage?: CaptionImage;

  /**
   * Feature Sections — `array`
   *
   * Maximum three items
   */
  featured?: Array<SanityKeyedReference<FrontPageSection>>;
}

/**
 * Headline
 *
 *
 */
export interface FrontPageSection extends SanityDocument {
  _type: "frontPageSection";

  /**
   * Headline — `localeString`
   *
   * Limit 15 characters.
   */
  title?: LocaleString;

  /**
   * Subheading — `localeString`
   *
   * Limit 35 characters.
   */
  caption?: LocaleString;

  /**
   * Heading — `localeString`
   *
   * Limit 30 characters.
   */
  heading?: LocaleString;

  /**
   * Body — `localeRichText`
   *
   * Limit 400 characters.
   */
  body?: LocaleRichText;

  /**
   * Call to Action — `localeString`
   *
   * A call to action for the internal link (20 characters max).
   */
  cta?: LocaleString;

  /**
   * Link — `object`
   *
   *
   */
  ctaLink?: {
    _type: "ctaLink";
    /**
     * item — `reference`
     *
     *
     */
    item?: SanityReference<Artist | Event | Exhibition | Page | Post | Video>;
  };

  /**
   * Main image — `captionImage`
   *
   * Images should be jpeg of 1440px along the longest edge, 500-600k is best.
   */
  mainImage?: CaptionImage;

  /**
   * Inset image — `captionImage`
   *
   * Images should be jpeg of 1440px along the longest edge, 500-600k is best.
   */
  subImage?: CaptionImage;
}

/**
 * Menu
 *
 *
 */
export interface Menu extends SanityDocument {
  _type: "menu";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Manu Items — `array`
   *
   *
   */
  items?: Array<SanityKeyedReference<Page>>;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Menu Title — `localeString`
   *
   * The title shown in the main navigation
   */
  menuTitle?: LocaleString;

  /**
   * Subtitle — `localeString`
   *
   * Not available for 'Page' type
   */
  subtitle?: LocaleString;

  /**
   * Template — `array`
   *
   *
   */
  template?: Array<SanityKeyed<string>>;

  /**
   * Slug — `localeSlug`
   *
   *
   */
  slug?: LocaleSlug;

  /**
   * Body — `localeRichText`
   *
   * Only available for 'Page' type
   */
  body?: LocaleRichText;

  /**
   * Main image — `captionImage`
   *
   * Only available for 'Page' type
   */
  mainImage?: CaptionImage;

  /**
   * SEO title — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters).
   */
  seoTitle?: LocaleString;

  /**
   * SEO description — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters).
   */
  seoDescription?: LocaleString;

  /**
   * SEO Image — `image`
   *
   * Ideal size 1200 x 630px (if not added main image will be used).
   */
  seoImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Site
 *
 *
 */
export interface Site extends SanityDocument {
  _type: "site";

  /**
   * Site Name — `localeString`
   *
   *
   */
  siteName?: LocaleString;

  /**
   * Site Description — `localeString`
   *
   *
   */
  siteDescription?: LocaleString;

  /**
   * Keywords — `localeString`
   *
   * A list of keywords seperated by commas.
   */
  keywords?: LocaleString;

  /**
   * SEO title — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters).
   */
  seoTitle?: LocaleString;

  /**
   * SEO description — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters).
   */
  seoDescription?: LocaleString;

  /**
   * Twitter Handle — `string`
   *
   *
   */
  twitterHandle?: string;

  /**
   * SEO Image — `image`
   *
   * Ideal size 1200 x 630px.
   */
  seoImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Opening Heading — `localeString`
   *
   * Heading before opening times (ie Opening Times)
   */
  openingHeading?: LocaleString;

  /**
   * Opening Times — `localeString`
   *
   * One line only (ie Thursday - Sunday 11-4)
   */
  openingTimes?: LocaleString;

  /**
   * Address Line 1 — `string`
   *
   *
   */
  addressLine1?: string;

  /**
   * Address Line 2 — `string`
   *
   *
   */
  addressLine2?: string;

  /**
   * Telephone — `string`
   *
   *
   */
  telephone?: string;

  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Sign Up Title — `localeString`
   *
   * One line only (ie Sign up to our mailing list)
   */
  signUp?: LocaleString;

  /**
   * Sign Up Placeholder — `localeString`
   *
   * One line only (ie Email address...)
   */
  signUpPlaceholder?: LocaleString;

  /**
   * Social Links — `array`
   *
   *
   */
  socialLinks?: Array<SanityKeyedReference<Social>>;
}

/**
 * Social Links
 *
 *
 */
export interface Social extends SanityDocument {
  _type: "social";

  /**
   * site — `string`
   *
   *
   */
  site?: string;

  /**
   * Link — `url`
   *
   *
   */
  link?: string;
}

/**
 * Space
 *
 *
 */
export interface Space extends SanityDocument {
  _type: "space";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Body — `localeRichText`
   *
   *
   */
  body?: LocaleRichText;

  /**
   * Slug — `localeSlug`
   *
   *
   */
  slug?: LocaleSlug;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Body — `localeRichText`
   *
   *
   */
  body?: LocaleRichText;

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Published on — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Slug — `localeSlug`
   *
   *
   */
  slug?: LocaleSlug;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Video
 *
 *
 */
export interface Video extends SanityDocument {
  _type: "video";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Body — `localeRichText`
   *
   *
   */
  body?: LocaleRichText;

  /**
   * Video Link — `url`
   *
   *
   */
  videoLink?: string;

  /**
   * Publish date — `date`
   *
   *
   */
  publishDate?: string;

  /**
   * Slug — `localeSlug`
   *
   *
   */
  slug?: LocaleSlug;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;
}

/**
 * Discipline
 *
 *
 */
export interface Discipline extends SanityDocument {
  _type: "discipline";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type CaptionImage = {
  _type: "captionImage";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Attribution — `string`
   *
   *
   */
  Caption?: string;
};

export type LocaleRichText = {
  _type: "localeRichText";
  /**
   * English — `blockContent`
   *
   *
   */
  en?: BlockContent;

  /**
   * Welsh — `blockContent`
   *
   *
   */
  cy?: BlockContent;
};

export type LocaleSlug = {
  _type: "localeSlug";
  /**
   * English — `slug`
   *
   *
   */
  en?: { _type: "en"; current: string };

  /**
   * Welsh — `slug`
   *
   *
   */
  cy?: { _type: "cy"; current: string };
};

export type LocaleString = {
  _type: "localeString";
  /**
   * English — `string`
   *
   *
   */
  en?: string;

  /**
   * Welsh — `string`
   *
   *
   */
  cy?: string;
};

export type Documents =
  | Artist
  | Artwork
  | Event
  | Exhibition
  | FrontPage
  | FrontPageSection
  | Menu
  | Page
  | Site
  | Social
  | Space
  | Post
  | Video
  | Category
  | Discipline;
