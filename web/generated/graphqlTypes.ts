export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};










export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};


export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type SanityArtist = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<SanityLocaleRichText>;
  disciplines?: Maybe<Array<Maybe<SanityDiscipline>>>;
  slug?: Maybe<SanitySlug>;
  mainImage?: Maybe<SanityCaptionImage>;
  _rawBody?: Maybe<Scalars['JSON']>;
  _rawDisciplines?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawMainImage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityArtist_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityArtist_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityArtist_RawBodyArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityArtist_RawDisciplinesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityArtist_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityArtist_RawMainImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityArtwork = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<SanityLocaleString>;
  artist?: Maybe<Scalars['String']>;
  medium?: Maybe<SanityLocaleString>;
  dimensions?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  sold?: Maybe<Scalars['Boolean']>;
  exhibition?: Maybe<Array<Maybe<SanityExhibition>>>;
  mainImage?: Maybe<SanityImage>;
  _rawTitle?: Maybe<Scalars['JSON']>;
  _rawMedium?: Maybe<Scalars['JSON']>;
  _rawExhibition?: Maybe<Scalars['JSON']>;
  _rawMainImage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityArtwork_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityArtwork_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityArtwork_RawTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityArtwork_RawMediumArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityArtwork_RawExhibitionArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityArtwork_RawMainImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlock = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<SanitySpan>>>;
  style?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['String']>;
  _rawChildren?: Maybe<Scalars['JSON']>;
};


export type SanityBlock_RawChildrenArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlockOrImage = SanityBlock | SanityImage;

export type SanityCaptionImage = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
  caption?: Maybe<Scalars['String']>;
  Caption?: Maybe<Scalars['String']>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _rawHotspot?: Maybe<Scalars['JSON']>;
  _rawCrop?: Maybe<Scalars['JSON']>;
};


export type SanityCaptionImage_RawAssetArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityCaptionImage_RawHotspotArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityCaptionImage_RawCropArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityCategory = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<SanityLocaleString>;
  _rawTitle?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityCategory_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityCategory_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityCategory_RawTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityDiscipline = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<SanityLocaleString>;
  _rawTitle?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityDiscipline_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityDiscipline_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityDiscipline_RawTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

/** A Sanity document */
export type SanityDocument = {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
};

export type SanityEvent = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<SanityLocaleString>;
  slug?: Maybe<SanityLocaleSlug>;
  date?: Maybe<Scalars['Date']>;
  recurring?: Maybe<Scalars['Boolean']>;
  briteLink?: Maybe<Scalars['String']>;
  body?: Maybe<SanityLocaleRichText>;
  mainImage?: Maybe<SanityImage>;
  _rawTitle?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawBody?: Maybe<Scalars['JSON']>;
  _rawMainImage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityEvent_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityEvent_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityEventDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityEvent_RawTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityEvent_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityEvent_RawBodyArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityEvent_RawMainImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityExhibition = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<SanityLocaleString>;
  dateStart?: Maybe<Scalars['Date']>;
  dateEnd?: Maybe<Scalars['Date']>;
  body?: Maybe<SanityLocaleRichText>;
  slug?: Maybe<SanityLocaleSlug>;
  mainImage?: Maybe<SanityCaptionImage>;
  _rawTitle?: Maybe<Scalars['JSON']>;
  _rawBody?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawMainImage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityExhibition_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityExhibition_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityExhibitionDateStartArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityExhibitionDateEndArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityExhibition_RawTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityExhibition_RawBodyArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityExhibition_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityExhibition_RawMainImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFile = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
  _rawAsset?: Maybe<Scalars['JSON']>;
};


export type SanityFile_RawAssetArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFrontPage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<SanityLocaleString>;
  body?: Maybe<SanityLocaleRichText>;
  cta?: Maybe<SanityLocaleString>;
  ctaLink?: Maybe<Scalars['String']>;
  mainImage?: Maybe<SanityCaptionImage>;
  subImage?: Maybe<SanityCaptionImage>;
  _rawTitle?: Maybe<Scalars['JSON']>;
  _rawBody?: Maybe<Scalars['JSON']>;
  _rawCta?: Maybe<Scalars['JSON']>;
  _rawMainImage?: Maybe<Scalars['JSON']>;
  _rawSubImage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityFrontPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFrontPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFrontPage_RawTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFrontPage_RawBodyArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFrontPage_RawCtaArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFrontPage_RawMainImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFrontPage_RawSubImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFrontPageSection = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Float']>;
  title?: Maybe<SanityLocaleString>;
  caption?: Maybe<SanityLocaleString>;
  heading?: Maybe<SanityLocaleString>;
  body?: Maybe<SanityLocaleRichText>;
  cta?: Maybe<SanityLocaleString>;
  ctaLink?: Maybe<Scalars['String']>;
  mainImage?: Maybe<SanityCaptionImage>;
  subImage?: Maybe<SanityCaptionImage>;
  _rawTitle?: Maybe<Scalars['JSON']>;
  _rawCaption?: Maybe<Scalars['JSON']>;
  _rawHeading?: Maybe<Scalars['JSON']>;
  _rawBody?: Maybe<Scalars['JSON']>;
  _rawCta?: Maybe<Scalars['JSON']>;
  _rawMainImage?: Maybe<Scalars['JSON']>;
  _rawSubImage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityFrontPageSection_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFrontPageSection_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFrontPageSection_RawTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFrontPageSection_RawCaptionArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFrontPageSection_RawHeadingArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFrontPageSection_RawBodyArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFrontPageSection_RawCtaArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFrontPageSection_RawMainImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFrontPageSection_RawSubImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityGeopoint = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  alt?: Maybe<Scalars['Float']>;
};

export type SanityImage = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _rawHotspot?: Maybe<Scalars['JSON']>;
  _rawCrop?: Maybe<Scalars['JSON']>;
};


export type SanityImage_RawAssetArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawHotspotArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawCropArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityLocaleRichText = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  en?: Maybe<Array<Maybe<SanityBlock>>>;
  cy?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawEn?: Maybe<Scalars['JSON']>;
  _rawCy?: Maybe<Scalars['JSON']>;
};


export type SanityLocaleRichText_RawEnArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityLocaleRichText_RawCyArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityLocaleSlug = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  en?: Maybe<SanitySlug>;
  cy?: Maybe<SanitySlug>;
  _rawEn?: Maybe<Scalars['JSON']>;
  _rawCy?: Maybe<Scalars['JSON']>;
};


export type SanityLocaleSlug_RawEnArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityLocaleSlug_RawCyArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityLocaleString = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
  cy?: Maybe<Scalars['String']>;
};

export type SanityPage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<SanityLocaleString>;
  body?: Maybe<SanityLocaleRichText>;
  slug?: Maybe<SanityLocaleSlug>;
  mainImage?: Maybe<SanityCaptionImage>;
  _rawTitle?: Maybe<Scalars['JSON']>;
  _rawBody?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawMainImage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPage_RawTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPage_RawBodyArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPage_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPage_RawMainImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPost = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<SanityLocaleString>;
  body?: Maybe<SanityLocaleRichText>;
  categories?: Maybe<Array<Maybe<SanityCategory>>>;
  publishedAt?: Maybe<Scalars['Date']>;
  slug?: Maybe<SanityLocaleSlug>;
  image?: Maybe<SanityImage>;
  _rawTitle?: Maybe<Scalars['JSON']>;
  _rawBody?: Maybe<Scalars['JSON']>;
  _rawCategories?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawImage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPost_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPost_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPostPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPost_RawTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawBodyArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawCategoriesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityAssetSourceData = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityFileAsset = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  source?: Maybe<SanityAssetSourceData>;
  _rawSource?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityFileAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFileAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFileAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  uploadId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  source?: Maybe<SanityAssetSourceData>;
  _rawMetadata?: Maybe<Scalars['JSON']>;
  _rawSource?: Maybe<Scalars['JSON']>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityImageAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityImageAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAssetGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<SanityGatsbyImagePlaceholder>;
  formats?: Maybe<Array<Maybe<GatsbyImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  fit?: Maybe<SanityImageFit>;
};

export type SanityGatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'BLURRED'
  | 'NONE';

export type SanityImageFit =
  | 'CLIP'
  | 'CROP'
  | 'FILL'
  | 'FILLMAX'
  | 'MAX'
  | 'SCALE'
  | 'MIN';

export type SanityImageCrop = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['Float']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensions = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspot = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageMetadata = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  location?: Maybe<SanityGeopoint>;
  dimensions?: Maybe<SanityImageDimensions>;
  palette?: Maybe<SanityImagePalette>;
  lqip?: Maybe<Scalars['String']>;
  blurHash?: Maybe<Scalars['String']>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  _rawLocation?: Maybe<Scalars['JSON']>;
  _rawDimensions?: Maybe<Scalars['JSON']>;
  _rawPalette?: Maybe<Scalars['JSON']>;
};


export type SanityImageMetadata_RawLocationArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawDimensionsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawPaletteArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  _rawDarkMuted?: Maybe<Scalars['JSON']>;
  _rawLightVibrant?: Maybe<Scalars['JSON']>;
  _rawDarkVibrant?: Maybe<Scalars['JSON']>;
  _rawVibrant?: Maybe<Scalars['JSON']>;
  _rawDominant?: Maybe<Scalars['JSON']>;
  _rawLightMuted?: Maybe<Scalars['JSON']>;
  _rawMuted?: Maybe<Scalars['JSON']>;
};


