import { FC } from "react"
import { Social } from "lib/interfaces"
import s from "styles/layout.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  social: Social[]
}

export const FooterLinks: FC<Props> = ({ social }) => {
  return (
    <div className={`${s.linksMenuContainer}`}>
      <ul className={`${s.linksMenu} ${u.flex} ${u.uppercase}`}>
        {social && social.map(link => (
          <li key={link._key}>
            <a href={link.url} target="blank" rel="noreferrer">{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
