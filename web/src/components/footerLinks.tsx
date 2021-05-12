import * as React from 'react'

const FooterLinks = () => {
  return (
    <div className="linksMenuContainer">
      <ul className="linksMenu">
        <li>
          <a 
            href="http://facebook.com/MidWalesArtsCentre"
            target="_blank"
            rel="noopener"
          >Facebook</a>
        </li>
        <li>
          <a
            href="https://instagram.com/midwalesartscentre"
            target="_blank"
            rel="noopener"
          >Instagram</a>
        </li>
        <li>
          <a
            href="https://www.tripadvisor.ru/Attraction_Review-g1097182-d6510561-Reviews-Mid_Wales_Art_Gallery_and_Sculpture_Park-Caersws_Newtown_Powys_Wales.html"
            target="_blank"
            rel="noopener"
          >Tripadvisor</a>
        </li>
        <li>
          <a
            href="https://twitter.com/midwalesarts"
            target="_blank"
            rel="noopener"
          >Twitter</a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UC5XgQubTG7pYmRbpc9h2Dvg"
            target="_blank"
            rel="noopener"
          >YouTube</a>
        </li>
      </ul>
    </div>
  )
}

export default FooterLinks