export type SanityImagePalette_RawDarkMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDarkVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDominantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePaletteSwatch = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanitySlug = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SanitySpace = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<SanityLocaleString>;
  body?: Maybe<SanityLocaleRichText>;
  slug?: Maybe<SanityLocaleSlug>;
  mainImage?: Maybe<SanityImage>;
  _rawTitle?: Maybe<Scalars['JSON']>;
  _rawBody?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawMainImage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanitySpace_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanitySpace_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanitySpace_RawTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanitySpace_RawBodyArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanitySpace_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanitySpace_RawMainImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanitySpan = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type SanityVideo = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<SanityLocaleString>;
  body?: Maybe<SanityLocaleRichText>;
  videoLink?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Date']>;
  slug?: Maybe<SanityLocaleSlug>;
  mainImage?: Maybe<SanityImage>;
  _rawTitle?: Maybe<Scalars['JSON']>;
  _rawBody?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawMainImage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityVideo_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityVideo_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityVideoPublishDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityVideo_RawTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityVideo_RawBodyArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityVideo_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityVideo_RawMainImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int'];
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  sanityArtist?: Maybe<SanityArtist>;
  allSanityArtist: SanityArtistConnection;
  sanityArtwork?: Maybe<SanityArtwork>;
  allSanityArtwork: SanityArtworkConnection;
  sanityCategory?: Maybe<SanityCategory>;
  allSanityCategory: SanityCategoryConnection;
  sanityDiscipline?: Maybe<SanityDiscipline>;
  allSanityDiscipline: SanityDisciplineConnection;
  sanityEvent?: Maybe<SanityEvent>;
  allSanityEvent: SanityEventConnection;
  sanityExhibition?: Maybe<SanityExhibition>;
  allSanityExhibition: SanityExhibitionConnection;
  sanityFrontPage?: Maybe<SanityFrontPage>;
  allSanityFrontPage: SanityFrontPageConnection;
  sanityFrontPageSection?: Maybe<SanityFrontPageSection>;
  allSanityFrontPageSection: SanityFrontPageSectionConnection;
  sanityPage?: Maybe<SanityPage>;
  allSanityPage: SanityPageConnection;
  sanityPost?: Maybe<SanityPost>;
  allSanityPost: SanityPostConnection;
  sanityFileAsset?: Maybe<SanityFileAsset>;
  allSanityFileAsset: SanityFileAssetConnection;
  sanityImageAsset?: Maybe<SanityImageAsset>;
  allSanityImageAsset: SanityImageAssetConnection;
  sanitySpace?: Maybe<SanitySpace>;
  allSanitySpace: SanitySpaceConnection;
  sanityVideo?: Maybe<SanityVideo>;
  allSanityVideo: SanityVideoConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  pageContext?: Maybe<JsonQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<JsonQueryOperatorInput>;
  packageJson?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityArtistArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  disciplines?: Maybe<SanityDisciplineFilterListInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  mainImage?: Maybe<SanityCaptionImageFilterInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawDisciplines?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityArtistArgs = {
  filter?: Maybe<SanityArtistFilterInput>;
  sort?: Maybe<SanityArtistSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityArtworkArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  artist?: Maybe<StringQueryOperatorInput>;
  medium?: Maybe<SanityLocaleStringFilterInput>;
  dimensions?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<StringQueryOperatorInput>;
  price?: Maybe<StringQueryOperatorInput>;
  sold?: Maybe<BooleanQueryOperatorInput>;
  exhibition?: Maybe<SanityExhibitionFilterListInput>;
  mainImage?: Maybe<SanityImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawMedium?: Maybe<JsonQueryOperatorInput>;
  _rawExhibition?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityArtworkArgs = {
  filter?: Maybe<SanityArtworkFilterInput>;
  sort?: Maybe<SanityArtworkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityCategoryArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityCategoryArgs = {
  filter?: Maybe<SanityCategoryFilterInput>;
  sort?: Maybe<SanityCategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityDisciplineArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityDisciplineArgs = {
  filter?: Maybe<SanityDisciplineFilterInput>;
  sort?: Maybe<SanityDisciplineSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityEventArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  slug?: Maybe<SanityLocaleSlugFilterInput>;
  date?: Maybe<DateQueryOperatorInput>;
  recurring?: Maybe<BooleanQueryOperatorInput>;
  briteLink?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  mainImage?: Maybe<SanityImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityEventArgs = {
  filter?: Maybe<SanityEventFilterInput>;
  sort?: Maybe<SanityEventSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityExhibitionArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  dateStart?: Maybe<DateQueryOperatorInput>;
  dateEnd?: Maybe<DateQueryOperatorInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  slug?: Maybe<SanityLocaleSlugFilterInput>;
  mainImage?: Maybe<SanityCaptionImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityExhibitionArgs = {
  filter?: Maybe<SanityExhibitionFilterInput>;
  sort?: Maybe<SanityExhibitionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityFrontPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  cta?: Maybe<SanityLocaleStringFilterInput>;
  ctaLink?: Maybe<StringQueryOperatorInput>;
  mainImage?: Maybe<SanityCaptionImageFilterInput>;
  subImage?: Maybe<SanityCaptionImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawCta?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  _rawSubImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityFrontPageArgs = {
  filter?: Maybe<SanityFrontPageFilterInput>;
  sort?: Maybe<SanityFrontPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityFrontPageSectionArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<FloatQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  caption?: Maybe<SanityLocaleStringFilterInput>;
  heading?: Maybe<SanityLocaleStringFilterInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  cta?: Maybe<SanityLocaleStringFilterInput>;
  ctaLink?: Maybe<StringQueryOperatorInput>;
  mainImage?: Maybe<SanityCaptionImageFilterInput>;
  subImage?: Maybe<SanityCaptionImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawCaption?: Maybe<JsonQueryOperatorInput>;
  _rawHeading?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawCta?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  _rawSubImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityFrontPageSectionArgs = {
  filter?: Maybe<SanityFrontPageSectionFilterInput>;
  sort?: Maybe<SanityFrontPageSectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  slug?: Maybe<SanityLocaleSlugFilterInput>;
  mainImage?: Maybe<SanityCaptionImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityPageArgs = {
  filter?: Maybe<SanityPageFilterInput>;
  sort?: Maybe<SanityPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityPostArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  categories?: Maybe<SanityCategoryFilterListInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<SanityLocaleSlugFilterInput>;
  image?: Maybe<SanityImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawCategories?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityPostArgs = {
  filter?: Maybe<SanityPostFilterInput>;
  sort?: Maybe<SanityPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityFileAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  altText?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityFileAssetArgs = {
  filter?: Maybe<SanityFileAssetFilterInput>;
  sort?: Maybe<SanityFileAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityImageAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  altText?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  uploadId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  metadata?: Maybe<SanityImageMetadataFilterInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata?: Maybe<JsonQueryOperatorInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityImageAssetArgs = {
  filter?: Maybe<SanityImageAssetFilterInput>;
  sort?: Maybe<SanityImageAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanitySpaceArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  slug?: Maybe<SanityLocaleSlugFilterInput>;
  mainImage?: Maybe<SanityImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanitySpaceArgs = {
  filter?: Maybe<SanitySpaceFilterInput>;
  sort?: Maybe<SanitySpaceSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityVideoArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  videoLink?: Maybe<StringQueryOperatorInput>;
  publishDate?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<SanityLocaleSlugFilterInput>;
  mainImage?: Maybe<SanityImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityVideoArgs = {
  filter?: Maybe<SanityVideoFilterInput>;
  sort?: Maybe<SanityVideoSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'siteMetadata___keywords'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<JsonQueryOperatorInput>;
  packageJson?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  pageContext?: Maybe<JsonQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityLocaleRichTextFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  en?: Maybe<SanityBlockFilterListInput>;
  cy?: Maybe<SanityBlockFilterListInput>;
  _rawEn?: Maybe<JsonQueryOperatorInput>;
  _rawCy?: Maybe<JsonQueryOperatorInput>;
};

export type SanityBlockFilterListInput = {
  elemMatch?: Maybe<SanityBlockFilterInput>;
};

export type SanityBlockFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<SanitySpanFilterListInput>;
  style?: Maybe<StringQueryOperatorInput>;
  list?: Maybe<StringQueryOperatorInput>;
  _rawChildren?: Maybe<JsonQueryOperatorInput>;
};

export type SanitySpanFilterListInput = {
  elemMatch?: Maybe<SanitySpanFilterInput>;
};

export type SanitySpanFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  marks?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type SanityDisciplineFilterListInput = {
  elemMatch?: Maybe<SanityDisciplineFilterInput>;
};

export type SanityDisciplineFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityLocaleStringFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  en?: Maybe<StringQueryOperatorInput>;
  cy?: Maybe<StringQueryOperatorInput>;
};

export type SanitySlugFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  current?: Maybe<StringQueryOperatorInput>;
};

export type SanityCaptionImageFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  asset?: Maybe<SanityImageAssetFilterInput>;
  hotspot?: Maybe<SanityImageHotspotFilterInput>;
  crop?: Maybe<SanityImageCropFilterInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  Caption?: Maybe<StringQueryOperatorInput>;
  _rawAsset?: Maybe<JsonQueryOperatorInput>;
  _rawHotspot?: Maybe<JsonQueryOperatorInput>;
  _rawCrop?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImageAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  altText?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  uploadId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  metadata?: Maybe<SanityImageMetadataFilterInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata?: Maybe<JsonQueryOperatorInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityImageMetadataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<SanityGeopointFilterInput>;
  dimensions?: Maybe<SanityImageDimensionsFilterInput>;
  palette?: Maybe<SanityImagePaletteFilterInput>;
  lqip?: Maybe<StringQueryOperatorInput>;
  blurHash?: Maybe<StringQueryOperatorInput>;
  hasAlpha?: Maybe<BooleanQueryOperatorInput>;
  isOpaque?: Maybe<BooleanQueryOperatorInput>;
  _rawLocation?: Maybe<JsonQueryOperatorInput>;
  _rawDimensions?: Maybe<JsonQueryOperatorInput>;
  _rawPalette?: Maybe<JsonQueryOperatorInput>;
};

export type SanityGeopointFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  lat?: Maybe<FloatQueryOperatorInput>;
  lng?: Maybe<FloatQueryOperatorInput>;
  alt?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageDimensionsFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImagePaletteFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  darkMuted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  vibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  dominant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  lightMuted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  muted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  _rawDarkMuted?: Maybe<JsonQueryOperatorInput>;
  _rawLightVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawDarkVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawDominant?: Maybe<JsonQueryOperatorInput>;
  _rawLightMuted?: Maybe<JsonQueryOperatorInput>;
  _rawMuted?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImagePaletteSwatchFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<StringQueryOperatorInput>;
  foreground?: Maybe<StringQueryOperatorInput>;
  population?: Maybe<FloatQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SanityAssetSourceDataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type SanityImageHotspotFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  x?: Maybe<FloatQueryOperatorInput>;
  y?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageCropFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  top?: Maybe<FloatQueryOperatorInput>;
  bottom?: Maybe<FloatQueryOperatorInput>;
  left?: Maybe<FloatQueryOperatorInput>;
  right?: Maybe<FloatQueryOperatorInput>;
};

export type SanityArtistConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityArtistEdge>;
  nodes: Array<SanityArtist>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityArtistGroupConnection>;
};


export type SanityArtistConnectionDistinctArgs = {
  field: SanityArtistFieldsEnum;
};


export type SanityArtistConnectionMaxArgs = {
  field: SanityArtistFieldsEnum;
};


export type SanityArtistConnectionMinArgs = {
  field: SanityArtistFieldsEnum;
};


export type SanityArtistConnectionSumArgs = {
  field: SanityArtistFieldsEnum;
};


export type SanityArtistConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityArtistFieldsEnum;
};

export type SanityArtistEdge = {
  next?: Maybe<SanityArtist>;
  node: SanityArtist;
  previous?: Maybe<SanityArtist>;
};

export type SanityArtistFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'body____key'
  | 'body____type'
  | 'body___en'
  | 'body___en____key'
  | 'body___en____type'
  | 'body___en___children'
  | 'body___en___children____key'
  | 'body___en___children____type'
  | 'body___en___children___marks'
  | 'body___en___children___text'
  | 'body___en___style'
  | 'body___en___list'
  | 'body___en____rawChildren'
  | 'body___cy'
  | 'body___cy____key'
  | 'body___cy____type'
  | 'body___cy___children'
  | 'body___cy___children____key'
  | 'body___cy___children____type'
  | 'body___cy___children___marks'
  | 'body___cy___children___text'
  | 'body___cy___style'
  | 'body___cy___list'
  | 'body___cy____rawChildren'
  | 'body____rawEn'
  | 'body____rawCy'
  | 'disciplines'
  | 'disciplines____id'
  | 'disciplines____type'
  | 'disciplines____createdAt'
  | 'disciplines____updatedAt'
  | 'disciplines____rev'
  | 'disciplines____key'
  | 'disciplines___title____key'
  | 'disciplines___title____type'
  | 'disciplines___title___en'
  | 'disciplines___title___cy'
  | 'disciplines____rawTitle'
  | 'disciplines___id'
  | 'disciplines___parent___id'
  | 'disciplines___parent___parent___id'
  | 'disciplines___parent___parent___children'
  | 'disciplines___parent___children'
  | 'disciplines___parent___children___id'
  | 'disciplines___parent___children___children'
  | 'disciplines___parent___internal___content'
  | 'disciplines___parent___internal___contentDigest'
  | 'disciplines___parent___internal___description'
  | 'disciplines___parent___internal___fieldOwners'
  | 'disciplines___parent___internal___ignoreType'
  | 'disciplines___parent___internal___mediaType'
  | 'disciplines___parent___internal___owner'
  | 'disciplines___parent___internal___type'
  | 'disciplines___children'
  | 'disciplines___children___id'
  | 'disciplines___children___parent___id'
  | 'disciplines___children___parent___children'
  | 'disciplines___children___children'
  | 'disciplines___children___children___id'
  | 'disciplines___children___children___children'
  | 'disciplines___children___internal___content'
  | 'disciplines___children___internal___contentDigest'
  | 'disciplines___children___internal___description'
  | 'disciplines___children___internal___fieldOwners'
  | 'disciplines___children___internal___ignoreType'
  | 'disciplines___children___internal___mediaType'
  | 'disciplines___children___internal___owner'
  | 'disciplines___children___internal___type'
  | 'disciplines___internal___content'
  | 'disciplines___internal___contentDigest'
  | 'disciplines___internal___description'
  | 'disciplines___internal___fieldOwners'
  | 'disciplines___internal___ignoreType'
  | 'disciplines___internal___mediaType'
  | 'disciplines___internal___owner'
  | 'disciplines___internal___type'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | 'mainImage____key'
  | 'mainImage____type'
  | 'mainImage___asset____id'
  | 'mainImage___asset____type'
  | 'mainImage___asset____createdAt'
  | 'mainImage___asset____updatedAt'
  | 'mainImage___asset____rev'
  | 'mainImage___asset____key'
  | 'mainImage___asset___originalFilename'
  | 'mainImage___asset___label'
  | 'mainImage___asset___title'
  | 'mainImage___asset___description'
  | 'mainImage___asset___altText'
  | 'mainImage___asset___sha1hash'
  | 'mainImage___asset___extension'
  | 'mainImage___asset___mimeType'
  | 'mainImage___asset___size'
  | 'mainImage___asset___assetId'
  | 'mainImage___asset___uploadId'
  | 'mainImage___asset___path'
  | 'mainImage___asset___url'
  | 'mainImage___asset___metadata____key'
  | 'mainImage___asset___metadata____type'
  | 'mainImage___asset___metadata___lqip'
  | 'mainImage___asset___metadata___blurHash'
  | 'mainImage___asset___metadata___hasAlpha'
  | 'mainImage___asset___metadata___isOpaque'
  | 'mainImage___asset___metadata____rawLocation'
  | 'mainImage___asset___metadata____rawDimensions'
  | 'mainImage___asset___metadata____rawPalette'
  | 'mainImage___asset___source____key'
  | 'mainImage___asset___source____type'
  | 'mainImage___asset___source___name'
  | 'mainImage___asset___source___id'
  | 'mainImage___asset___source___url'
  | 'mainImage___asset____rawMetadata'
  | 'mainImage___asset____rawSource'
  | 'mainImage___asset___gatsbyImageData'
  | 'mainImage___asset___id'
  | 'mainImage___asset___parent___id'
  | 'mainImage___asset___parent___children'
  | 'mainImage___asset___children'
  | 'mainImage___asset___children___id'
  | 'mainImage___asset___children___children'
  | 'mainImage___asset___internal___content'
  | 'mainImage___asset___internal___contentDigest'
  | 'mainImage___asset___internal___description'
  | 'mainImage___asset___internal___fieldOwners'
  | 'mainImage___asset___internal___ignoreType'
  | 'mainImage___asset___internal___mediaType'
  | 'mainImage___asset___internal___owner'
  | 'mainImage___asset___internal___type'
  | 'mainImage___hotspot____key'
  | 'mainImage___hotspot____type'
  | 'mainImage___hotspot___x'
  | 'mainImage___hotspot___y'
  | 'mainImage___hotspot___height'
  | 'mainImage___hotspot___width'
  | 'mainImage___crop____key'
  | 'mainImage___crop____type'
  | 'mainImage___crop___top'
  | 'mainImage___crop___bottom'
  | 'mainImage___crop___left'
  | 'mainImage___crop___right'
  | 'mainImage___caption'
  | 'mainImage___Caption'
  | 'mainImage____rawAsset'
  | 'mainImage____rawHotspot'
  | 'mainImage____rawCrop'
  | '_rawBody'
  | '_rawDisciplines'
  | '_rawSlug'
  | '_rawMainImage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityArtistGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityArtistEdge>;
  nodes: Array<SanityArtist>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityArtistGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityArtistGroupConnectionDistinctArgs = {
  field: SanityArtistFieldsEnum;
};


export type SanityArtistGroupConnectionMaxArgs = {
  field: SanityArtistFieldsEnum;
};


export type SanityArtistGroupConnectionMinArgs = {
  field: SanityArtistFieldsEnum;
};


export type SanityArtistGroupConnectionSumArgs = {
  field: SanityArtistFieldsEnum;
};


export type SanityArtistGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityArtistFieldsEnum;
};

export type SanityArtistFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  disciplines?: Maybe<SanityDisciplineFilterListInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  mainImage?: Maybe<SanityCaptionImageFilterInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawDisciplines?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityArtistSortInput = {
  fields?: Maybe<Array<Maybe<SanityArtistFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityExhibitionFilterListInput = {
  elemMatch?: Maybe<SanityExhibitionFilterInput>;
};

export type SanityExhibitionFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  dateStart?: Maybe<DateQueryOperatorInput>;
  dateEnd?: Maybe<DateQueryOperatorInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  slug?: Maybe<SanityLocaleSlugFilterInput>;
  mainImage?: Maybe<SanityCaptionImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityLocaleSlugFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  en?: Maybe<SanitySlugFilterInput>;
  cy?: Maybe<SanitySlugFilterInput>;
  _rawEn?: Maybe<JsonQueryOperatorInput>;
  _rawCy?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImageFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  asset?: Maybe<SanityImageAssetFilterInput>;
  hotspot?: Maybe<SanityImageHotspotFilterInput>;
  crop?: Maybe<SanityImageCropFilterInput>;
  _rawAsset?: Maybe<JsonQueryOperatorInput>;
  _rawHotspot?: Maybe<JsonQueryOperatorInput>;
  _rawCrop?: Maybe<JsonQueryOperatorInput>;
};

export type SanityArtworkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityArtworkEdge>;
  nodes: Array<SanityArtwork>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityArtworkGroupConnection>;
};


export type SanityArtworkConnectionDistinctArgs = {
  field: SanityArtworkFieldsEnum;
};


export type SanityArtworkConnectionMaxArgs = {
  field: SanityArtworkFieldsEnum;
};


export type SanityArtworkConnectionMinArgs = {
  field: SanityArtworkFieldsEnum;
};


export type SanityArtworkConnectionSumArgs = {
  field: SanityArtworkFieldsEnum;
};


export type SanityArtworkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityArtworkFieldsEnum;
};

export type SanityArtworkEdge = {
  next?: Maybe<SanityArtwork>;
  node: SanityArtwork;
  previous?: Maybe<SanityArtwork>;
};

export type SanityArtworkFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title____key'
  | 'title____type'
  | 'title___en'
  | 'title___cy'
  | 'artist'
  | 'medium____key'
  | 'medium____type'
  | 'medium___en'
  | 'medium___cy'
  | 'dimensions'
  | 'date'
  | 'price'
  | 'sold'
  | 'exhibition'
  | 'exhibition____id'
  | 'exhibition____type'
  | 'exhibition____createdAt'
  | 'exhibition____updatedAt'
  | 'exhibition____rev'
  | 'exhibition____key'
  | 'exhibition___title____key'
  | 'exhibition___title____type'
  | 'exhibition___title___en'
  | 'exhibition___title___cy'
  | 'exhibition___dateStart'
  | 'exhibition___dateEnd'
  | 'exhibition___body____key'
  | 'exhibition___body____type'
  | 'exhibition___body___en'
  | 'exhibition___body___en____key'
  | 'exhibition___body___en____type'
  | 'exhibition___body___en___children'
  | 'exhibition___body___en___style'
  | 'exhibition___body___en___list'
  | 'exhibition___body___en____rawChildren'
  | 'exhibition___body___cy'
  | 'exhibition___body___cy____key'
  | 'exhibition___body___cy____type'
  | 'exhibition___body___cy___children'
  | 'exhibition___body___cy___style'
  | 'exhibition___body___cy___list'
  | 'exhibition___body___cy____rawChildren'
  | 'exhibition___body____rawEn'
  | 'exhibition___body____rawCy'
  | 'exhibition___slug____key'
  | 'exhibition___slug____type'
  | 'exhibition___slug___en____key'
  | 'exhibition___slug___en____type'
  | 'exhibition___slug___en___current'
  | 'exhibition___slug___cy____key'
  | 'exhibition___slug___cy____type'
  | 'exhibition___slug___cy___current'
  | 'exhibition___slug____rawEn'
  | 'exhibition___slug____rawCy'
  | 'exhibition___mainImage____key'
  | 'exhibition___mainImage____type'
  | 'exhibition___mainImage___asset____id'
  | 'exhibition___mainImage___asset____type'
  | 'exhibition___mainImage___asset____createdAt'
  | 'exhibition___mainImage___asset____updatedAt'
  | 'exhibition___mainImage___asset____rev'
  | 'exhibition___mainImage___asset____key'
  | 'exhibition___mainImage___asset___originalFilename'
  | 'exhibition___mainImage___asset___label'
  | 'exhibition___mainImage___asset___title'
  | 'exhibition___mainImage___asset___description'
  | 'exhibition___mainImage___asset___altText'
  | 'exhibition___mainImage___asset___sha1hash'
  | 'exhibition___mainImage___asset___extension'
  | 'exhibition___mainImage___asset___mimeType'
  | 'exhibition___mainImage___asset___size'
  | 'exhibition___mainImage___asset___assetId'
  | 'exhibition___mainImage___asset___uploadId'
  | 'exhibition___mainImage___asset___path'
  | 'exhibition___mainImage___asset___url'
  | 'exhibition___mainImage___asset____rawMetadata'
  | 'exhibition___mainImage___asset____rawSource'
  | 'exhibition___mainImage___asset___gatsbyImageData'
  | 'exhibition___mainImage___asset___id'
  | 'exhibition___mainImage___asset___children'
  | 'exhibition___mainImage___hotspot____key'
  | 'exhibition___mainImage___hotspot____type'
  | 'exhibition___mainImage___hotspot___x'
  | 'exhibition___mainImage___hotspot___y'
  | 'exhibition___mainImage___hotspot___height'
  | 'exhibition___mainImage___hotspot___width'
  | 'exhibition___mainImage___crop____key'
  | 'exhibition___mainImage___crop____type'
  | 'exhibition___mainImage___crop___top'
  | 'exhibition___mainImage___crop___bottom'
  | 'exhibition___mainImage___crop___left'
  | 'exhibition___mainImage___crop___right'
  | 'exhibition___mainImage___caption'
  | 'exhibition___mainImage___Caption'
  | 'exhibition___mainImage____rawAsset'
  | 'exhibition___mainImage____rawHotspot'
  | 'exhibition___mainImage____rawCrop'
  | 'exhibition____rawTitle'
  | 'exhibition____rawBody'
  | 'exhibition____rawSlug'
  | 'exhibition____rawMainImage'
  | 'exhibition___id'
  | 'exhibition___parent___id'
  | 'exhibition___parent___parent___id'
  | 'exhibition___parent___parent___children'
  | 'exhibition___parent___children'
  | 'exhibition___parent___children___id'
  | 'exhibition___parent___children___children'
  | 'exhibition___parent___internal___content'
  | 'exhibition___parent___internal___contentDigest'
  | 'exhibition___parent___internal___description'
  | 'exhibition___parent___internal___fieldOwners'
  | 'exhibition___parent___internal___ignoreType'
  | 'exhibition___parent___internal___mediaType'
  | 'exhibition___parent___internal___owner'
  | 'exhibition___parent___internal___type'
  | 'exhibition___children'
  | 'exhibition___children___id'
  | 'exhibition___children___parent___id'
  | 'exhibition___children___parent___children'
  | 'exhibition___children___children'
  | 'exhibition___children___children___id'
  | 'exhibition___children___children___children'
  | 'exhibition___children___internal___content'
  | 'exhibition___children___internal___contentDigest'
  | 'exhibition___children___internal___description'
  | 'exhibition___children___internal___fieldOwners'
  | 'exhibition___children___internal___ignoreType'
  | 'exhibition___children___internal___mediaType'
  | 'exhibition___children___internal___owner'
  | 'exhibition___children___internal___type'
  | 'exhibition___internal___content'
  | 'exhibition___internal___contentDigest'
  | 'exhibition___internal___description'
  | 'exhibition___internal___fieldOwners'
  | 'exhibition___internal___ignoreType'
  | 'exhibition___internal___mediaType'
  | 'exhibition___internal___owner'
  | 'exhibition___internal___type'
  | 'mainImage____key'
  | 'mainImage____type'
  | 'mainImage___asset____id'
  | 'mainImage___asset____type'
  | 'mainImage___asset____createdAt'
  | 'mainImage___asset____updatedAt'
  | 'mainImage___asset____rev'
  | 'mainImage___asset____key'
  | 'mainImage___asset___originalFilename'
  | 'mainImage___asset___label'
  | 'mainImage___asset___title'
  | 'mainImage___asset___description'
  | 'mainImage___asset___altText'
  | 'mainImage___asset___sha1hash'
  | 'mainImage___asset___extension'
  | 'mainImage___asset___mimeType'
  | 'mainImage___asset___size'
  | 'mainImage___asset___assetId'
  | 'mainImage___asset___uploadId'
  | 'mainImage___asset___path'
  | 'mainImage___asset___url'
  | 'mainImage___asset___metadata____key'
  | 'mainImage___asset___metadata____type'
  | 'mainImage___asset___metadata___lqip'
  | 'mainImage___asset___metadata___blurHash'
  | 'mainImage___asset___metadata___hasAlpha'
  | 'mainImage___asset___metadata___isOpaque'
  | 'mainImage___asset___metadata____rawLocation'
  | 'mainImage___asset___metadata____rawDimensions'
  | 'mainImage___asset___metadata____rawPalette'
  | 'mainImage___asset___source____key'
  | 'mainImage___asset___source____type'
  | 'mainImage___asset___source___name'
  | 'mainImage___asset___source___id'
  | 'mainImage___asset___source___url'
  | 'mainImage___asset____rawMetadata'
  | 'mainImage___asset____rawSource'
  | 'mainImage___asset___gatsbyImageData'
  | 'mainImage___asset___id'
  | 'mainImage___asset___parent___id'
  | 'mainImage___asset___parent___children'
  | 'mainImage___asset___children'
  | 'mainImage___asset___children___id'
  | 'mainImage___asset___children___children'
  | 'mainImage___asset___internal___content'
  | 'mainImage___asset___internal___contentDigest'
  | 'mainImage___asset___internal___description'
  | 'mainImage___asset___internal___fieldOwners'
  | 'mainImage___asset___internal___ignoreType'
  | 'mainImage___asset___internal___mediaType'
  | 'mainImage___asset___internal___owner'
  | 'mainImage___asset___internal___type'
  | 'mainImage___hotspot____key'
  | 'mainImage___hotspot____type'
  | 'mainImage___hotspot___x'
  | 'mainImage___hotspot___y'
  | 'mainImage___hotspot___height'
  | 'mainImage___hotspot___width'
  | 'mainImage___crop____key'
  | 'mainImage___crop____type'
  | 'mainImage___crop___top'
  | 'mainImage___crop___bottom'
  | 'mainImage___crop___left'
  | 'mainImage___crop___right'
  | 'mainImage____rawAsset'
  | 'mainImage____rawHotspot'
  | 'mainImage____rawCrop'
  | '_rawTitle'
  | '_rawMedium'
  | '_rawExhibition'
  | '_rawMainImage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityArtworkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityArtworkEdge>;
  nodes: Array<SanityArtwork>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityArtworkGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityArtworkGroupConnectionDistinctArgs = {
  field: SanityArtworkFieldsEnum;
};


export type SanityArtworkGroupConnectionMaxArgs = {
  field: SanityArtworkFieldsEnum;
};


export type SanityArtworkGroupConnectionMinArgs = {
  field: SanityArtworkFieldsEnum;
};


export type SanityArtworkGroupConnectionSumArgs = {
  field: SanityArtworkFieldsEnum;
};


export type SanityArtworkGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityArtworkFieldsEnum;
};

export type SanityArtworkFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  artist?: Maybe<StringQueryOperatorInput>;
  medium?: Maybe<SanityLocaleStringFilterInput>;
  dimensions?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<StringQueryOperatorInput>;
  price?: Maybe<StringQueryOperatorInput>;
  sold?: Maybe<BooleanQueryOperatorInput>;
  exhibition?: Maybe<SanityExhibitionFilterListInput>;
  mainImage?: Maybe<SanityImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawMedium?: Maybe<JsonQueryOperatorInput>;
  _rawExhibition?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityArtworkSortInput = {
  fields?: Maybe<Array<Maybe<SanityArtworkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityCategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityCategoryEdge>;
  nodes: Array<SanityCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityCategoryGroupConnection>;
};


export type SanityCategoryConnectionDistinctArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryConnectionMaxArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryConnectionMinArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryConnectionSumArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityCategoryFieldsEnum;
};

export type SanityCategoryEdge = {
  next?: Maybe<SanityCategory>;
  node: SanityCategory;
  previous?: Maybe<SanityCategory>;
};

export type SanityCategoryFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title____key'
  | 'title____type'
  | 'title___en'
  | 'title___cy'
  | '_rawTitle'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityCategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityCategoryEdge>;
  nodes: Array<SanityCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityCategoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityCategoryGroupConnectionDistinctArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryGroupConnectionMaxArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryGroupConnectionMinArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryGroupConnectionSumArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityCategoryFieldsEnum;
};

