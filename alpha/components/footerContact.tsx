import { FC } from "react"
import { useRouter } from "next/router"
import { LocaleString, Organisation, Settings } from "lib/interfaces"
import s from "styles/footer.module.scss"

interface Props {
  label: string
  organisation: Organisation
  settings: Settings
}

export const FooterContact: FC<Props> = ({ label, organisation, settings }) => {
  const { locale = "en" } = useRouter()
  const key: keyof LocaleString = locale === "cy" ? "cy" : "en"
  const year = new Date().getFullYear()
  return (
    <div>
      <p className={`${s.footerText}`}>
        <b>
          {label}
          <br />
        </b>
        {organisation.opening[key]}
      </p>
      <p className={`${s.footerText}`}>
        <b>{settings.title[key]}</b>
        <br />
        {organisation.address.town}
        <br />
        {organisation.address.county} {organisation.address.postcode}
      </p>
      <p className={`${s.footerText}`}>
        {organisation.telephone}
        <br />
        <a href={`mailto:${organisation.email}`} className={`${s.footerLink}`}>
          <b>{organisation.email}</b>
        </a>
      </p>
      <p className={`${s.footerText} ${s.copy}`}>
        &copy; {settings.title[key]} {year}
      </p>
    </div>
  )
}
