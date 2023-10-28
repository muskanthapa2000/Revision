
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({

    // service : "gamil",
    // host: 'smtp.gmail.com',

    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'bulah.huel@ethereal.email', // real id 
        pass: 'd5XHEsua7EMXs6eMTR' // real pswd
    }
});

transporter.sendMail({
    to : "bulah.huel@ethereal.email", // real id 
    from : "muskan@gmail.com", // real pswd 
    subject : "1st email from node js ",
    text : "hey my first email from fake smtp mail server",
    html : `<a href="https://ethereal.email/create">click here</a>`
}).then(()=>{
    console.log("mail sended siuccessfully");
}).catch((err)=>{
    console.log(err);
})