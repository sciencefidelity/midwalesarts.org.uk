import { Social } from "lib/interfaces"
import s from "styles/footer.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  social: Social[]
}

export function FooterLinks({ social }: Props) {
  return (
    <div className={`${s.linksMenuContainer}`}>
      <ul className={`${s.linksMenu} ${u.flex} ${u.uppercase}`}>
        {social &&
          social.map((link) => (
            <li key={link._key} className={`${s.linksMenuItem}`}>
              <a
                href={link.url}
                target="blank"
                rel="noreferrer"
                className={`${s.linksMenuLink}`}
              >
                {link.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  )
}
