import React, { useState } from "react"
import { Link } from "gatsby"

const Navigation = () => {
  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!isActive)
  }

  return (
    <>
      <div 
        className={isActive ? "headerMenu isActive" : "headerMenu"} 
      >
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
      <div className="nav">
        <div className="hamburgerContainer" onClick={toggleClass}>
          <div className={isActive ? "hamburger active" : "hamburger"} ></div>
        </div>
        <div className="languageSwitcher">CY</div>
        <div className="social">
          <a href="#">
            <img
              alt=""
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h137V328h-63v-72h63v-55c0-62 37-96 94-96 27 0 55 5 55 5v61h-31c-31 0-40 19-40 38v47h69l-11 72h-58v152h137a48 48 0 0048-48V80a48 48 0 00-48-48z' fill='%23596873'/%3E%3C/svg%3E"
              loading="lazy"
            />
          </a>
        </div>
        <div className="social">
          <a href="#">
            <img
              alt=""
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' fill='%23596873'/%3E%3C/svg%3E"
              loading="lazy"
            />
          </a>
        </div>
        <div className="social">
          <a href="#">
            <img
              alt=""
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M400 32H48C22 32 0 54 0 80v352c0 27 22 48 48 48h352c27 0 48-21 48-48V80c0-26-21-48-48-48zm-49 159v8c0 87-66 187-186 187-37 0-72-11-101-30a138 138 0 0097-27c-29 0-53-19-61-45 10 1 19 1 30-1-30-6-53-33-53-65v-1c9 5 19 8 30 9a65 65 0 01-30-55c0-12 4-23 9-33 33 40 81 66 136 69a66 66 0 01111-60c15-3 29-9 42-16-5 15-15 28-29 36 13-1 26-5 38-10-9 13-20 25-33 34z' fill='%23596873'/%3E%3C/svg%3E"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default Navigation
