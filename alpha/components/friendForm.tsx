import { FC, useState } from "react"
import s from "styles/support.module.scss"
import u from "styles/utils.module.scss"

export const FriendForm: FC = () => {
  const [honorificPrefix, setHonorificPrefix] = useState("")
  const [givenName, setGivenName] = useState("")
  const [familyName, setFamilyName] = useState("")
  const [friend, setFriend] = useState("")
  const [addressLine1, setAddressLine1] = useState("")
  const [addressLine2, setAddressLine2] = useState("")
  const [addressLine3, setAddressLine3] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [tel, setTel] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [otherReason, setOtherReason] = useState("")
  const [buttonText, setButtonText] = useState("Send")
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setButtonText("Sending")
    const res = await fetch("/api/friend", {
      body: JSON.stringify({
        honorificPrefix: honorificPrefix,
        givenName: givenName,
        familyName: familyName,
        friend: friend,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        addressLine3: addressLine3,
        postalCode: postalCode,
        tel: tel,
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
      setHonorificPrefix("")
      setGivenName("")
      setFamilyName("")
      setFriend("")
      setAddressLine1("")
      setAddressLine2("")
      setAddressLine3("")
      setPostalCode("")
      setTel("")
      setEmail("")
      setMessage("")
      setOtherReason("")
      return
    }
    setShowSuccessMessage(true)
    setShowFailureMessage(false)
    setButtonText("Send")
    setHonorificPrefix("")
    setGivenName("")
    setFamilyName("")
    setFriend("")
    setAddressLine1("")
    setAddressLine2("")
    setAddressLine3("")
    setPostalCode("")
    setTel("")
    setEmail("")
    setMessage("")
    setOtherReason("")
  }
  return (
    <form onSubmit={handleSubmit} className={s.friendForm}>
      <div className={`${s.friendGift} ${u.flex}`}>
        <div>
          <input type="radio" id="friend" name="reasons" value="I would like to become a friend" />
          <label htmlFor="friend">I would like to become a friend</label>
        </div>
        <div>
          <input type="radio" id="gift" name="reasons" value="I would like to give as a gift" />
          <label htmlFor="gift">I would like to give as a gift</label>
        </div>
      </div>
      <div className={`${s.formGrid} ${u.grid}`}>
        <label htmlFor="givenName" className={`${u.hidden}`}>
          First name
        </label>
        <input
          type="text"
          value={givenName}
          onChange={e => {setGivenName(e.target.value)}}
          placeholder="First name"
          name="given-name"
          id="given-name"
          className={`${u.block}`}
        />
        <label htmlFor="honorific-prefix" className={`${u.hidden}`}>
          Title (Mr, Mrs, ...)
        </label>
        <input
          type="text"
          value={honorificPrefix}
          onChange={e => {setHonorificPrefix(e.target.value)}}
          placeholder="Title"
          name="honorific-prefix"
          id="honorific-prefix"
          className={`${u.block}`}
        />
        <label htmlFor="family-name" className={`${u.hidden}`}>
          Surname
        </label>
        <input
          type="text"
          value={familyName}
          onChange={e => {setFamilyName(e.target.value)}}
          placeholder="Surname"
          name="family-name"
          id="family-name"
          className={`${u.block}`}
        />
        <label htmlFor="friend" className={`${u.hidden}`}>
          Joint friend&apos;s name
        </label>
        <input
          type="text"
          value={friend}
          onChange={e => {setFriend(e.target.value)}}
          placeholder="Joint friend's name"
          name="friend"
          id="friend"
          className={`${u.block}`}
        />
        <label htmlFor="address-line1" className={`${u.hidden}`}>
          Address line 1
        </label>
        <input
          type="text"
          value={addressLine1}
          onChange={e => {setAddressLine1(e.target.value)}}
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
          value={addressLine2}
          onChange={e => {setAddressLine2(e.target.value)}}
          placeholder="Address line 2"
          name="address-line2"
          id="address-line2"
          className={`${u.block}`}
        />
        <label htmlFor="address-line3" className={`${u.hidden}`}>
          Address line 3
        </label>
        <input
          type="text"
          value={addressLine3}
          onChange={e => {setAddressLine3(e.target.value)}}
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
          value={postalCode}
          onChange={e => {setPostalCode(e.target.value)}}
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
          value={tel}
          onChange={e => {setTel(e.target.value)}}
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
          id="email"
          className={`${u.block}`}
        />
      </div>
      <label htmlFor="comment" className={`${s.comment} ${u.block}`}>
        If this is a gift, please write a message to the recipient below...
      </label>
      <textarea
        value={message}
        onChange={e => {setMessage(e.target.value)}}
        name="comment"
        id="comment"
        className={`${u.block}`}
        rows={4}
      ></textarea>
      <p>Reason for joining</p>
      <div className={`${s.reasons} ${u.flex}`}>
        <div>
          <input
            type="radio"
            id="reason1"
            name="reasons"
            value="To support mid wales arts"
          />
          <label htmlFor="reason1">To support mid wales arts</label>
        </div>
        <div>
          <input
            type="radio"
            id="reason2"
            name="reasons"
            value="To be invited to openings"
          />
          <label htmlFor="reason2">To be invited to openings</label>
        </div>
        <div>
          <input
            type="radio"
            id="reason3"
            name="reasons"
            value="To meet fellow art lovers"
          />
          <label htmlFor="reason3">To meet fellow art lovers</label>
        </div>
        <div>
          <input
            type="radio"
            id="reason4"
            name="reasons"
            value="To learn more about art"
          />
          <label htmlFor="reason4">To learn more about art</label>
        </div>
        <div>
          <input
            type="radio"
            id="reason5"
            name="reasons"
            value="Other, please state..."
          />
          <label htmlFor="reason5">Other, please state...</label>
        </div>
        <label htmlFor="otherReason" className={`${u.hidden}`}>
          Other reason
        </label>
        <input
          type="text"
          value={otherReason}
          onChange={e => {setEmail(e.target.value)}}
          // placeholder="Other reason"
          name="other-reason"
          className={`${s.other} ${u.block}`}
        />
      </div>
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