export type SanityCategoryFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityCategorySortInput = {
  fields?: Maybe<Array<Maybe<SanityCategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityDisciplineConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityDisciplineEdge>;
  nodes: Array<SanityDiscipline>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityDisciplineGroupConnection>;
};


export type SanityDisciplineConnectionDistinctArgs = {
  field: SanityDisciplineFieldsEnum;
};


export type SanityDisciplineConnectionMaxArgs = {
  field: SanityDisciplineFieldsEnum;
};


export type SanityDisciplineConnectionMinArgs = {
  field: SanityDisciplineFieldsEnum;
};


export type SanityDisciplineConnectionSumArgs = {
  field: SanityDisciplineFieldsEnum;
};


export type SanityDisciplineConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityDisciplineFieldsEnum;
};

export type SanityDisciplineEdge = {
  next?: Maybe<SanityDiscipline>;
  node: SanityDiscipline;
  previous?: Maybe<SanityDiscipline>;
};

export type SanityDisciplineFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title____key'
  | 'title____type'
  | 'title___en'
  | 'title___cy'
  | '_rawTitle'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityDisciplineGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityDisciplineEdge>;
  nodes: Array<SanityDiscipline>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityDisciplineGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityDisciplineGroupConnectionDistinctArgs = {
  field: SanityDisciplineFieldsEnum;
};


