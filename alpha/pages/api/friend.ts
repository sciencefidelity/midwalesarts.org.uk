import sanityClient from "@sanity/client"

async function sendComment(req, res) {
  const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2021-09-20",
    token: process.env.SANITY_API_TOKEN || "",
    useCdn: true
  })
  const doc = {
    _type: "friend",
    title: req.body.title,
    name: req.body.name,
    surname: req.body.surname,
    friendName: req.body.friendName,
    address1: req.body.address2,
    address2: req.body.address2,
    county: req.body.county,
    postcode: req.body.postcode,
    telephone: req.body.telephone,
    email: req.body.email,
    message: req.body.message
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
export default sendComment
