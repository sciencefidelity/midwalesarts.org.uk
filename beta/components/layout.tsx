import { FC } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import Header from "components/header"
import Footer from "components/footer"
import Scrollup from "components/scrollup"
import { LayoutProps } from "lib/interfaces"

const Layout: FC<LayoutProps> = ({
  caption,
  children,
  heroImage,
  menu,
  site,
  socialLinks,
  title
}) => {
  const { locale } = useRouter()
  const metaTitle = title === undefined ? `
    ${locale === "cy" && site.siteName.cy ? site.siteName.cy : site.siteName.en}
    ${" | "}
    ${locale === "cy" && site.seoDescription.cy ? site.seoDescription.cy : site.seoDescription.en}
  ` : `
    ${title}
    ${" | "}
    ${locale === "cy" && site.siteName.cy ? site.siteName.cy : site.siteName.en}
  `
  return (
    <div>
      <Head>
        <title>{metaTitle}</title>
        {site.seoDescription && <meta
          name="Description"
          content={locale === "cy" && site.seoDescription.cy ? site.seoDescription.cy : site.seoDescription.en}
        />}
        <meta name="keywords" content={site.keywords.en} />
        <link
          rel="preload"
          href="/fonts/brandongrotesque-regular-lat.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/brandongrotesque-bold-lat.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/halisr-book-mwa.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/halisr-book-mwa.woff2"
          as="font"
          crossOrigin=""
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#424A4A" />
      </Head>
      <Header heroImage={heroImage} caption={caption} menu={menu} />
      <main>
        {children}
        <Scrollup />
      </main>
      <Footer site={site} socialLinks={socialLinks} />
    </div>
  )
}
export default Layout
