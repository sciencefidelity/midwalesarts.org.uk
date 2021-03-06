import { Label } from "lib/interfaces"
import s from "styles/footer.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
}

export function Signup({ labels }: Props) {
  return (
    <div className={`${s.signup}`}>
      <div className={`${s.signupHeading}`}>{labels[5].text}</div>
      <div className={`${s.signupForm}`}>
        <form
          action="https://midwalesarts.us8.list-manage.com/subscribe/post?u=886d00d2217d67cd8145db87b&amp;id=625e7cefb6"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <input
            type="text"
            name="email"
            placeholder={labels[6].text}
            className={`${s.signupInput}`}
          />
          <input
            type="image"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath d='M285 273L91 467c-9 10-24 10-34 0l-22-22c-10-10-10-25-1-34l155-155L34 101c-9-9-9-24 1-34l22-22c10-10 25-10 34 0l194 194c10 9 10 25 0 34z' fill='%23fff'/%3E%3C/svg%3E"
            className={`${s.signupSubmit} ${u.pointer}`}
            name="subscribe"
            id="mc-embedded-subscribe"
            alt={labels[7].text}
          />
          <div id="mce-responses">
            <div id="mce-error-response" style={{ display: "none" }} />
          </div>
          <div id="mce-success-response" style={{ display: "none" }} />
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_886d00d2217d67cd8145db87b_625e7cefb6"
              tabIndex={-1}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
