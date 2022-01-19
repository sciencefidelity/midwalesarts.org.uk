import React, { FC } from "react"

const year = new Date().getFullYear()

const FooterContact: FC = () => {
  return (
    <div>
      <p>
        Opening Times
        <br />
        Closed until 27 March 2022
      </p>
      <p>
        Mid Wales Arts
        <br />
        Caersws
        <br />
        Powys SY17 5SB
      </p>
      <p>
        +44 (0) 1686 688369
        <br />
        <a href="mailto:office@midwalesarts.org.uk">office@midwalesarts.org.uk</a>
      </p>
      <p className="copy">&copy; Mid Wales Arts {year}</p>
    </div>
  )
}

export default FooterContact
