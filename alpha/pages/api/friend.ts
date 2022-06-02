import sanityClient from "@sanity/client"

async function sendFriendForm(req, res) {
  const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2021-09-20",
    token: process.env.SANITY_API_TOKEN || "",
    useCdn: true
  })
  const doc = {
    _type: "friend",
    processed: false,
    friendGift: req.body.friendGift,
    givenName: req.body.givenName,
    familyName: req.body.familyName,
    honorificPrefix: req.body.honorificPrefix,
    friend: req.body.friend,
    addressLine1: req.body.addressLine1,
    addressLine2: req.body.addressLine2,
    addressLine3: req.body.addressLine3,
    postalCode: req.body.postalCode,
    tel: req.body.tel,
    email: req.body.email,
    message: req.body.message,
    reason: req.body.reason,
    otherReason: req.body.otherReason,
    giftAid: req.body.giftAid
  }
  try {
    await client.create(doc).then(res => {
      console.log(`A friend was created, document ID is ${res._id}`)
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
  return res.status(200).json({ success: "message sent" })
}
export default sendFriendForm
