const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(sendgrid_api);

const msg = {
    to: 'test@example.com',
    from: 'test@example.com', // Use the email address or domain you verified above
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  sgMail.sendMail(msg).then(()=>{
    console.log("mail sended siuccessfully");
}).catch((err)=>{
    console.log(err);
})