export type SanityDisciplineGroupConnectionMaxArgs = {
  field: SanityDisciplineFieldsEnum;
};


export type SanityDisciplineGroupConnectionMinArgs = {
  field: SanityDisciplineFieldsEnum;
};


export type SanityDisciplineGroupConnectionSumArgs = {
  field: SanityDisciplineFieldsEnum;
};


export type SanityDisciplineGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityDisciplineFieldsEnum;
};

export type SanityDisciplineSortInput = {
  fields?: Maybe<Array<Maybe<SanityDisciplineFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityEventConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityEventEdge>;
  nodes: Array<SanityEvent>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityEventGroupConnection>;
};


export type SanityEventConnectionDistinctArgs = {
  field: SanityEventFieldsEnum;
};


export type SanityEventConnectionMaxArgs = {
  field: SanityEventFieldsEnum;
};


export type SanityEventConnectionMinArgs = {
  field: SanityEventFieldsEnum;
};


export type SanityEventConnectionSumArgs = {
  field: SanityEventFieldsEnum;
};


export type SanityEventConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityEventFieldsEnum;
};

export type SanityEventEdge = {
  next?: Maybe<SanityEvent>;
  node: SanityEvent;
  previous?: Maybe<SanityEvent>;
};

export type SanityEventFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title____key'
  | 'title____type'
  | 'title___en'
  | 'title___cy'
  | 'slug____key'
  | 'slug____type'
  | 'slug___en____key'
  | 'slug___en____type'
  | 'slug___en___current'
  | 'slug___cy____key'
  | 'slug___cy____type'
  | 'slug___cy___current'
  | 'slug____rawEn'
  | 'slug____rawCy'
  | 'date'
  | 'recurring'
  | 'briteLink'
  | 'body____key'
  | 'body____type'
  | 'body___en'
  | 'body___en____key'
  | 'body___en____type'
  | 'body___en___children'
  | 'body___en___children____key'
  | 'body___en___children____type'
  | 'body___en___children___marks'
  | 'body___en___children___text'
  | 'body___en___style'
  | 'body___en___list'
  | 'body___en____rawChildren'
  | 'body___cy'
  | 'body___cy____key'
  | 'body___cy____type'
  | 'body___cy___children'
  | 'body___cy___children____key'
  | 'body___cy___children____type'
  | 'body___cy___children___marks'
  | 'body___cy___children___text'
  | 'body___cy___style'
  | 'body___cy___list'
  | 'body___cy____rawChildren'
  | 'body____rawEn'
  | 'body____rawCy'
  | 'mainImage____key'
  | 'mainImage____type'
  | 'mainImage___asset____id'
  | 'mainImage___asset____type'
  | 'mainImage___asset____createdAt'
  | 'mainImage___asset____updatedAt'
  | 'mainImage___asset____rev'
  | 'mainImage___asset____key'
  | 'mainImage___asset___originalFilename'
  | 'mainImage___asset___label'
  | 'mainImage___asset___title'
  | 'mainImage___asset___description'
  | 'mainImage___asset___altText'
  | 'mainImage___asset___sha1hash'
  | 'mainImage___asset___extension'
  | 'mainImage___asset___mimeType'
  | 'mainImage___asset___size'
  | 'mainImage___asset___assetId'
  | 'mainImage___asset___uploadId'
  | 'mainImage___asset___path'
  | 'mainImage___asset___url'
  | 'mainImage___asset___metadata____key'
  | 'mainImage___asset___metadata____type'
  | 'mainImage___asset___metadata___lqip'
  | 'mainImage___asset___metadata___blurHash'
  | 'mainImage___asset___metadata___hasAlpha'
  | 'mainImage___asset___metadata___isOpaque'
  | 'mainImage___asset___metadata____rawLocation'
  | 'mainImage___asset___metadata____rawDimensions'
  | 'mainImage___asset___metadata____rawPalette'
  | 'mainImage___asset___source____key'
  | 'mainImage___asset___source____type'
  | 'mainImage___asset___source___name'
  | 'mainImage___asset___source___id'
  | 'mainImage___asset___source___url'
  | 'mainImage___asset____rawMetadata'
  | 'mainImage___asset____rawSource'
  | 'mainImage___asset___gatsbyImageData'
  | 'mainImage___asset___id'
  | 'mainImage___asset___parent___id'
  | 'mainImage___asset___parent___children'
  | 'mainImage___asset___children'
  | 'mainImage___asset___children___id'
  | 'mainImage___asset___children___children'
  | 'mainImage___asset___internal___content'
  | 'mainImage___asset___internal___contentDigest'
  | 'mainImage___asset___internal___description'
  | 'mainImage___asset___internal___fieldOwners'
  | 'mainImage___asset___internal___ignoreType'
  | 'mainImage___asset___internal___mediaType'
  | 'mainImage___asset___internal___owner'
  | 'mainImage___asset___internal___type'
  | 'mainImage___hotspot____key'
  | 'mainImage___hotspot____type'
  | 'mainImage___hotspot___x'
  | 'mainImage___hotspot___y'
  | 'mainImage___hotspot___height'
  | 'mainImage___hotspot___width'
  | 'mainImage___crop____key'
  | 'mainImage___crop____type'
  | 'mainImage___crop___top'
  | 'mainImage___crop___bottom'
  | 'mainImage___crop___left'
  | 'mainImage___crop___right'
  | 'mainImage____rawAsset'
  | 'mainImage____rawHotspot'
  | 'mainImage____rawCrop'
  | '_rawTitle'
  | '_rawSlug'
  | '_rawBody'
  | '_rawMainImage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityEventGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityEventEdge>;
  nodes: Array<SanityEvent>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityEventGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityEventGroupConnectionDistinctArgs = {
  field: SanityEventFieldsEnum;
};


export type SanityEventGroupConnectionMaxArgs = {
  field: SanityEventFieldsEnum;
};


export type SanityEventGroupConnectionMinArgs = {
  field: SanityEventFieldsEnum;
};


export type SanityEventGroupConnectionSumArgs = {
  field: SanityEventFieldsEnum;
};


export type SanityEventGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityEventFieldsEnum;
};

export type SanityEventFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  slug?: Maybe<SanityLocaleSlugFilterInput>;
  date?: Maybe<DateQueryOperatorInput>;
  recurring?: Maybe<BooleanQueryOperatorInput>;
  briteLink?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  mainImage?: Maybe<SanityImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityEventSortInput = {
  fields?: Maybe<Array<Maybe<SanityEventFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityExhibitionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityExhibitionEdge>;
  nodes: Array<SanityExhibition>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityExhibitionGroupConnection>;
};


export type SanityExhibitionConnectionDistinctArgs = {
  field: SanityExhibitionFieldsEnum;
};


export type SanityExhibitionConnectionMaxArgs = {
  field: SanityExhibitionFieldsEnum;
};


export type SanityExhibitionConnectionMinArgs = {
  field: SanityExhibitionFieldsEnum;
};


export type SanityExhibitionConnectionSumArgs = {
  field: SanityExhibitionFieldsEnum;
};


export type SanityExhibitionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityExhibitionFieldsEnum;
};

export type SanityExhibitionEdge = {
  next?: Maybe<SanityExhibition>;
  node: SanityExhibition;
  previous?: Maybe<SanityExhibition>;
};

export type SanityExhibitionFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title____key'
  | 'title____type'
  | 'title___en'
  | 'title___cy'
  | 'dateStart'
  | 'dateEnd'
  | 'body____key'
  | 'body____type'
  | 'body___en'
  | 'body___en____key'
  | 'body___en____type'
  | 'body___en___children'
  | 'body___en___children____key'
  | 'body___en___children____type'
  | 'body___en___children___marks'
  | 'body___en___children___text'
  | 'body___en___style'
  | 'body___en___list'
  | 'body___en____rawChildren'
  | 'body___cy'
  | 'body___cy____key'
  | 'body___cy____type'
  | 'body___cy___children'
  | 'body___cy___children____key'
  | 'body___cy___children____type'
  | 'body___cy___children___marks'
  | 'body___cy___children___text'
  | 'body___cy___style'
  | 'body___cy___list'
  | 'body___cy____rawChildren'
  | 'body____rawEn'
  | 'body____rawCy'
  | 'slug____key'
  | 'slug____type'
  | 'slug___en____key'
  | 'slug___en____type'
  | 'slug___en___current'
  | 'slug___cy____key'
  | 'slug___cy____type'
  | 'slug___cy___current'
  | 'slug____rawEn'
  | 'slug____rawCy'
  | 'mainImage____key'
  | 'mainImage____type'
  | 'mainImage___asset____id'
  | 'mainImage___asset____type'
  | 'mainImage___asset____createdAt'
  | 'mainImage___asset____updatedAt'
  | 'mainImage___asset____rev'
  | 'mainImage___asset____key'
  | 'mainImage___asset___originalFilename'
  | 'mainImage___asset___label'
  | 'mainImage___asset___title'
  | 'mainImage___asset___description'
  | 'mainImage___asset___altText'
  | 'mainImage___asset___sha1hash'
  | 'mainImage___asset___extension'
  | 'mainImage___asset___mimeType'
  | 'mainImage___asset___size'
  | 'mainImage___asset___assetId'
  | 'mainImage___asset___uploadId'
  | 'mainImage___asset___path'
  | 'mainImage___asset___url'
  | 'mainImage___asset___metadata____key'
  | 'mainImage___asset___metadata____type'
  | 'mainImage___asset___metadata___lqip'
  | 'mainImage___asset___metadata___blurHash'
  | 'mainImage___asset___metadata___hasAlpha'
  | 'mainImage___asset___metadata___isOpaque'
  | 'mainImage___asset___metadata____rawLocation'
  | 'mainImage___asset___metadata____rawDimensions'
  | 'mainImage___asset___metadata____rawPalette'
  | 'mainImage___asset___source____key'
  | 'mainImage___asset___source____type'
  | 'mainImage___asset___source___name'
  | 'mainImage___asset___source___id'
  | 'mainImage___asset___source___url'
  | 'mainImage___asset____rawMetadata'
  | 'mainImage___asset____rawSource'
  | 'mainImage___asset___gatsbyImageData'
  | 'mainImage___asset___id'
  | 'mainImage___asset___parent___id'
  | 'mainImage___asset___parent___children'
  | 'mainImage___asset___children'
  | 'mainImage___asset___children___id'
  | 'mainImage___asset___children___children'
  | 'mainImage___asset___internal___content'
  | 'mainImage___asset___internal___contentDigest'
  | 'mainImage___asset___internal___description'
  | 'mainImage___asset___internal___fieldOwners'
  | 'mainImage___asset___internal___ignoreType'
  | 'mainImage___asset___internal___mediaType'
  | 'mainImage___asset___internal___owner'
  | 'mainImage___asset___internal___type'
  | 'mainImage___hotspot____key'
  | 'mainImage___hotspot____type'
  | 'mainImage___hotspot___x'
  | 'mainImage___hotspot___y'
  | 'mainImage___hotspot___height'
  | 'mainImage___hotspot___width'
  | 'mainImage___crop____key'
  | 'mainImage___crop____type'
  | 'mainImage___crop___top'
  | 'mainImage___crop___bottom'
  | 'mainImage___crop___left'
  | 'mainImage___crop___right'
  | 'mainImage___caption'
  | 'mainImage___Caption'
  | 'mainImage____rawAsset'
  | 'mainImage____rawHotspot'
  | 'mainImage____rawCrop'
  | '_rawTitle'
  | '_rawBody'
  | '_rawSlug'
  | '_rawMainImage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityExhibitionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityExhibitionEdge>;
  nodes: Array<SanityExhibition>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityExhibitionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityExhibitionGroupConnectionDistinctArgs = {
  field: SanityExhibitionFieldsEnum;
};


export type SanityExhibitionGroupConnectionMaxArgs = {
  field: SanityExhibitionFieldsEnum;
};


export type SanityExhibitionGroupConnectionMinArgs = {
  field: SanityExhibitionFieldsEnum;
};


export type SanityExhibitionGroupConnectionSumArgs = {
  field: SanityExhibitionFieldsEnum;
};


export type SanityExhibitionGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityExhibitionFieldsEnum;
};

export type SanityExhibitionSortInput = {
  fields?: Maybe<Array<Maybe<SanityExhibitionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityFrontPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFrontPageEdge>;
  nodes: Array<SanityFrontPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityFrontPageGroupConnection>;
};


export type SanityFrontPageConnectionDistinctArgs = {
  field: SanityFrontPageFieldsEnum;
};


export type SanityFrontPageConnectionMaxArgs = {
  field: SanityFrontPageFieldsEnum;
};


export type SanityFrontPageConnectionMinArgs = {
  field: SanityFrontPageFieldsEnum;
};


export type SanityFrontPageConnectionSumArgs = {
  field: SanityFrontPageFieldsEnum;
};


export type SanityFrontPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityFrontPageFieldsEnum;
};

export type SanityFrontPageEdge = {
  next?: Maybe<SanityFrontPage>;
  node: SanityFrontPage;
  previous?: Maybe<SanityFrontPage>;
};

