import type { AppProps } from "next/app"
import Script from "next/script"
import "modern-normalize"
import "styles/global.scss"

function MyApp({ Component, pageProps }: AppProps) {
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

export default MyApp
