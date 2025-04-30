// pages/api/send-email.js
// Require:
var postmark = require("postmark");

// Send an email:
var client = new postmark.ServerClient(process.env.SERVER_TOKEN);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fname, lname, email, phone, message } = req.body;

    try {
      await client.sendEmail({
        From: 'lbilbie@uwo.ca', // Your verified sender signature in Postmark
        To: 'eagleson@uwo.ca', // The recipient's email address
        Subject: `Brain3DViz Form Submission from: ${fname} ${lname}`,
        TextBody: `Message: ${message}\nFrom: ${fname} ${lname}\nEmail: ${email}\nPhone: ${phone}`,
        HtmlBody: `<p>Message: ${message}</p><p>From: ${fname} ${lname}</p><p>Email: ${email}</p><p>Phone: ${phone}</p>`,
      });
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
