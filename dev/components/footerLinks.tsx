import { Social } from "@/generated/schema"

const FooterLinks = ({ socialLinks }: { socialLinks: {
  socialLinks: Social[]
}}) => {
  return (
    <div className="linksMenuContainer">
      <ul className="linksMenu">
        {socialLinks.socialLinks.map((link: Social) => (
          <li key={link._id}>
            <a
              href={link.link}
              target="blank"
              rel="noreferrer"
            >
              {link.site}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinks
