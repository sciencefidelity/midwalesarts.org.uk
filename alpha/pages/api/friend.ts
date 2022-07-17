import sanityClient from "@sanity/client";
import sendgrid from "@sendgrid/mail";

interface Request {
  body: {
    friendGift: string;
    givenName: string;
    familyName: string;
    honorificPrefix: string;
    friend: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    postalCode: string;
    tel: string;
    email: string;
    message: string;
    reason: string;
    otherReason: string;
    giftAid: string;
  };
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY ?? "");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function sendFriendForm(req: Request, res: any) {
  const subject = "MWA Website - New Friend Application";
  const name = `${req.body.givenName} ${req.body.familyName}`;
  const descripton = "Friends of Mid Wales Arts - Annual membership form";
  const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2021-09-20",
    token: process.env.SANITY_API_TOKEN || "",
    useCdn: true,
  });
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
    giftAid: req.body.giftAid,
  };
  try {
    // eslint-disable-next-line promise/always-return
    await client.create(doc).then((_res) => {
      // eslint-disable-next-line no-console
      console.log(`A friend was created, document ID is ${_res._id}`);
    });
    await sendgrid
      .send({
        to: "Office <office@midwalesarts.org.uk>",
        from: "MWA Website <office@midwalesarts.org.uk>",
        replyTo: `${name} <${req.body.email}>`,
        subject: `${subject}`,
        // prettier-ignore
        html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <title>${subject}</title>
            <meta name="description" content="${descripton}">
          </head>
          <body>
            <p>Who is becoming a friend: ${req.body.friendGift ?? "unspecified"}</p>
            <p>Title: ${req.body.honorificPrefix ?? "unspecified"}</p>
            <p>First Name: ${req.body.givenName ?? "unspecified"}</p>
            <p>Surame: ${req.body.familyName ?? "unspecified"}</p>
            <p>Joint friend's name: ${req.body.friend ?? "unspecified"}</p>
            <p>Address line 1: ${req.body.addressLine1 ?? "unspecified"}</p>
            <p>Address line 2: ${req.body.addressLine2 ?? "unspecified"}</p>
            <p>Address line 3: ${req.body.addressLine3 ?? "unspecified"}</p>
            <p>Postcode: ${req.body.postalCode ?? "unspecified"}</p>
            <p>Telephone: ${req.body.tel ?? "unspecified"}</p>
            <p>Email address: <a href="mailto:${req.body.email ?? "unspecified"}">
              ${req.body.email ?? "unspecified"}
            </a></p>
            <p>If this is a gift, message to recipient...: ${req.body.message ?? "unspecified"}</p>
            <p>Reason for joining: ${req.body.reason ?? "unspecified"}</p>
            <p>Other reason: ${req.body.otherReason ?? "unspecified"}</p>
            <p>Gift Aid: ${req.body.giftAid ? "YES" : "NO"}</p>
          </body>
        </html>
      `,
      })
      // eslint-disable-next-line promise/always-return
      .then(() => {
        // eslint-disable-next-line no-console
        console.log("Email sent");
      });
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      return res.status(500).json({ error: error.message });
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  return res.status(200).json({ success: "message sent" });
}
export default sendFriendForm;
