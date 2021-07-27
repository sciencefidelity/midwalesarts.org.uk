import React, { FC } from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

interface Props {
  exhibition: any
  heading: string
}

const ExhibitionPrieview: FC<Props> = ({ exhibition, heading }) => {
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

ExhibitionPrieview.propTypes = {
  exhibition: PropTypes.any.isRequired,
  heading: PropTypes.string.isRequired,
}

export default ExhibitionPrieview
