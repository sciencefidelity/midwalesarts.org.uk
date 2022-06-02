import { ChangeEvent, FC, useState } from "react"
import { Label } from "lib/interfaces"
import s from "styles/support.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
}

export const FriendForm: FC<Props> = ({ labels }) => {
  const [friendGift, setFriendGift] = useState("")
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
  const [reason, setReason] = useState("")
  const [otherReason, setOtherReason] = useState("")
  const [giftAid, setGiftAid] = useState(false)
  const [buttonText, setButtonText] = useState(labels[80].text)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setButtonText(labels[81].text)
    const res = await fetch("/api/friend", {
      body: JSON.stringify({
        friendGift: friendGift,
        givenName: givenName,
        familyName: familyName,
        honorificPrefix: honorificPrefix,
        friend: friend,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        addressLine3: addressLine3,
        postalCode: postalCode,
        tel: tel,
        email: email,
        message: message,
        reason: reason,
        otherReason: otherReason,
        giftAid: giftAid
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
      setFriendGift("")
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
      setReason("")
      setOtherReason("")
      setGiftAid(false)
      return
    }
    setShowSuccessMessage(true)
    setShowFailureMessage(false)
    setButtonText("Send")
    setFriendGift("")
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
    setReason("")
    setOtherReason("")
    setGiftAid(false)
  }
  const handleFriendGiftChange = (event: ChangeEvent) => {
    setFriendGift((event.target as HTMLInputElement).value)
  }
  const handleReasonChange = (event: ChangeEvent) => {
    setReason((event.target as HTMLInputElement).value)
  }
  const handleGiftAidChange = () => {
    setGiftAid(!giftAid)
  }
  return (
    <form onSubmit={handleSubmit} className={s.friendForm}>
      <div className={`${s.friendGift} ${u.flex}`}>
        <div>
          <input
            type="radio"
            id="me"
            name="friend-gift"
            value="I would like to become a friend"
            checked={friendGift === "I would like to become a friend"}
            onChange={handleFriendGiftChange}
          />
          <label htmlFor="me">{labels[57].text}</label>
        </div>
        <div>
          <input
            type="radio"
            id="gift"
            name="friend-gift"
            value="I would like to give as a gift"
            checked={friendGift === "I would like to give as a gift"}
            onChange={handleFriendGiftChange}
          />
          <label htmlFor="gift">{labels[58].text}</label>
        </div>
      </div>
      <div className={`${s.formGrid} ${u.grid}`}>
        <label htmlFor="givenName" className={`${u.hidden}`}>
          {labels[59].text}
        </label>
        <input
          type="text"
          value={givenName}
          onChange={e => {setGivenName(e.target.value)}}
          placeholder={labels[59].text}
          name="given-name"
          id="given-name"
          className={`${u.block}`}
        />
        <label htmlFor="family-name" className={`${u.hidden}`}>
          {labels[60].text}
        </label>
        <input
          type="text"
          value={familyName}
          onChange={e => {setFamilyName(e.target.value)}}
          placeholder={labels[60].text}
          name="family-name"
          id="family-name"
          className={`${u.block}`}
        />
        <label htmlFor="honorific-prefix" className={`${u.hidden}`}>
          {labels[61].text}
        </label>
        <input
          type="text"
          value={honorificPrefix}
          onChange={e => {setHonorificPrefix(e.target.value)}}
          placeholder={labels[61].text}
          name="honorific-prefix"
          id="honorific-prefix"
          className={`${u.block}`}
        />
        <label htmlFor="friend" className={`${u.hidden}`}>
          {labels[62].text}
        </label>
        <input
          type="text"
          value={friend}
          onChange={e => {setFriend(e.target.value)}}
          placeholder={labels[62].text}
          name="friend"
          id="friend"
          className={`${u.block}`}
        />
        <label htmlFor="address-line1" className={`${u.hidden}`}>
          {labels[63].text}
        </label>
        <input
          type="text"
          value={addressLine1}
          onChange={e => {setAddressLine1(e.target.value)}}
          placeholder={labels[63].text}
          name="address-line1"
          id="address-line1"
          className={`${u.block}`}
        />
        <label htmlFor="address-line2" className={`${u.hidden}`}>
          {labels[64].text}
        </label>
        <input
          type="text"
          value={addressLine2}
          onChange={e => {setAddressLine2(e.target.value)}}
          placeholder={labels[64].text}
          name="address-line2"
          id="address-line2"
          className={`${u.block}`}
        />
        <label htmlFor="address-line3" className={`${u.hidden}`}>
          {labels[65].text}
        </label>
        <input
          type="text"
          value={addressLine3}
          onChange={e => {setAddressLine3(e.target.value)}}
          placeholder={labels[65].text}
          name="address-line3"
          id="address-line3"
          className={`${u.block}`}
        />
        <label htmlFor="postal-code" className={`${u.hidden}`}>
          {labels[66].text}
        </label>
        <input
          type="text"
          value={postalCode}
          onChange={e => {setPostalCode(e.target.value)}}
          placeholder={labels[66].text}
          name="postal-code"
          id="postal-code"
          className={`${u.block}`}
        />
        <label htmlFor="tel" className={`${u.hidden}`}>
          {labels[67].text}
        </label>
        <input
          type="text"
          value={tel}
          onChange={e => {setTel(e.target.value)}}
          placeholder={labels[67].text}
          name="tel"
          id="tel"
          className={`${u.block}`}
        />
        <label htmlFor="email" className={`${u.hidden}`}>
          {labels[68].text}
        </label>
        <input
          type="email"
          value={email}
          onChange={e => {setEmail(e.target.value)}}
          placeholder={labels[68].text}
          name="email"
          id="email"
          className={`${u.block}`}
        />
      </div>
      <label htmlFor="comment" className={`${s.comment} ${u.block}`}>
        {labels[69].text}
      </label>
      <textarea
        value={message}
        onChange={e => {setMessage(e.target.value)}}
        name="comment"
        id="comment"
        className={`${u.block}`}
        rows={4}
      ></textarea>
      <p>{labels[70].text}</p>
      <div className={`${s.reasons} ${u.flex}`}>
        <div>
          <input
            type="radio"
            id="reason1"
            name="reasons"
            value="To support Mid Wales Arts"
            checked={reason === "To support Mid Wales Arts"}
            onChange={handleReasonChange}
          />
          <label htmlFor="reason1">{labels[71].text}</label>
        </div>
        <div>
          <input
            type="radio"
            id="reason2"
            name="reasons"
            value="To be invited to openings"
            checked={reason === "To be invited to openings"}
            onChange={handleReasonChange}
          />
          <label htmlFor="reason2">{labels[72].text}</label>
        </div>
        <div>
          <input
            type="radio"
            id="reason3"
            name="reasons"
            value="To meet fellow art lovers"
            checked={reason === "To meet fellow art lovers"}
            onChange={handleReasonChange}
          />
          <label htmlFor="reason3">{labels[73].text}</label>
        </div>
        <div>
          <input
            type="radio"
            id="reason4"
            name="reasons"
            value="To learn more about art"
            checked={reason === "To learn more about art"}
            onChange={handleReasonChange}
          />
          <label htmlFor="reason4">{labels[74].text}</label>
        </div>
        <div>
          <input
            type="radio"
            id="reason5"
            name="reasons"
            value="Other, please state..."
            checked={reason === "Other, please state..."}
            onChange={handleReasonChange}
          />
          <label htmlFor="reason5">{labels[75].text}</label>
        </div>
        <label htmlFor="other-reason" className={`${u.hidden}`}>
          {labels[76].text}
        </label>
        <input
          type="text"
          value={otherReason}
          onChange={e => {setOtherReason(e.target.value)}}
          // placeholder="Other reason"
          name="other-reason"
          id="other-reason"
          className={`${s.other} ${u.block}`}
        />
      </div>
      <div className={`${s.giftAid}`}>
        <h3>{labels[77].text}</h3>
        <p>{labels[78].text}</p>
        <div className={`${u.flex}`}>
          <input
            type="checkbox"
            value="Gift Aid"
            name="gift-aid"
            id="gift-aid"
            checked={giftAid}
            onChange={handleGiftAidChange}
            className={`${s.other} ${u.block}`}
          />
          <label htmlFor="gift-aid">
            {labels[79].text}
          </label>
        </div>
      </div>

      <button type="submit" className={`${u.block} ${u.pointer}`}>
        {buttonText}
      </button>
      <div className={`${s.successFailure}`}>
        {showSuccessMessage && (
          <p>{labels[82].text}</p>
        )}
        {showFailureMessage && (
          <p>{labels[83].text}</p>
        )}
      </div>
    </form>
  )
}
