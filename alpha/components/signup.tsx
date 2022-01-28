import { useRouter } from "next/router"
import { Site } from "@/generated/schema"

const Signup = ({ site }: { site: Site }) => {
  const { locale } = useRouter()
  return (
    <div className="signup">
      <div className="signupHeading">
        {locale === "cy" && site.signUp.cy ? site.signUp.cy : site.signUp.en}
      </div>
      <div className="signupForm">
        <form
          action="https://midwalesarts.us8.list-manage.com/subscribe/post?u=886d00d2217d67cd8145db87b&amp;id=625e7cefb6"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <input
            type="text"
            name="email"
            placeholder={
              locale === "cy" && site.signUpPlaceholder.cy
                ? site.signUpPlaceholder.cy
                : site.signUpPlaceholder.en
            }
            className="signupInput"
          />
          <input
            type="image"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath d='M285 273L91 467c-9 10-24 10-34 0l-22-22c-10-10-10-25-1-34l155-155L34 101c-9-9-9-24 1-34l22-22c10-10 25-10 34 0l194 194c10 9 10 25 0 34z' fill='%23fff'/%3E%3C/svg%3E"
            className="signupSubmit"
            name="subscribe"
            id="mc-embedded-subscribe"
            alt="subscribe to our newsletter"
          />
          <div id="mce-responses">
            <div id="mce-error-response" style={{ display: `none` }}></div>
          </div>
          <div id="mce-success-response" style={{ display: `none` }}></div>
          <div
            style={{ position: `absolute`, left: `-5000px` }}
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

export default Signup
