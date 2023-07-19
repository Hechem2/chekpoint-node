const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "confidential",
    pass: "test123",
  },
});

const mailOptions = {
  from: "sender@gmail.com",
  to: "receiver@gmail.com",
  subject: "Test Email",
  text: "This is a test email from Nodemailer!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error occurred while sending email:", error.message);
  } else {
    console.log("Email sent successfully!");
    console.log("Message ID:", info.messageId);
  }
});