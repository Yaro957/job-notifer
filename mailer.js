// mailer.js
const nodemailer = require("nodemailer");

// List of recipients (won't be visible to each other)
const enails = [
  "jumdeom302@gmail.com",
  "mohitmane916@gmail.com",
  "shamsarwade1818@gmail.com"
];

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendNotificationMail = async (subject, obj) => {
const usertext = `🚨 New Off-Campus Job Alert!\n\n${obj}\n\nGood luck! 🚀`;

  const mailOptions = {
    from: `"Notifier Bot" <${process.env.EMAIL_USER}>`,
    bcc: enails.join(","), // Blind copy to all recipients
    subject: subject,
    text: usertext,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Notification email sent to all (BCC).");
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};

module.exports = { sendNotificationMail };
