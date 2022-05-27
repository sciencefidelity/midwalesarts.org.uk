import { FC } from "react"
import { useRouter } from "next/router"
import FooterContact from "components/footerContact"
import Signup from "components/signup"
import FooterLinks from "components/footerLinks"
import Logos from "components/logos"
import { Label, Organisation, Settings } from "lib/interfaces"

interface Props {
  labels: Label[]
  organisation: Organisation
  settings: Settings
}

export const Footer: FC<Props> = ({ labels, organisation, settings }) => {
  const { locale } = useRouter()
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="footerContainer">
        <FooterContact organisation={organisation} settings={settings} />
        <div className="footerRight">
          <Signup labels={labels} />
          <Logos />
          <FooterLinks social={settings.social} />
        </div>
        <p className="smallCopy">
          &copy;{" "}{settings.title[locale]}{" "}{year}
        </p>
      </div>
    </footer>
  )
}
