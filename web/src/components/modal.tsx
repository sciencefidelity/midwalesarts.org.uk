import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const Modal = (props: any) => {
  return (
    <div
      className={props.modal ? "modalContainer hideModal" : "modalContainer"}
    >
      <div className="btnPrev" onClick={props.prevIndex}>
        <img
          alt="Previous image"
          src="data:image/svg+xml,%3Csvg viewBox='0 0 54 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.15 52.05l48.1 48.1c.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0L.75 53.45c-.8-.8-.8-2.1 0-2.9L50.35.95c.8-.8 2.1-.8 2.9 0 .8.8.8 2.1 0 2.9l-48.1 48.1v.1z' fill='%234C4C4C'/%3E%3C/svg%3E"
          loading="lazy"
        />
      </div>
      <div className="btnNext" onClick={props.nextIndex}>
        <img
          alt="Next image"
          src="data:image/svg+xml,%3Csvg viewBox='0 0 54 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M48.85 52.05l-48.1 48.1c-.8.8-.8 2.1 0 2.9.8.8 2.1.8 2.9 0l49.6-49.6c.8-.8.8-2.1 0-2.9L3.65.95c-.8-.8-2.1-.8-2.9 0-.8.8-.8 2.1 0 2.9l48.1 48.1v.1z' fill='%234C4C4C'/%3E%3C/svg%3E"
        />
      </div>
      <div className="handleClose" onClick={props.closeModal}></div>
      <div className="modalClose" onClick={props.closeModal}>
        <img
          alt="Close lightbox"
          src="data:image/svg+xml,%3Csvg viewBox='0 0 104 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M49.104 51.877L.949 3.722c-.8-.8-.8-2.1 0-2.9.8-.8 2.1-.8 2.9 0l48.1 48.1h.1l48.1-48.1c.8-.8 2.1-.8 2.9 0 .8.8.8 2.1 0 2.9L54.928 51.843l48.155 48.155c.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0l-48.1-48.1h-.1l-48.1 48.1c-.8.8-2.1.8-2.9 0-.8-.8-.8-2.1 0-2.9l48.121-48.121z' fill='%234C4C4C'/%3E%3C/svg%3E"
        />
      </div>
      <div className="modalImageContiner">
        <GatsbyImage
          image={props.modalImage.artworkModalImage.asset.gatsbyImageData}
          alt={`${props.modalImage.artist}, ${props.modalImage.title.en}, ${props.modalImage.date}`}
        />
        <p className="modalCaption">
          <em>{props.modalImage.title.en}</em>, {props.modalImage.artist}
        </p>
        <p className="modalCaption">
          {props.modalImage.medium.en}, {props.modalImage.price}
        </p>
      </div>
    </div>
  )
}

export default Modal
