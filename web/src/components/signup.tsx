import * as React from 'react'

const Signup = () => {
  return (
    <div className="signup">
      <div className="signupHeading">Sign up to our mailing list</div>
      <div className="signupForm">
        <form>
          <label>
            <input
              type="text"
              name="email"
              placeholder="Email address..."
              className="signupInput"
            />
          </label>
          <input 
            type="image"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath d='M285 273L91 467c-9 10-24 10-34 0l-22-22c-10-10-10-25-1-34l155-155L34 101c-9-9-9-24 1-34l22-22c10-10 25-10 34 0l194 194c10 9 10 25 0 34z' fill='%23fff'/%3E%3C/svg%3E"
            alt=""
            className="signupSubmit"
          />
        </form>
      </div>
    </div>
  )
}

export default Signup
