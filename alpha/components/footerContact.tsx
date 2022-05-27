import { FC } from "react"
import { useRouter } from "next/router"
import { LocaleString, Organisation, Settings } from "lib/interfaces"
import s from "styles/layout.module.scss"

interface Props {
  label: LocaleString
  organisation: Organisation
  settings: Settings
}

export const FooterContact: FC<Props> = ({ label, organisation, settings }) => {
  const { locale } = useRouter()
  const year = new Date().getFullYear()
  return (
    <div>
      <p>
        {label[locale]}<br />
        {organisation.opening[locale]}
      </p>
      <p>
        {settings.title[locale]}<br />
        {organisation.address.town}<br />
        {organisation.address.county}{" "}{organisation.address.postcode}
      </p>
      <p>
        {organisation.telephone}<br />
        <a href={`mailto:${organisation.email}`}>{organisation.email}</a>
      </p>
      <p className={`${s.copy}`}>
        &copy;{" "}{settings.title[locale]}{" "}{year}
      </p>
    </div>
  )
}
