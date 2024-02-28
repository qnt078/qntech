import nodeMailer from 'nodemailer';

const mailSender = async (email, subject, message) => {
  try {
        // Create a Transporter to send the email
        const transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          },
        });
        // Email options
        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: subject,
          text: message,
        };
        // Send the email
        const info = await transporter.sendMail(mailOptions);

        console.log(`Message sent: ${info.messageId}`);

        return info;
  }
  catch  (error) {
    console.log(error.message);
  }
}

export default mailSender;