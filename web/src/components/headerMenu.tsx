import React from "react"
import { Link } from "gatsby"

const HeaderMenu = () => (
  <div className="headerMenu">
    <div className="marker"></div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about/">About us</Link></li>
      <li><Link to="/artists/">Artists</Link></li>
      <li><Link to="/events/">Events</Link></li>
      <li><Link to="/exhibitions/">Exhibitions</Link></li>
      <li><Link to="/news/">News</Link></li>
      <li><Link to="/support/">Support us</Link></li>
      <li><Link to="/videos/">Videos</Link></li>
      <li><Link to="/visit/">Visit us</Link></li>
      <li><Link to="/workshops/">Workshops</Link></li>
    </ul>
  </div>
)

export default HeaderMenu
