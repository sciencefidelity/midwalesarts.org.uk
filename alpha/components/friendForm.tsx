import { FC, useState } from "react"
import s from "styles/support.module.scss"
import u from "styles/utils.module.scss"

export const FriendForm: FC = () => {
  const [title, setTitle] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [friendName, setFriendName] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [county, setCounty] = useState("")
  const [postcode, setPostcode] = useState("")
  const [telephone, setTelephone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [buttonText, setButtonText] = useState("Send")
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setButtonText("Sending")
    const res = await fetch("/api/friend", {
      body: JSON.stringify({
        title: title,
        name: name,
        surname: surname,
        friendName: friendName,
        address1: address2,
        address2: address2,
        county: county,
        postcode: postcode,
        telephone: telephone,
        email: email,
        message: message
      }),
      headers: {"Content-Type": "application/json"},
      method: "POST"
    })
    const { error } = await res.json()
    if (error) {
      console.log(error)
      setShowSuccessMessage(false)
      setShowFailureMessage(true)
      setButtonText("Send")
      setTitle("")
      setName("")
      setSurname("")
      setFriendName("")
      setAddress1("")
      setAddress2("")
      setCounty("")
      setPostcode("")
      setTelephone("")
      setEmail("")
      setMessage("")
      return
    }
    setShowSuccessMessage(true)
    setShowFailureMessage(false)
    setButtonText("Send")
    setTitle("")
    setName("")
    setSurname("")
    setFriendName("")
    setAddress1("")
    setAddress2("")
    setCounty("")
    setPostcode("")
    setTelephone("")
    setEmail("")
    setMessage("")
  }
  return (
    <form onSubmit={handleSubmit} className={s.friendForm}>
      <div className={`${s.formGrid} ${u.grid}`}>
        <label htmlFor="honorific-prefix" className={`${u.hidden}`}>
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={e => {setTitle(e.target.value)}}
          placeholder="Title"
          name="honorific-prefix"
          id="honorific-prefix"
          className={`${u.block}`}
        />
        <label htmlFor="given-name" className={`${u.hidden}`}>
          First name
        </label>
        <input
          type="text"
          value={name}
          onChange={e => {setName(e.target.value)}}
          placeholder="First name"
          name="given-name"
          id="given-name"
          className={`${u.block}`}
        />
        <label htmlFor="family-name" className={`${u.hidden}`}>
          Surname
        </label>
        <input
          type="family-name"
          value={surname}
          onChange={e => {setSurname(e.target.value)}}
          placeholder="Surname"
          name="family-name"
          id="family-name"
          className={`${u.block}`}
        />
        <label htmlFor="friend-name" className={`${u.hidden}`}>
          Joint friend&apos;s name
        </label>
        <input
          type="text"
          value={friendName}
          onChange={e => {setFriendName(e.target.value)}}
          placeholder="Joint friend's name"
          name="friend-name"
          id="friend-name"
          className={`${u.block}`}
        />
        <label htmlFor="address-line1" className={`${u.hidden}`}>
          Address line 1
        </label>
        <input
          type="text"
          value={address1}
          onChange={e => {setAddress1(e.target.value)}}
          placeholder="Address line 1"
          name="address-line1"
          id="address-line1"
          className={`${u.block}`}
        />
        <label htmlFor="address-line2" className={`${u.hidden}`}>
          Address line 2
        </label>
        <input
          type="text"
          value={address2}
          onChange={e => {setAddress2(e.target.value)}}
          placeholder="Address line 2"
          name="address-line2"
          id="address-line2"
          className={`${u.block}`}
        />
        <label htmlFor="address-line3" className={`${u.hidden}`}>
          County
        </label>
        <input
          type="text"
          value={county}
          onChange={e => {setCounty(e.target.value)}}
          placeholder="Address line 3"
          name="address-line3"
          id="address-line3"
          className={`${u.block}`}
        />
        <label htmlFor="postal-code" className={`${u.hidden}`}>
          Post code
        </label>
        <input
          type="text"
          value={postcode}
          onChange={e => {setPostcode(e.target.value)}}
          placeholder="Post code"
          name="postal-code"
          id="postal-code"
          className={`${u.block}`}
        />
        <label htmlFor="tel" className={`${u.hidden}`}>
          Telephone
        </label>
        <input
          type="text"
          value={telephone}
          onChange={e => {setTelephone(e.target.value)}}
          placeholder="Telephone"
          name="tel"
          id="tel"
          className={`${u.block}`}
        />
        <label htmlFor="email" className={`${u.hidden}`}>
          Email address
        </label>
        <input
          type="email"
          value={email}
          onChange={e => {setEmail(e.target.value)}}
          placeholder="Email address"
          name="email"
          className={`${u.block}`}
        />
      </div>
      <label htmlFor="comment" className={`${u.block}`}>
        If this is a gift, please write a message to the recipient below...
      </label>
      <textarea
        value={message}
        onChange={e => {setMessage(e.target.value)}}
        name="comment"
        className={`${u.block}`}
        rows={6}
      ></textarea>
      <button type="submit" className={`${u.block} ${u.pointer}`}>
        {buttonText}
      </button>
      <div>
        {showSuccessMessage && (
          <p>Thankyou! Your Message has been delivered.</p>
        )}
        {showFailureMessage && (
          <p>Oops! Something went wrong, please try again.</p>
        )}
      </div>
    </form>
  )
}
