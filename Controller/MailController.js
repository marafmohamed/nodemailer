const nodemailer= require("nodemailer");
const sendMail = (req, res) => {
  const { receiverMail, subject, content } = req.body;
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
    // Email content
    const mailOptions = {
      from: process.env.USER,
      to: receiverMail,
      subject: subject,
      text: content,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error:", error);
      } else {
        console.log("Email sent:", info.response);
      }

      // Close the transporter
      transporter.close();
      res.send("Email sent");
    });
  } catch (err) {
    res.send(`${err.message}`);
  }
};

module.exports = {
  sendMail,
};
