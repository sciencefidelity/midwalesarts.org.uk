import { MouseEventHandler } from "react"
import { useRouter } from "next/router"
import { localize, urlFor } from "lib/utils"
import { Artwork, Label, Image } from "lib/interfaces"
import s from "styles/artist.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  closeModal: MouseEventHandler<HTMLButtonElement | HTMLDivElement>
  fallbackImage: Image
  labels: Label[]
  modal: boolean
  modalImage: Artwork | Record<string, never>
  prevIndex: MouseEventHandler<HTMLButtonElement>
  nextIndex: MouseEventHandler<HTMLButtonElement>
}

export function Modal({
  closeModal,
  fallbackImage,
  labels,
  modal,
  modalImage,
  prevIndex,
  nextIndex,
}: Props) {
  const { locale = "en" } = useRouter()
  // const aspect = modalImage.aspect
  // const imageAspect = {
  //   aspectRatio: aspect,
  //   height: `${aspect >= 1 ? "min(81vh, 51vw)" : "unset"}`,
  //   width: `${aspect < 1 ? "min(57vh, -4rem + 100vw)" : "unset"}`
  // } as CSSProperties
  return (
    <div
      className={`${s.modalContainer} ${modal ? "" : s.hideModal} ${u.flex} ${
        u.fixed
      }`}
    >
      <button
        className={`${s.btnPrev} ${u.absolute} ${u.pointer}`}
        onClick={prevIndex}
        type="button"
      >
        <span className={u.srOnly}>{labels[87].text}</span>
        <svg viewBox="0 0 54 104" xmlns="http://www.w3.org/2000/svg">
          <title>{labels[87].text}</title>
          <path
            d="M5.15 52.05l48.1 48.1c.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0L.75 53.45c-.8-.8-.8-2.1 0-2.9L50.35.95c.8-.8 2.1-.8 2.9 0 .8.8.8 2.1 0 2.9l-48.1 48.1v.1z"
            fill="#4C4C4C"
          />
        </svg>
      </button>
      <button
        className={`${s.btnNext} ${u.absolute} ${u.pointer}`}
        onClick={nextIndex}
        type="button"
      >
        <svg viewBox="0 0 54 104" xmlns="http://www.w3.org/2000/svg">
          <title>{labels[88].text}</title>
          <path
            d="M48.85 52.05l-48.1 48.1c-.8.8-.8 2.1 0 2.9.8.8 2.1.8 2.9 0l49.6-49.6c.8-.8.8-2.1 0-2.9L3.65.95c-.8-.8-2.1-.8-2.9 0-.8.8-.8 2.1 0 2.9l48.1 48.1v.1z"
            fill="#4C4C4C"
          />
        </svg>
      </button>
      <div
        className={`${s.handleClose} ${u.absolute}`}
        onClick={closeModal}
        onKeyDown={closeModal}
        role="button"
        tabIndex={0}
      />
      <button
        className={`${s.modalClose} ${u.absolute} ${u.pointer}`}
        onClick={closeModal}
        type="button"
      >
        <svg viewBox="0 0 104 104" xmlns="http://www.w3.org/2000/svg">
          <title>{labels[89].text}</title>
          <path
            d="M49.104 51.877L.949 3.722c-.8-.8-.8-2.1 0-2.9.8-.8 2.1-.8 2.9 0l48.1 48.1h.1l48.1-48.1c.8-.8 2.1-.8 2.9 0 .8.8.8 2.1 0 2.9L54.928 51.843l48.155 48.155c.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0l-48.1-48.1h-.1l-48.1 48.1c-.8.8-2.1.8-2.9 0-.8-.8-.8-2.1 0-2.9l48.121-48.121z"
            fill="#4C4C4C"
          />
        </svg>
      </button>
      <div className={`${s.modalImageContiner} ${u.mAuto}`}>
        <div className={`${s.modalImageWrapper} ${u.relative}`}>
          <img
            src={urlFor(modalImage?.mainImage ?? fallbackImage)
              .width(893)
              .auto("format")
              .quality(75)
              .url()}
            alt={`
              ${modalImage?.artist && `${modalImage.artist}, `}
              ${modalImage?.title && `${modalImage.title[key]}, `}
              ${modalImage?.date && modalImage.date}
            `}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <p className={`${s.modalCaption} ${u.textRight}`}>
          <em>
            {modalImage.title && localize(modalImage.title, locale) + ", "}
          </em>
          {modalImage.artist}
        </p>
        <p className={`${s.modalCaption} ${u.textRight}`}>
          {modalImage.medium && localize(modalImage.medium, locale) + ", "}
          {modalImage.price}
        </p>
      </div>
    </div>
  )
}