export type SanityFrontPageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title____key'
  | 'title____type'
  | 'title___en'
  | 'title___cy'
  | 'body____key'
  | 'body____type'
  | 'body___en'
  | 'body___en____key'
  | 'body___en____type'
  | 'body___en___children'
  | 'body___en___children____key'
  | 'body___en___children____type'
  | 'body___en___children___marks'
  | 'body___en___children___text'
  | 'body___en___style'
  | 'body___en___list'
  | 'body___en____rawChildren'
  | 'body___cy'
  | 'body___cy____key'
  | 'body___cy____type'
  | 'body___cy___children'
  | 'body___cy___children____key'
  | 'body___cy___children____type'
  | 'body___cy___children___marks'
  | 'body___cy___children___text'
  | 'body___cy___style'
  | 'body___cy___list'
  | 'body___cy____rawChildren'
  | 'body____rawEn'
  | 'body____rawCy'
  | 'cta____key'
  | 'cta____type'
  | 'cta___en'
  | 'cta___cy'
  | 'ctaLink'
  | 'mainImage____key'
  | 'mainImage____type'
  | 'mainImage___asset____id'
  | 'mainImage___asset____type'
  | 'mainImage___asset____createdAt'
  | 'mainImage___asset____updatedAt'
  | 'mainImage___asset____rev'
  | 'mainImage___asset____key'
  | 'mainImage___asset___originalFilename'
  | 'mainImage___asset___label'
  | 'mainImage___asset___title'
  | 'mainImage___asset___description'
  | 'mainImage___asset___altText'
  | 'mainImage___asset___sha1hash'
  | 'mainImage___asset___extension'
  | 'mainImage___asset___mimeType'
  | 'mainImage___asset___size'
  | 'mainImage___asset___assetId'
  | 'mainImage___asset___uploadId'
  | 'mainImage___asset___path'
  | 'mainImage___asset___url'
  | 'mainImage___asset___metadata____key'
  | 'mainImage___asset___metadata____type'
  | 'mainImage___asset___metadata___lqip'
  | 'mainImage___asset___metadata___blurHash'
  | 'mainImage___asset___metadata___hasAlpha'
  | 'mainImage___asset___metadata___isOpaque'
  | 'mainImage___asset___metadata____rawLocation'
  | 'mainImage___asset___metadata____rawDimensions'
  | 'mainImage___asset___metadata____rawPalette'
  | 'mainImage___asset___source____key'
  | 'mainImage___asset___source____type'
  | 'mainImage___asset___source___name'
  | 'mainImage___asset___source___id'
  | 'mainImage___asset___source___url'
  | 'mainImage___asset____rawMetadata'
  | 'mainImage___asset____rawSource'
  | 'mainImage___asset___gatsbyImageData'
  | 'mainImage___asset___id'
  | 'mainImage___asset___parent___id'
  | 'mainImage___asset___parent___children'
  | 'mainImage___asset___children'
  | 'mainImage___asset___children___id'
  | 'mainImage___asset___children___children'
  | 'mainImage___asset___internal___content'
  | 'mainImage___asset___internal___contentDigest'
  | 'mainImage___asset___internal___description'
  | 'mainImage___asset___internal___fieldOwners'
  | 'mainImage___asset___internal___ignoreType'
  | 'mainImage___asset___internal___mediaType'
  | 'mainImage___asset___internal___owner'
  | 'mainImage___asset___internal___type'
  | 'mainImage___hotspot____key'
  | 'mainImage___hotspot____type'
  | 'mainImage___hotspot___x'
  | 'mainImage___hotspot___y'
  | 'mainImage___hotspot___height'
  | 'mainImage___hotspot___width'
  | 'mainImage___crop____key'
  | 'mainImage___crop____type'
  | 'mainImage___crop___top'
  | 'mainImage___crop___bottom'
  | 'mainImage___crop___left'
  | 'mainImage___crop___right'
  | 'mainImage___caption'
  | 'mainImage___Caption'
  | 'mainImage____rawAsset'
  | 'mainImage____rawHotspot'
  | 'mainImage____rawCrop'
  | 'subImage____key'
  | 'subImage____type'
  | 'subImage___asset____id'
  | 'subImage___asset____type'
  | 'subImage___asset____createdAt'
  | 'subImage___asset____updatedAt'
  | 'subImage___asset____rev'
  | 'subImage___asset____key'
  | 'subImage___asset___originalFilename'
  | 'subImage___asset___label'
  | 'subImage___asset___title'
  | 'subImage___asset___description'
  | 'subImage___asset___altText'
  | 'subImage___asset___sha1hash'
  | 'subImage___asset___extension'
  | 'subImage___asset___mimeType'
  | 'subImage___asset___size'
  | 'subImage___asset___assetId'
  | 'subImage___asset___uploadId'
  | 'subImage___asset___path'
  | 'subImage___asset___url'
  | 'subImage___asset___metadata____key'
  | 'subImage___asset___metadata____type'
  | 'subImage___asset___metadata___lqip'
  | 'subImage___asset___metadata___blurHash'
  | 'subImage___asset___metadata___hasAlpha'
  | 'subImage___asset___metadata___isOpaque'
  | 'subImage___asset___metadata____rawLocation'
  | 'subImage___asset___metadata____rawDimensions'
  | 'subImage___asset___metadata____rawPalette'
  | 'subImage___asset___source____key'
  | 'subImage___asset___source____type'
  | 'subImage___asset___source___name'
  | 'subImage___asset___source___id'
  | 'subImage___asset___source___url'
  | 'subImage___asset____rawMetadata'
  | 'subImage___asset____rawSource'
  | 'subImage___asset___gatsbyImageData'
  | 'subImage___asset___id'
  | 'subImage___asset___parent___id'
  | 'subImage___asset___parent___children'
  | 'subImage___asset___children'
  | 'subImage___asset___children___id'
  | 'subImage___asset___children___children'
  | 'subImage___asset___internal___content'
  | 'subImage___asset___internal___contentDigest'
  | 'subImage___asset___internal___description'
  | 'subImage___asset___internal___fieldOwners'
  | 'subImage___asset___internal___ignoreType'
  | 'subImage___asset___internal___mediaType'
  | 'subImage___asset___internal___owner'
  | 'subImage___asset___internal___type'
  | 'subImage___hotspot____key'
  | 'subImage___hotspot____type'
  | 'subImage___hotspot___x'
  | 'subImage___hotspot___y'
  | 'subImage___hotspot___height'
  | 'subImage___hotspot___width'
  | 'subImage___crop____key'
  | 'subImage___crop____type'
  | 'subImage___crop___top'
  | 'subImage___crop___bottom'
  | 'subImage___crop___left'
  | 'subImage___crop___right'
  | 'subImage___caption'
  | 'subImage___Caption'
  | 'subImage____rawAsset'
  | 'subImage____rawHotspot'
  | 'subImage____rawCrop'
  | '_rawTitle'
  | '_rawBody'
  | '_rawCta'
  | '_rawMainImage'
  | '_rawSubImage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityFrontPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFrontPageEdge>;
  nodes: Array<SanityFrontPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityFrontPageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityFrontPageGroupConnectionDistinctArgs = {
  field: SanityFrontPageFieldsEnum;
};


export type SanityFrontPageGroupConnectionMaxArgs = {
  field: SanityFrontPageFieldsEnum;
};


export type SanityFrontPageGroupConnectionMinArgs = {
  field: SanityFrontPageFieldsEnum;
};


export type SanityFrontPageGroupConnectionSumArgs = {
  field: SanityFrontPageFieldsEnum;
};


export type SanityFrontPageGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityFrontPageFieldsEnum;
};

export type SanityFrontPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  cta?: Maybe<SanityLocaleStringFilterInput>;
  ctaLink?: Maybe<StringQueryOperatorInput>;
  mainImage?: Maybe<SanityCaptionImageFilterInput>;
  subImage?: Maybe<SanityCaptionImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawCta?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  _rawSubImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityFrontPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityFrontPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityFrontPageSectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFrontPageSectionEdge>;
  nodes: Array<SanityFrontPageSection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityFrontPageSectionGroupConnection>;
};


export type SanityFrontPageSectionConnectionDistinctArgs = {
  field: SanityFrontPageSectionFieldsEnum;
};


export type SanityFrontPageSectionConnectionMaxArgs = {
  field: SanityFrontPageSectionFieldsEnum;
};


export type SanityFrontPageSectionConnectionMinArgs = {
  field: SanityFrontPageSectionFieldsEnum;
};


export type SanityFrontPageSectionConnectionSumArgs = {
  field: SanityFrontPageSectionFieldsEnum;
};


export type SanityFrontPageSectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityFrontPageSectionFieldsEnum;
};

export type SanityFrontPageSectionEdge = {
  next?: Maybe<SanityFrontPageSection>;
  node: SanityFrontPageSection;
  previous?: Maybe<SanityFrontPageSection>;
};

export type SanityFrontPageSectionFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'order'
  | 'title____key'
  | 'title____type'
  | 'title___en'
  | 'title___cy'
  | 'caption____key'
  | 'caption____type'
  | 'caption___en'
  | 'caption___cy'
  | 'heading____key'
  | 'heading____type'
  | 'heading___en'
  | 'heading___cy'
  | 'body____key'
  | 'body____type'
  | 'body___en'
  | 'body___en____key'
  | 'body___en____type'
  | 'body___en___children'
  | 'body___en___children____key'
  | 'body___en___children____type'
  | 'body___en___children___marks'
  | 'body___en___children___text'
  | 'body___en___style'
  | 'body___en___list'
  | 'body___en____rawChildren'
  | 'body___cy'
  | 'body___cy____key'
  | 'body___cy____type'
  | 'body___cy___children'
  | 'body___cy___children____key'
  | 'body___cy___children____type'
  | 'body___cy___children___marks'
  | 'body___cy___children___text'
  | 'body___cy___style'
  | 'body___cy___list'
  | 'body___cy____rawChildren'
  | 'body____rawEn'
  | 'body____rawCy'
  | 'cta____key'
  | 'cta____type'
  | 'cta___en'
  | 'cta___cy'
  | 'ctaLink'
  | 'mainImage____key'
  | 'mainImage____type'
  | 'mainImage___asset____id'
  | 'mainImage___asset____type'
  | 'mainImage___asset____createdAt'
  | 'mainImage___asset____updatedAt'
  | 'mainImage___asset____rev'
  | 'mainImage___asset____key'
  | 'mainImage___asset___originalFilename'
  | 'mainImage___asset___label'
  | 'mainImage___asset___title'
  | 'mainImage___asset___description'
  | 'mainImage___asset___altText'
  | 'mainImage___asset___sha1hash'
  | 'mainImage___asset___extension'
  | 'mainImage___asset___mimeType'
  | 'mainImage___asset___size'
  | 'mainImage___asset___assetId'
  | 'mainImage___asset___uploadId'
  | 'mainImage___asset___path'
  | 'mainImage___asset___url'
  | 'mainImage___asset___metadata____key'
  | 'mainImage___asset___metadata____type'
  | 'mainImage___asset___metadata___lqip'
  | 'mainImage___asset___metadata___blurHash'
  | 'mainImage___asset___metadata___hasAlpha'
  | 'mainImage___asset___metadata___isOpaque'
  | 'mainImage___asset___metadata____rawLocation'
  | 'mainImage___asset___metadata____rawDimensions'
  | 'mainImage___asset___metadata____rawPalette'
  | 'mainImage___asset___source____key'
  | 'mainImage___asset___source____type'
  | 'mainImage___asset___source___name'
  | 'mainImage___asset___source___id'
  | 'mainImage___asset___source___url'
  | 'mainImage___asset____rawMetadata'
  | 'mainImage___asset____rawSource'
  | 'mainImage___asset___gatsbyImageData'
  | 'mainImage___asset___id'
  | 'mainImage___asset___parent___id'
  | 'mainImage___asset___parent___children'
  | 'mainImage___asset___children'
  | 'mainImage___asset___children___id'
  | 'mainImage___asset___children___children'
  | 'mainImage___asset___internal___content'
  | 'mainImage___asset___internal___contentDigest'
  | 'mainImage___asset___internal___description'
  | 'mainImage___asset___internal___fieldOwners'
  | 'mainImage___asset___internal___ignoreType'
  | 'mainImage___asset___internal___mediaType'
  | 'mainImage___asset___internal___owner'
  | 'mainImage___asset___internal___type'
  | 'mainImage___hotspot____key'
  | 'mainImage___hotspot____type'
  | 'mainImage___hotspot___x'
  | 'mainImage___hotspot___y'
  | 'mainImage___hotspot___height'
  | 'mainImage___hotspot___width'
  | 'mainImage___crop____key'
  | 'mainImage___crop____type'
  | 'mainImage___crop___top'
  | 'mainImage___crop___bottom'
  | 'mainImage___crop___left'
  | 'mainImage___crop___right'
  | 'mainImage___caption'
  | 'mainImage___Caption'
  | 'mainImage____rawAsset'
  | 'mainImage____rawHotspot'
  | 'mainImage____rawCrop'
  | 'subImage____key'
  | 'subImage____type'
  | 'subImage___asset____id'
  | 'subImage___asset____type'
  | 'subImage___asset____createdAt'
  | 'subImage___asset____updatedAt'
  | 'subImage___asset____rev'
  | 'subImage___asset____key'
  | 'subImage___asset___originalFilename'
  | 'subImage___asset___label'
  | 'subImage___asset___title'
  | 'subImage___asset___description'
  | 'subImage___asset___altText'
  | 'subImage___asset___sha1hash'
  | 'subImage___asset___extension'
  | 'subImage___asset___mimeType'
  | 'subImage___asset___size'
  | 'subImage___asset___assetId'
  | 'subImage___asset___uploadId'
  | 'subImage___asset___path'
  | 'subImage___asset___url'
  | 'subImage___asset___metadata____key'
  | 'subImage___asset___metadata____type'
  | 'subImage___asset___metadata___lqip'
  | 'subImage___asset___metadata___blurHash'
  | 'subImage___asset___metadata___hasAlpha'
  | 'subImage___asset___metadata___isOpaque'
  | 'subImage___asset___metadata____rawLocation'
  | 'subImage___asset___metadata____rawDimensions'
  | 'subImage___asset___metadata____rawPalette'
  | 'subImage___asset___source____key'
  | 'subImage___asset___source____type'
  | 'subImage___asset___source___name'
  | 'subImage___asset___source___id'
  | 'subImage___asset___source___url'
  | 'subImage___asset____rawMetadata'
  | 'subImage___asset____rawSource'
  | 'subImage___asset___gatsbyImageData'
  | 'subImage___asset___id'
  | 'subImage___asset___parent___id'
  | 'subImage___asset___parent___children'
  | 'subImage___asset___children'
  | 'subImage___asset___children___id'
  | 'subImage___asset___children___children'
  | 'subImage___asset___internal___content'
  | 'subImage___asset___internal___contentDigest'
  | 'subImage___asset___internal___description'
  | 'subImage___asset___internal___fieldOwners'
  | 'subImage___asset___internal___ignoreType'
  | 'subImage___asset___internal___mediaType'
  | 'subImage___asset___internal___owner'
  | 'subImage___asset___internal___type'
  | 'subImage___hotspot____key'
  | 'subImage___hotspot____type'
  | 'subImage___hotspot___x'
  | 'subImage___hotspot___y'
  | 'subImage___hotspot___height'
  | 'subImage___hotspot___width'
  | 'subImage___crop____key'
  | 'subImage___crop____type'
  | 'subImage___crop___top'
  | 'subImage___crop___bottom'
  | 'subImage___crop___left'
  | 'subImage___crop___right'
  | 'subImage___caption'
  | 'subImage___Caption'
  | 'subImage____rawAsset'
  | 'subImage____rawHotspot'
  | 'subImage____rawCrop'
  | '_rawTitle'
  | '_rawCaption'
  | '_rawHeading'
  | '_rawBody'
  | '_rawCta'
  | '_rawMainImage'
  | '_rawSubImage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityFrontPageSectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFrontPageSectionEdge>;
  nodes: Array<SanityFrontPageSection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityFrontPageSectionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityFrontPageSectionGroupConnectionDistinctArgs = {
  field: SanityFrontPageSectionFieldsEnum;
};


