import { AppProps } from "next/app"
import "styles/global.scss"
import "styles/footer.scss"
import "styles/header.scss"
import "styles/index.scss"
import "styles/navigation.scss"
// import "styles/support.scss"
import "styles/visit.scss"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
