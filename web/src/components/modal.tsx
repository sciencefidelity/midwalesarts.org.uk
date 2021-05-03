import * as React from 'react'
import PropTypes from 'prop-types'

import '../scss/footer.scss'

const Modal = () => (
  <aside>
    <div className="modalContainer">
      <div className="modalImageContiner">
        <img src="https://source.unsplash.com/random" />
        <p className="modalCaption">Stefan Knapp, Section of Abstract Enamel, 1960</p>
        <p className="modalCaption">Enamel on Steel, not for sale</p>
      </div>
      <img
        alt=""
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 352 512'%3E%3Cpath d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z' fill='%23ffffff'/%3E%3C/svg%3E"
        loading="lazy"
        className="modalClose"
      />
    </div>
  </aside>
)

Modal.propTypes = {
  siteTitle: PropTypes.string,
}

Modal.defaultProps = {
  siteTitle: ``,
}

export default Modal