//to,from,subject,text
const mailer = require("nodemailer");

///function

const sendingMail = async (to, subject, text) => {
  const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "dhwaneel5164@gmail.com",
      pass: "zebh uzjj futi whla",
    },
  });

  const mailOptions = {
    from: "dhwaneel5164@gmail.com",
    to: to,
    subject: subject,
    text: text,
    //html:"<h1>"+text+"</h1>"
  };

  const mailresponse = await transporter.sendMail(mailOptions);
  console.log(mailresponse);
  return mailresponse;
};

module.exports = {
  sendingMail,
};
