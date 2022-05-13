import { AppProps } from "next/app"
import Script from "next/script"
import "styles/global.scss"
import "styles/footer.scss"
import "styles/header.scss"
import "styles/index.scss"
import "styles/navigation.scss"
import "styles/visit.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://plausible.io/js/plausible.js"
        data-domain="midwalesarts.org.uk"
      />
      <Component {...pageProps} />
    </>
  )
}