export type SanityFrontPageSectionGroupConnectionMaxArgs = {
  field: SanityFrontPageSectionFieldsEnum;
};


export type SanityFrontPageSectionGroupConnectionMinArgs = {
  field: SanityFrontPageSectionFieldsEnum;
};


export type SanityFrontPageSectionGroupConnectionSumArgs = {
  field: SanityFrontPageSectionFieldsEnum;
};


export type SanityFrontPageSectionGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityFrontPageSectionFieldsEnum;
};

export type SanityFrontPageSectionFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<FloatQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  caption?: Maybe<SanityLocaleStringFilterInput>;
  heading?: Maybe<SanityLocaleStringFilterInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  cta?: Maybe<SanityLocaleStringFilterInput>;
  ctaLink?: Maybe<StringQueryOperatorInput>;
  mainImage?: Maybe<SanityCaptionImageFilterInput>;
  subImage?: Maybe<SanityCaptionImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawCaption?: Maybe<JsonQueryOperatorInput>;
  _rawHeading?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawCta?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  _rawSubImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityFrontPageSectionSortInput = {
  fields?: Maybe<Array<Maybe<SanityFrontPageSectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPageEdge>;
  nodes: Array<SanityPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPageGroupConnection>;
};


export type SanityPageConnectionDistinctArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionMaxArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionMinArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionSumArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityPageFieldsEnum;
};

export type SanityPageEdge = {
  next?: Maybe<SanityPage>;
  node: SanityPage;
  previous?: Maybe<SanityPage>;
};

export type SanityPageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title____key'
  | 'title____type'
  | 'title___en'
  | 'title___cy'
  | 'body____key'
  | 'body____type'
  | 'body___en'
  | 'body___en____key'
  | 'body___en____type'
  | 'body___en___children'
  | 'body___en___children____key'
  | 'body___en___children____type'
  | 'body___en___children___marks'
  | 'body___en___children___text'
  | 'body___en___style'
  | 'body___en___list'
  | 'body___en____rawChildren'
  | 'body___cy'
  | 'body___cy____key'
  | 'body___cy____type'
  | 'body___cy___children'
  | 'body___cy___children____key'
  | 'body___cy___children____type'
  | 'body___cy___children___marks'
  | 'body___cy___children___text'
  | 'body___cy___style'
  | 'body___cy___list'
  | 'body___cy____rawChildren'
  | 'body____rawEn'
  | 'body____rawCy'
  | 'slug____key'
  | 'slug____type'
  | 'slug___en____key'
  | 'slug___en____type'
  | 'slug___en___current'
  | 'slug___cy____key'
  | 'slug___cy____type'
  | 'slug___cy___current'
  | 'slug____rawEn'
  | 'slug____rawCy'
  | 'mainImage____key'
  | 'mainImage____type'
  | 'mainImage___asset____id'
  | 'mainImage___asset____type'
  | 'mainImage___asset____createdAt'
  | 'mainImage___asset____updatedAt'
  | 'mainImage___asset____rev'
  | 'mainImage___asset____key'
  | 'mainImage___asset___originalFilename'
  | 'mainImage___asset___label'
  | 'mainImage___asset___title'
  | 'mainImage___asset___description'
  | 'mainImage___asset___altText'
  | 'mainImage___asset___sha1hash'
  | 'mainImage___asset___extension'
  | 'mainImage___asset___mimeType'
  | 'mainImage___asset___size'
  | 'mainImage___asset___assetId'
  | 'mainImage___asset___uploadId'
  | 'mainImage___asset___path'
  | 'mainImage___asset___url'
  | 'mainImage___asset___metadata____key'
  | 'mainImage___asset___metadata____type'
  | 'mainImage___asset___metadata___lqip'
  | 'mainImage___asset___metadata___blurHash'
  | 'mainImage___asset___metadata___hasAlpha'
  | 'mainImage___asset___metadata___isOpaque'
  | 'mainImage___asset___metadata____rawLocation'
  | 'mainImage___asset___metadata____rawDimensions'
  | 'mainImage___asset___metadata____rawPalette'
  | 'mainImage___asset___source____key'
  | 'mainImage___asset___source____type'
  | 'mainImage___asset___source___name'
  | 'mainImage___asset___source___id'
  | 'mainImage___asset___source___url'
  | 'mainImage___asset____rawMetadata'
  | 'mainImage___asset____rawSource'
  | 'mainImage___asset___gatsbyImageData'
  | 'mainImage___asset___id'
  | 'mainImage___asset___parent___id'
  | 'mainImage___asset___parent___children'
  | 'mainImage___asset___children'
  | 'mainImage___asset___children___id'
  | 'mainImage___asset___children___children'
  | 'mainImage___asset___internal___content'
  | 'mainImage___asset___internal___contentDigest'
  | 'mainImage___asset___internal___description'
  | 'mainImage___asset___internal___fieldOwners'
  | 'mainImage___asset___internal___ignoreType'
  | 'mainImage___asset___internal___mediaType'
  | 'mainImage___asset___internal___owner'
  | 'mainImage___asset___internal___type'
  | 'mainImage___hotspot____key'
  | 'mainImage___hotspot____type'
  | 'mainImage___hotspot___x'
  | 'mainImage___hotspot___y'
  | 'mainImage___hotspot___height'
  | 'mainImage___hotspot___width'
  | 'mainImage___crop____key'
  | 'mainImage___crop____type'
  | 'mainImage___crop___top'
  | 'mainImage___crop___bottom'
  | 'mainImage___crop___left'
  | 'mainImage___crop___right'
  | 'mainImage___caption'
  | 'mainImage___Caption'
  | 'mainImage____rawAsset'
  | 'mainImage____rawHotspot'
  | 'mainImage____rawCrop'
  | '_rawTitle'
  | '_rawBody'
  | '_rawSlug'
  | '_rawMainImage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPageEdge>;
  nodes: Array<SanityPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityPageGroupConnectionDistinctArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageGroupConnectionMaxArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageGroupConnectionMinArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageGroupConnectionSumArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityPageFieldsEnum;
};

export type SanityPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  slug?: Maybe<SanityLocaleSlugFilterInput>;
  mainImage?: Maybe<SanityCaptionImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityCategoryFilterListInput = {
  elemMatch?: Maybe<SanityCategoryFilterInput>;
};

export type SanityPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPostEdge>;
  nodes: Array<SanityPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPostGroupConnection>;
};


export type SanityPostConnectionDistinctArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionMaxArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionMinArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionSumArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityPostFieldsEnum;
};

export type SanityPostEdge = {
  next?: Maybe<SanityPost>;
  node: SanityPost;
  previous?: Maybe<SanityPost>;
};

export type SanityPostFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title____key'
  | 'title____type'
  | 'title___en'
  | 'title___cy'
  | 'body____key'
  | 'body____type'
  | 'body___en'
  | 'body___en____key'
  | 'body___en____type'
  | 'body___en___children'
  | 'body___en___children____key'
  | 'body___en___children____type'
  | 'body___en___children___marks'
  | 'body___en___children___text'
  | 'body___en___style'
  | 'body___en___list'
  | 'body___en____rawChildren'
  | 'body___cy'
  | 'body___cy____key'
  | 'body___cy____type'
  | 'body___cy___children'
  | 'body___cy___children____key'
  | 'body___cy___children____type'
  | 'body___cy___children___marks'
  | 'body___cy___children___text'
  | 'body___cy___style'
  | 'body___cy___list'
  | 'body___cy____rawChildren'
  | 'body____rawEn'
  | 'body____rawCy'
  | 'categories'
  | 'categories____id'
  | 'categories____type'
  | 'categories____createdAt'
  | 'categories____updatedAt'
  | 'categories____rev'
  | 'categories____key'
  | 'categories___title____key'
  | 'categories___title____type'
  | 'categories___title___en'
  | 'categories___title___cy'
  | 'categories____rawTitle'
  | 'categories___id'
  | 'categories___parent___id'
  | 'categories___parent___parent___id'
  | 'categories___parent___parent___children'
  | 'categories___parent___children'
  | 'categories___parent___children___id'
  | 'categories___parent___children___children'
  | 'categories___parent___internal___content'
  | 'categories___parent___internal___contentDigest'
  | 'categories___parent___internal___description'
  | 'categories___parent___internal___fieldOwners'
  | 'categories___parent___internal___ignoreType'
  | 'categories___parent___internal___mediaType'
  | 'categories___parent___internal___owner'
  | 'categories___parent___internal___type'
  | 'categories___children'
  | 'categories___children___id'
  | 'categories___children___parent___id'
  | 'categories___children___parent___children'
  | 'categories___children___children'
  | 'categories___children___children___id'
  | 'categories___children___children___children'
  | 'categories___children___internal___content'
  | 'categories___children___internal___contentDigest'
  | 'categories___children___internal___description'
  | 'categories___children___internal___fieldOwners'
  | 'categories___children___internal___ignoreType'
  | 'categories___children___internal___mediaType'
  | 'categories___children___internal___owner'
  | 'categories___children___internal___type'
  | 'categories___internal___content'
  | 'categories___internal___contentDigest'
  | 'categories___internal___description'
  | 'categories___internal___fieldOwners'
  | 'categories___internal___ignoreType'
  | 'categories___internal___mediaType'
  | 'categories___internal___owner'
  | 'categories___internal___type'
  | 'publishedAt'
  | 'slug____key'
  | 'slug____type'
  | 'slug___en____key'
  | 'slug___en____type'
  | 'slug___en___current'
  | 'slug___cy____key'
  | 'slug___cy____type'
  | 'slug___cy___current'
  | 'slug____rawEn'
  | 'slug____rawCy'
  | 'image____key'
  | 'image____type'
  | 'image___asset____id'
  | 'image___asset____type'
  | 'image___asset____createdAt'
  | 'image___asset____updatedAt'
  | 'image___asset____rev'
  | 'image___asset____key'
  | 'image___asset___originalFilename'
  | 'image___asset___label'
  | 'image___asset___title'
  | 'image___asset___description'
  | 'image___asset___altText'
  | 'image___asset___sha1hash'
  | 'image___asset___extension'
  | 'image___asset___mimeType'
  | 'image___asset___size'
  | 'image___asset___assetId'
  | 'image___asset___uploadId'
  | 'image___asset___path'
  | 'image___asset___url'
  | 'image___asset___metadata____key'
  | 'image___asset___metadata____type'
  | 'image___asset___metadata___lqip'
  | 'image___asset___metadata___blurHash'
  | 'image___asset___metadata___hasAlpha'
  | 'image___asset___metadata___isOpaque'
  | 'image___asset___metadata____rawLocation'
  | 'image___asset___metadata____rawDimensions'
  | 'image___asset___metadata____rawPalette'
  | 'image___asset___source____key'
  | 'image___asset___source____type'
  | 'image___asset___source___name'
  | 'image___asset___source___id'
  | 'image___asset___source___url'
  | 'image___asset____rawMetadata'
  | 'image___asset____rawSource'
  | 'image___asset___gatsbyImageData'
  | 'image___asset___id'
  | 'image___asset___parent___id'
  | 'image___asset___parent___children'
  | 'image___asset___children'
  | 'image___asset___children___id'
  | 'image___asset___children___children'
  | 'image___asset___internal___content'
  | 'image___asset___internal___contentDigest'
  | 'image___asset___internal___description'
  | 'image___asset___internal___fieldOwners'
  | 'image___asset___internal___ignoreType'
  | 'image___asset___internal___mediaType'
  | 'image___asset___internal___owner'
  | 'image___asset___internal___type'
  | 'image___hotspot____key'
  | 'image___hotspot____type'
  | 'image___hotspot___x'
  | 'image___hotspot___y'
  | 'image___hotspot___height'
  | 'image___hotspot___width'
  | 'image___crop____key'
  | 'image___crop____type'
  | 'image___crop___top'
  | 'image___crop___bottom'
  | 'image___crop___left'
  | 'image___crop___right'
  | 'image____rawAsset'
  | 'image____rawHotspot'
  | 'image____rawCrop'
  | '_rawTitle'
  | '_rawBody'
  | '_rawCategories'
  | '_rawSlug'
  | '_rawImage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPostEdge>;
  nodes: Array<SanityPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPostGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityPostGroupConnectionDistinctArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionMaxArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionMinArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionSumArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityPostFieldsEnum;
};

