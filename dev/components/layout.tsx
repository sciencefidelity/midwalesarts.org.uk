import { ReactNode } from "react"
import Head from "next/head"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Scrollup from "@/components/scrollup"
import styles from "@/components/layout.module.scss"
// import utilStyles from "@/styles/utils.module.scss"

const Layout = ({ children, heroImage, heroImageCaption }: {
  children: ReactNode
  heroImage: string
  heroImageCaption: {
    en: string
    cy: string
  }
}) => {
  return (
    <div className={styles.container}>
      <Head>

      </Head>
      <Header heroImage={heroImage} heroImageCaption={heroImageCaption} />

      <main>
        {children}
        <Scrollup />
      </main>

      <Footer />
    </div>
  )
}
export default Layout
