import React, { FC } from "react"

const FooterLinks: FC = () => {
  return (
    <div className="linksMenuContainer">
      <ul className="linksMenu">
        <li>
          <a
            href="http://facebook.com/MidWalesArtsCentre"
            target="blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/midwalesartscentre"
            target="blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.tripadvisor.ru/Attraction_Review-g1097182-d6510561-Reviews-Mid_Wales_Art_Gallery_and_Sculpture_Park-Caersws_Newtown_Powys_Wales.html"
            target="blank"
            rel="noreferrer"
          >
            Tripadvisor
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/midwalesarts"
            target="blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UC5XgQubTG7pYmRbpc9h2Dvg"
            target="blank"
            rel="noreferrer"
          >
            YouTube
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FooterLinks