export type SanityPostFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  categories?: Maybe<SanityCategoryFilterListInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<SanityLocaleSlugFilterInput>;
  image?: Maybe<SanityImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawCategories?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityPostSortInput = {
  fields?: Maybe<Array<Maybe<SanityPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityFileAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityFileAssetGroupConnection>;
};


export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetEdge = {
  next?: Maybe<SanityFileAsset>;
  node: SanityFileAsset;
  previous?: Maybe<SanityFileAsset>;
};

export type SanityFileAssetFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'originalFilename'
  | 'label'
  | 'title'
  | 'description'
  | 'altText'
  | 'sha1hash'
  | 'extension'
  | 'mimeType'
  | 'size'
  | 'assetId'
  | 'path'
  | 'url'
  | 'source____key'
  | 'source____type'
  | 'source___name'
  | 'source___id'
  | 'source___url'
  | '_rawSource'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityFileAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityFileAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityFileAssetGroupConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  altText?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityFileAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityFileAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityImageAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityImageAssetGroupConnection>;
};


export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetEdge = {
  next?: Maybe<SanityImageAsset>;
  node: SanityImageAsset;
  previous?: Maybe<SanityImageAsset>;
};

export type SanityImageAssetFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'originalFilename'
  | 'label'
  | 'title'
  | 'description'
  | 'altText'
  | 'sha1hash'
  | 'extension'
  | 'mimeType'
  | 'size'
  | 'assetId'
  | 'uploadId'
  | 'path'
  | 'url'
  | 'metadata____key'
  | 'metadata____type'
  | 'metadata___location____key'
  | 'metadata___location____type'
  | 'metadata___location___lat'
  | 'metadata___location___lng'
  | 'metadata___location___alt'
  | 'metadata___dimensions____key'
  | 'metadata___dimensions____type'
  | 'metadata___dimensions___height'
  | 'metadata___dimensions___width'
  | 'metadata___dimensions___aspectRatio'
  | 'metadata___palette____key'
  | 'metadata___palette____type'
  | 'metadata___palette___darkMuted____key'
  | 'metadata___palette___darkMuted____type'
  | 'metadata___palette___darkMuted___background'
  | 'metadata___palette___darkMuted___foreground'
  | 'metadata___palette___darkMuted___population'
  | 'metadata___palette___darkMuted___title'
  | 'metadata___palette___lightVibrant____key'
  | 'metadata___palette___lightVibrant____type'
  | 'metadata___palette___lightVibrant___background'
  | 'metadata___palette___lightVibrant___foreground'
  | 'metadata___palette___lightVibrant___population'
  | 'metadata___palette___lightVibrant___title'
  | 'metadata___palette___darkVibrant____key'
  | 'metadata___palette___darkVibrant____type'
  | 'metadata___palette___darkVibrant___background'
  | 'metadata___palette___darkVibrant___foreground'
  | 'metadata___palette___darkVibrant___population'
  | 'metadata___palette___darkVibrant___title'
  | 'metadata___palette___vibrant____key'
  | 'metadata___palette___vibrant____type'
  | 'metadata___palette___vibrant___background'
  | 'metadata___palette___vibrant___foreground'
  | 'metadata___palette___vibrant___population'
  | 'metadata___palette___vibrant___title'
  | 'metadata___palette___dominant____key'
  | 'metadata___palette___dominant____type'
  | 'metadata___palette___dominant___background'
  | 'metadata___palette___dominant___foreground'
  | 'metadata___palette___dominant___population'
  | 'metadata___palette___dominant___title'
  | 'metadata___palette___lightMuted____key'
  | 'metadata___palette___lightMuted____type'
  | 'metadata___palette___lightMuted___background'
  | 'metadata___palette___lightMuted___foreground'
  | 'metadata___palette___lightMuted___population'
  | 'metadata___palette___lightMuted___title'
  | 'metadata___palette___muted____key'
  | 'metadata___palette___muted____type'
  | 'metadata___palette___muted___background'
  | 'metadata___palette___muted___foreground'
  | 'metadata___palette___muted___population'
  | 'metadata___palette___muted___title'
  | 'metadata___palette____rawDarkMuted'
  | 'metadata___palette____rawLightVibrant'
  | 'metadata___palette____rawDarkVibrant'
  | 'metadata___palette____rawVibrant'
  | 'metadata___palette____rawDominant'
  | 'metadata___palette____rawLightMuted'
  | 'metadata___palette____rawMuted'
  | 'metadata___lqip'
  | 'metadata___blurHash'
  | 'metadata___hasAlpha'
  | 'metadata___isOpaque'
  | 'metadata____rawLocation'
  | 'metadata____rawDimensions'
  | 'metadata____rawPalette'
  | 'source____key'
  | 'source____type'
  | 'source___name'
  | 'source___id'
  | 'source___url'
  | '_rawMetadata'
  | '_rawSource'
  | 'gatsbyImageData'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityImageAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityImageAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityImageAssetGroupConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityImageAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanitySpaceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySpaceEdge>;
  nodes: Array<SanitySpace>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanitySpaceGroupConnection>;
};


export type SanitySpaceConnectionDistinctArgs = {
  field: SanitySpaceFieldsEnum;
};


export type SanitySpaceConnectionMaxArgs = {
  field: SanitySpaceFieldsEnum;
};


export type SanitySpaceConnectionMinArgs = {
  field: SanitySpaceFieldsEnum;
};


export type SanitySpaceConnectionSumArgs = {
  field: SanitySpaceFieldsEnum;
};


export type SanitySpaceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanitySpaceFieldsEnum;
};

export type SanitySpaceEdge = {
  next?: Maybe<SanitySpace>;
  node: SanitySpace;
  previous?: Maybe<SanitySpace>;
};

export type SanitySpaceFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title____key'
  | 'title____type'
  | 'title___en'
  | 'title___cy'
  | 'body____key'
  | 'body____type'
  | 'body___en'
  | 'body___en____key'
  | 'body___en____type'
  | 'body___en___children'
  | 'body___en___children____key'
  | 'body___en___children____type'
  | 'body___en___children___marks'
  | 'body___en___children___text'
  | 'body___en___style'
  | 'body___en___list'
  | 'body___en____rawChildren'
  | 'body___cy'
  | 'body___cy____key'
  | 'body___cy____type'
  | 'body___cy___children'
  | 'body___cy___children____key'
  | 'body___cy___children____type'
  | 'body___cy___children___marks'
  | 'body___cy___children___text'
  | 'body___cy___style'
  | 'body___cy___list'
  | 'body___cy____rawChildren'
  | 'body____rawEn'
  | 'body____rawCy'
  | 'slug____key'
  | 'slug____type'
  | 'slug___en____key'
  | 'slug___en____type'
  | 'slug___en___current'
  | 'slug___cy____key'
  | 'slug___cy____type'
  | 'slug___cy___current'
  | 'slug____rawEn'
  | 'slug____rawCy'
  | 'mainImage____key'
  | 'mainImage____type'
  | 'mainImage___asset____id'
  | 'mainImage___asset____type'
  | 'mainImage___asset____createdAt'
  | 'mainImage___asset____updatedAt'
  | 'mainImage___asset____rev'
  | 'mainImage___asset____key'
  | 'mainImage___asset___originalFilename'
  | 'mainImage___asset___label'
  | 'mainImage___asset___title'
  | 'mainImage___asset___description'
  | 'mainImage___asset___altText'
  | 'mainImage___asset___sha1hash'
  | 'mainImage___asset___extension'
  | 'mainImage___asset___mimeType'
  | 'mainImage___asset___size'
  | 'mainImage___asset___assetId'
  | 'mainImage___asset___uploadId'
  | 'mainImage___asset___path'
  | 'mainImage___asset___url'
  | 'mainImage___asset___metadata____key'
  | 'mainImage___asset___metadata____type'
  | 'mainImage___asset___metadata___lqip'
  | 'mainImage___asset___metadata___blurHash'
  | 'mainImage___asset___metadata___hasAlpha'
  | 'mainImage___asset___metadata___isOpaque'
  | 'mainImage___asset___metadata____rawLocation'
  | 'mainImage___asset___metadata____rawDimensions'
  | 'mainImage___asset___metadata____rawPalette'
  | 'mainImage___asset___source____key'
  | 'mainImage___asset___source____type'
  | 'mainImage___asset___source___name'
  | 'mainImage___asset___source___id'
  | 'mainImage___asset___source___url'
  | 'mainImage___asset____rawMetadata'
  | 'mainImage___asset____rawSource'
  | 'mainImage___asset___gatsbyImageData'
  | 'mainImage___asset___id'
  | 'mainImage___asset___parent___id'
  | 'mainImage___asset___parent___children'
  | 'mainImage___asset___children'
  | 'mainImage___asset___children___id'
  | 'mainImage___asset___children___children'
  | 'mainImage___asset___internal___content'
  | 'mainImage___asset___internal___contentDigest'
  | 'mainImage___asset___internal___description'
  | 'mainImage___asset___internal___fieldOwners'
  | 'mainImage___asset___internal___ignoreType'
  | 'mainImage___asset___internal___mediaType'
  | 'mainImage___asset___internal___owner'
  | 'mainImage___asset___internal___type'
  | 'mainImage___hotspot____key'
  | 'mainImage___hotspot____type'
  | 'mainImage___hotspot___x'
  | 'mainImage___hotspot___y'
  | 'mainImage___hotspot___height'
  | 'mainImage___hotspot___width'
  | 'mainImage___crop____key'
  | 'mainImage___crop____type'
  | 'mainImage___crop___top'
  | 'mainImage___crop___bottom'
  | 'mainImage___crop___left'
  | 'mainImage___crop___right'
  | 'mainImage____rawAsset'
  | 'mainImage____rawHotspot'
  | 'mainImage____rawCrop'
  | '_rawTitle'
  | '_rawBody'
  | '_rawSlug'
  | '_rawMainImage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanitySpaceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySpaceEdge>;
  nodes: Array<SanitySpace>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanitySpaceGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanitySpaceGroupConnectionDistinctArgs = {
  field: SanitySpaceFieldsEnum;
};


export type SanitySpaceGroupConnectionMaxArgs = {
  field: SanitySpaceFieldsEnum;
};


export type SanitySpaceGroupConnectionMinArgs = {
  field: SanitySpaceFieldsEnum;
};


export type SanitySpaceGroupConnectionSumArgs = {
  field: SanitySpaceFieldsEnum;
};


export type SanitySpaceGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanitySpaceFieldsEnum;
};

export type SanitySpaceFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  slug?: Maybe<SanityLocaleSlugFilterInput>;
  mainImage?: Maybe<SanityImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanitySpaceSortInput = {
  fields?: Maybe<Array<Maybe<SanitySpaceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityVideoConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityVideoEdge>;
  nodes: Array<SanityVideo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityVideoGroupConnection>;
};


export type SanityVideoConnectionDistinctArgs = {
  field: SanityVideoFieldsEnum;
};


export type SanityVideoConnectionMaxArgs = {
  field: SanityVideoFieldsEnum;
};


export type SanityVideoConnectionMinArgs = {
  field: SanityVideoFieldsEnum;
};


export type SanityVideoConnectionSumArgs = {
  field: SanityVideoFieldsEnum;
};


export type SanityVideoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityVideoFieldsEnum;
};

export type SanityVideoEdge = {
  next?: Maybe<SanityVideo>;
  node: SanityVideo;
  previous?: Maybe<SanityVideo>;
};

export type SanityVideoFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title____key'
  | 'title____type'
  | 'title___en'
  | 'title___cy'
  | 'body____key'
  | 'body____type'
  | 'body___en'
  | 'body___en____key'
  | 'body___en____type'
  | 'body___en___children'
  | 'body___en___children____key'
  | 'body___en___children____type'
  | 'body___en___children___marks'
  | 'body___en___children___text'
  | 'body___en___style'
  | 'body___en___list'
  | 'body___en____rawChildren'
  | 'body___cy'
  | 'body___cy____key'
  | 'body___cy____type'
  | 'body___cy___children'
  | 'body___cy___children____key'
  | 'body___cy___children____type'
  | 'body___cy___children___marks'
  | 'body___cy___children___text'
  | 'body___cy___style'
  | 'body___cy___list'
  | 'body___cy____rawChildren'
  | 'body____rawEn'
  | 'body____rawCy'
  | 'videoLink'
  | 'publishDate'
  | 'slug____key'
  | 'slug____type'
  | 'slug___en____key'
  | 'slug___en____type'
  | 'slug___en___current'
  | 'slug___cy____key'
  | 'slug___cy____type'
  | 'slug___cy___current'
  | 'slug____rawEn'
  | 'slug____rawCy'
  | 'mainImage____key'
  | 'mainImage____type'
  | 'mainImage___asset____id'
  | 'mainImage___asset____type'
  | 'mainImage___asset____createdAt'
  | 'mainImage___asset____updatedAt'
  | 'mainImage___asset____rev'
  | 'mainImage___asset____key'
  | 'mainImage___asset___originalFilename'
  | 'mainImage___asset___label'
  | 'mainImage___asset___title'
  | 'mainImage___asset___description'
  | 'mainImage___asset___altText'
  | 'mainImage___asset___sha1hash'
  | 'mainImage___asset___extension'
  | 'mainImage___asset___mimeType'
  | 'mainImage___asset___size'
  | 'mainImage___asset___assetId'
  | 'mainImage___asset___uploadId'
  | 'mainImage___asset___path'
  | 'mainImage___asset___url'
  | 'mainImage___asset___metadata____key'
  | 'mainImage___asset___metadata____type'
  | 'mainImage___asset___metadata___lqip'
  | 'mainImage___asset___metadata___blurHash'
  | 'mainImage___asset___metadata___hasAlpha'
  | 'mainImage___asset___metadata___isOpaque'
  | 'mainImage___asset___metadata____rawLocation'
  | 'mainImage___asset___metadata____rawDimensions'
  | 'mainImage___asset___metadata____rawPalette'
  | 'mainImage___asset___source____key'
  | 'mainImage___asset___source____type'
  | 'mainImage___asset___source___name'
  | 'mainImage___asset___source___id'
  | 'mainImage___asset___source___url'
  | 'mainImage___asset____rawMetadata'
  | 'mainImage___asset____rawSource'
  | 'mainImage___asset___gatsbyImageData'
  | 'mainImage___asset___id'
  | 'mainImage___asset___parent___id'
  | 'mainImage___asset___parent___children'
  | 'mainImage___asset___children'
  | 'mainImage___asset___children___id'
  | 'mainImage___asset___children___children'
  | 'mainImage___asset___internal___content'
  | 'mainImage___asset___internal___contentDigest'
  | 'mainImage___asset___internal___description'
  | 'mainImage___asset___internal___fieldOwners'
  | 'mainImage___asset___internal___ignoreType'
  | 'mainImage___asset___internal___mediaType'
  | 'mainImage___asset___internal___owner'
  | 'mainImage___asset___internal___type'
  | 'mainImage___hotspot____key'
  | 'mainImage___hotspot____type'
  | 'mainImage___hotspot___x'
  | 'mainImage___hotspot___y'
  | 'mainImage___hotspot___height'
  | 'mainImage___hotspot___width'
  | 'mainImage___crop____key'
  | 'mainImage___crop____type'
  | 'mainImage___crop___top'
  | 'mainImage___crop___bottom'
  | 'mainImage___crop___left'
  | 'mainImage___crop___right'
  | 'mainImage____rawAsset'
  | 'mainImage____rawHotspot'
  | 'mainImage____rawCrop'
  | '_rawTitle'
  | '_rawBody'
  | '_rawSlug'
  | '_rawMainImage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityVideoGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityVideoEdge>;
  nodes: Array<SanityVideo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityVideoGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityVideoGroupConnectionDistinctArgs = {
  field: SanityVideoFieldsEnum;
};


