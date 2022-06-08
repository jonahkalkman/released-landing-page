const sgMail = require('@sendgrid/mail');
const { Client } = require("@sendgrid/client");

export default function handler(req, res) {
  if (req.method === 'POST') {
    const SENDGRID_API_KEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY;
    console.log(SENDGRID_API_KEY);
    const client = new Client();
    sgMail.setApiKey(SENDGRID_API_KEY);
    client.setApiKey(SENDGRID_API_KEY);

    const request = {
      method: "PUT",
      url: "/v3/marketing/contacts",
      body: {
        contacts: [{ email: req.body.email.value, first_name: req.body.email.value }],
      },
    };
    client.request(request).then(() => {
      console.log('Contact added to SendGrid');
     })
      .catch((error) => {
        console.log('Error adding contact to SendGrid', error.response.body.errors);
    });

    const msg = {
      to: req.body.email.value,
      from: 'info@released-app.com',
      subject: 'Welcome to Released! 👋',
      text: 'Hi! Thanks for joining Released. We hope you enjoy the app and have fun with your music releases!',
      html: '<p>Hi!</p><p>Thanks for joining Released 🎵. We hope you enjoy the app and have a fun with your music releases!</p><p>Greetings, <br />Team Released</p>',
    };

    sgMail.send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error('thos', error.response)
      });
  } else {
    // Handle any other HTTP method
  }
}
