import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ExhibitionPrieview = ({ exhibition, heading }) => {
  return (
    <div className="exhibitionPreview">
      <p>{heading}</p>
      <Link
        to={`/exhibitions/${!!exhibition && exhibition.slug.en.current}/`}
        style={{ margin: 0 }}
      >
        <GatsbyImage
          image={!!exhibition && exhibition.mainImage.asset.gatsbyImageData}
          alt={!!exhibition && exhibition.mainImage.caption}
          className="gridImage"
        />
        <div className="gridCaption">{!!exhibition && exhibition.title.en}</div>
        <div className="gridCaption">
          {exhibition && (
            <span>
              {exhibition.dateStart} to {exhibition.dateEnd}
            </span>
          )}
        </div>
      </Link>
    </div>
  )
}

export default ExhibitionPrieview