export type SanityVideoGroupConnectionMaxArgs = {
  field: SanityVideoFieldsEnum;
};


export type SanityVideoGroupConnectionMinArgs = {
  field: SanityVideoFieldsEnum;
};


export type SanityVideoGroupConnectionSumArgs = {
  field: SanityVideoFieldsEnum;
};


export type SanityVideoGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityVideoFieldsEnum;
};

export type SanityVideoFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  body?: Maybe<SanityLocaleRichTextFilterInput>;
  videoLink?: Maybe<StringQueryOperatorInput>;
  publishDate?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<SanityLocaleSlugFilterInput>;
  mainImage?: Maybe<SanityImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawBody?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawMainImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityVideoSortInput = {
  fields?: Maybe<Array<Maybe<SanityVideoFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IntroQueryVariables = Exact<{ [key: string]: never; }>;


export type IntroQuery = { sanityFrontPage?: Maybe<(
    Pick<SanityFrontPage, 'ctaLink'>
    & { body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, cta?: Maybe<Pick<SanityLocaleString, 'en'>> }
  )> };

export type SeoQueryVariables = Exact<{ [key: string]: never; }>;


export type SeoQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author' | 'keywords' | 'siteUrl'>> }> };

export type SidebarQueryVariables = Exact<{ [key: string]: never; }>;


export type SidebarQuery = { allSanityPost: { edges: Array<{ node: (
        Pick<SanityPost, 'id'>
        & { slug?: Maybe<{ en?: Maybe<Pick<SanitySlug, 'current'>> }>, title?: Maybe<Pick<SanityLocaleString, 'en'>> }
      ) }> }, allSanityEvent: { edges: Array<{ node: (
        Pick<SanityEvent, 'id'>
        & { title?: Maybe<Pick<SanityLocaleString, 'en'>>, slug?: Maybe<{ en?: Maybe<Pick<SanitySlug, 'current'>> }> }
      ) }> }, allSanityExhibition: { edges: Array<{ node: (
        Pick<SanityExhibition, 'id' | 'dateEnd' | 'dateStart'>
        & { slug?: Maybe<{ en?: Maybe<Pick<SanitySlug, 'current'>> }>, title?: Maybe<Pick<SanityLocaleString, 'en'>> }
      ) }> } };

export type FourOhFourQueryVariables = Exact<{ [key: string]: never; }>;


export type FourOhFourQuery = { sanityPage?: Maybe<{ mainImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'id' | 'gatsbyImageData'>> }> }> };

export type AboutQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutQuery = { sanityPage?: Maybe<(
    Pick<SanityPage, 'id'>
    & { title?: Maybe<Pick<SanityLocaleString, 'en'>>, body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, mainImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }> }
  )> };

export type ArtistsQueryVariables = Exact<{ [key: string]: never; }>;


export type ArtistsQuery = { allSanityArtist: { edges: Array<{ node: (
        Pick<SanityArtist, 'id' | 'title'>
        & { slug?: Maybe<Pick<SanitySlug, 'current'>>, body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, mainImage?: Maybe<(
          Pick<SanityCaptionImage, 'caption'>
          & { asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }
        )>, disciplines?: Maybe<Array<Maybe<{ title?: Maybe<Pick<SanityLocaleString, 'en'>> }>>> }
      ) }> }, sanityArtist?: Maybe<{ mainImage?: Maybe<(
      Pick<SanityCaptionImage, 'caption'>
      & { asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }
    )> }> };

export type IndexQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexQuery = { sanityFrontPage?: Maybe<{ mainImage?: Maybe<(
      Pick<SanityCaptionImage, 'caption'>
      & { asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }
    )>, subImage?: Maybe<(
      Pick<SanityCaptionImage, 'caption'>
      & { asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }
    )> }>, allSanityFrontPageSection: { edges: Array<{ node: (
        Pick<SanityFrontPageSection, 'id' | 'ctaLink'>
        & { title?: Maybe<Pick<SanityLocaleString, 'en'>>, caption?: Maybe<Pick<SanityLocaleString, 'en'>>, heading?: Maybe<Pick<SanityLocaleString, 'en'>>, body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, cta?: Maybe<Pick<SanityLocaleString, 'en'>>, mainImage?: Maybe<(
          Pick<SanityCaptionImage, 'caption'>
          & { asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }
        )>, subImage?: Maybe<(
          Pick<SanityCaptionImage, 'caption'>
          & { asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }
        )> }
      ) }> } };

export type NewsQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsQuery = { newsMain: { edges: Array<{ node: (
        Pick<SanityPost, 'id' | 'publishedAt'>
        & { body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, categories?: Maybe<Array<Maybe<{ title?: Maybe<Pick<SanityLocaleString, 'en'>> }>>>, image?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }>, slug?: Maybe<{ en?: Maybe<Pick<SanitySlug, 'current'>> }>, title?: Maybe<Pick<SanityLocaleString, 'en'>> }
      ) }> }, newsHero: { edges: Array<{ node: { image?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }> } }> } };

export type SupportQueryVariables = Exact<{ [key: string]: never; }>;


export type SupportQuery = { sanityPage?: Maybe<(
    Pick<SanityPage, 'id'>
    & { title?: Maybe<Pick<SanityLocaleString, 'en'>>, body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, mainImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }> }
  )> };

export type VideosQueryVariables = Exact<{ [key: string]: never; }>;


export type VideosQuery = { videosMain: { edges: Array<{ node: (
        Pick<SanityVideo, 'id'>
        & { title?: Maybe<Pick<SanityLocaleString, 'en'>>, mainImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }>, slug?: Maybe<{ en?: Maybe<Pick<SanitySlug, 'current'>> }> }
      ) }> }, videosHero: { edges: Array<{ node: { mainImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }> } }> } };

export type VisitQueryVariables = Exact<{ [key: string]: never; }>;


export type VisitQuery = { sanityPage?: Maybe<(
    Pick<SanityPage, 'id'>
    & { title?: Maybe<Pick<SanityLocaleString, 'en'>>, body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, mainImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }> }
  )>, allSanitySpace: { edges: Array<{ node: (
        Pick<SanitySpace, 'id'>
        & { body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, mainImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }>, title?: Maybe<Pick<SanityLocaleString, 'en'>>, slug?: Maybe<{ en?: Maybe<Pick<SanitySlug, 'current'>> }> }
      ) }> } };

export type WorkshopsQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkshopsQuery = { sanityPage?: Maybe<(
    Pick<SanityPage, 'id'>
    & { title?: Maybe<Pick<SanityLocaleString, 'en'>>, body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, mainImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }> }
  )> };

export type SingleArtistQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type SingleArtistQuery = { artworkList: { edges: Array<{ node: (
        Pick<SanityArtwork, 'id' | 'artist' | 'date' | 'dimensions' | 'price'>
        & { artworkGridImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }>, artworkModalImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }>, medium?: Maybe<Pick<SanityLocaleString, 'en'>>, title?: Maybe<Pick<SanityLocaleString, 'en'>> }
      ) }> }, sanityArtist?: Maybe<(
    Pick<SanityArtist, 'id' | 'title'>
    & { body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, disciplines?: Maybe<Array<Maybe<{ title?: Maybe<Pick<SanityLocaleString, 'en'>> }>>>, mainImage?: Maybe<(
      Pick<SanityCaptionImage, 'caption'>
      & { asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }
    )> }
  )> };

export type SingleEventQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type SingleEventQuery = { sanityEvent?: Maybe<(
    Pick<SanityEvent, 'briteLink' | 'date' | 'id'>
    & { body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, title?: Maybe<Pick<SanityLocaleString, 'en'>>, mainImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }> }
  )> };

export type EventsQueryVariables = Exact<{
  currentDate: Scalars['Date'];
}>;


export type EventsQuery = { mainEvents: { edges: Array<{ node: (
        Pick<SanityEvent, 'briteLink' | 'date' | 'id'>
        & { title?: Maybe<Pick<SanityLocaleString, 'en'>>, body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, mainImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }>, heroImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }>, slug?: Maybe<{ en?: Maybe<Pick<SanitySlug, 'current'>> }> }
      ) }> }, recurringEvents: { edges: Array<{ node: (
        Pick<SanityEvent, 'briteLink' | 'date' | 'id'>
        & { title?: Maybe<Pick<SanityLocaleString, 'en'>>, body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, mainImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }>, heroImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }>, slug?: Maybe<{ en?: Maybe<Pick<SanitySlug, 'current'>> }> }
      ) }> }, pastEvents: { edges: Array<{ node: (
        Pick<SanityEvent, 'briteLink' | 'date' | 'id'>
        & { title?: Maybe<Pick<SanityLocaleString, 'en'>>, body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, mainImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }>, heroImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }>, slug?: Maybe<{ en?: Maybe<Pick<SanitySlug, 'current'>> }> }
      ) }> } };

export type SingleExhibitionQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type SingleExhibitionQuery = { allSanityArtwork: { edges: Array<{ node: (
        Pick<SanityArtwork, 'id' | 'artist' | 'date' | 'dimensions' | 'price'>
        & { artworkGridImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }>, artworkModalImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }>, medium?: Maybe<Pick<SanityLocaleString, 'en'>>, title?: Maybe<Pick<SanityLocaleString, 'en'>> }
      ) }> }, sanityExhibition?: Maybe<(
    Pick<SanityExhibition, 'dateStart' | 'dateEnd' | 'id'>
    & { body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, title?: Maybe<Pick<SanityLocaleString, 'en'>>, mainImage?: Maybe<(
      Pick<SanityCaptionImage, 'caption'>
      & { asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }
    )> }
  )> };

export type ExhibitionsQueryVariables = Exact<{
  currentDate: Scalars['Date'];
}>;


export type ExhibitionsQuery = { currentExhibitions: { edges: Array<{ node: (
        Pick<SanityExhibition, 'dateStart' | 'dateEnd' | 'id'>
        & { title?: Maybe<Pick<SanityLocaleString, 'en'>>, slug?: Maybe<{ en?: Maybe<Pick<SanitySlug, 'current'>> }>, mainImage?: Maybe<(
          Pick<SanityCaptionImage, 'caption'>
          & { asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }
        )>, heroImage?: Maybe<(
          Pick<SanityCaptionImage, 'caption'>
          & { asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }
        )>, body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>> }
      ) }> }, futureExhibitions: { edges: Array<{ node: (
        Pick<SanityExhibition, 'dateStart' | 'dateEnd' | 'id'>
        & { title?: Maybe<Pick<SanityLocaleString, 'en'>>, slug?: Maybe<{ en?: Maybe<Pick<SanitySlug, 'current'>> }>, mainImage?: Maybe<(
          Pick<SanityCaptionImage, 'caption'>
          & { asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }
        )>, heroImage?: Maybe<(
          Pick<SanityCaptionImage, 'caption'>
          & { asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }
        )>, body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>> }
      ) }> }, pastExhibitions: { edges: Array<{ node: (
        Pick<SanityExhibition, 'dateStart' | 'dateEnd' | 'id'>
        & { title?: Maybe<Pick<SanityLocaleString, 'en'>>, slug?: Maybe<{ en?: Maybe<Pick<SanitySlug, 'current'>> }>, mainImage?: Maybe<(
          Pick<SanityCaptionImage, 'caption'>
          & { asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }
        )>, body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>> }
      ) }> } };

export type SinglePostQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type SinglePostQuery = { sanityPost?: Maybe<(
    Pick<SanityPost, 'id' | 'publishedAt'>
    & { body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, image?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }>, title?: Maybe<Pick<SanityLocaleString, 'en'>> }
  )> };

export type SingleVideoQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type SingleVideoQuery = { sanityVideo?: Maybe<(
    Pick<SanityVideo, 'id' | 'publishDate' | 'videoLink'>
    & { body?: Maybe<Pick<SanityLocaleRichText, '_rawEn'>>, mainImage?: Maybe<{ asset?: Maybe<Pick<SanityImageAsset, 'gatsbyImageData'>> }>, title?: Maybe<Pick<SanityLocaleString, 'en'>> }
  )> };
