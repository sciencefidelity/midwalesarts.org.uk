import { FC, useState } from "react"
import s from "styles/support.module.scss"

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
      <label htmlFor="honorific-prefix" style={{display:"block"}}>Title</label>
      <input
        type="text"
        value={title}
        onChange={e => {setTitle(e.target.value)}}
        name="honorific-prefix"
        id="honorific-prefix"
        style={{display:"block"}}
      />
      <label htmlFor="given-name" style={{display:"block"}}>First name</label>
      <input
        type="text"
        value={name}
        onChange={e => {setName(e.target.value)}}
        name="given-name"
        id="given-name"
        style={{display:"block"}}
      />
      <label htmlFor="family-name" style={{display:"block"}}>Surname</label>
      <input
        type="family-name"
        value={surname}
        onChange={e => {setSurname(e.target.value)}}
        name="family-name"
        id="family-name"
        style={{display:"block"}}
      />
      <label htmlFor="friend-name" style={{display:"block"}}>Joint friend&apos;s name</label>
      <input
        type="text"
        value={friendName}
        onChange={e => {setFriendName(e.target.value)}}
        name="friend-name"
        id="friend-name"
        style={{display:"block"}}
      />
      <label htmlFor="address-line1" style={{display:"block"}}>Address line 1</label>
      <input
        type="text"
        value={address1}
        onChange={e => {setAddress1(e.target.value)}}
        name="address-line1"
        id="address-line1"
        style={{display:"block"}}
      />
      <label htmlFor="address-line2" style={{display:"block"}}>Address line 2</label>
      <input
        type="text"
        value={address2}
        onChange={e => {setAddress2(e.target.value)}}
        name="address-line2"
        id="address-line2"
        style={{display:"block"}}
      />
      <label htmlFor="address-line3" style={{display:"block"}}>County</label>
      <input
        type="text"
        value={county}
        onChange={e => {setCounty(e.target.value)}}
        name="address-line3"
        id="address-line3"
        style={{display:"block"}}
      />
      <label htmlFor="postal-code" style={{display:"block"}}>Post code</label>
      <input
        type="text"
        value={postcode}
        onChange={e => {setPostcode(e.target.value)}}
        name="postal-code"
        id="postal-code"
        style={{display:"block"}}
      />
      <label htmlFor="tel" style={{display:"block"}}>Telephone</label>
      <input
        type="text"
        value={telephone}
        onChange={e => {setTelephone(e.target.value)}}
        name="tel"
        id="tel"
        style={{display:"block"}}
      />
      <label htmlFor="email" style={{display:"block"}}>Email address</label>
      <input
        type="email"
        value={email}
        onChange={e => {setEmail(e.target.value)}}
        name="email"
        style={{display:"block"}}
      />
      <label htmlFor="comment" style={{display:"block"}}>If a gift, message to recipient</label>
      <textarea
        name="text"
        value={message}
        onChange={e => {setMessage(e.target.value)}}
      ></textarea>
      <button type="submit" style={{display:"block"}}>{buttonText}</button>
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
