import mongoose from 'mongoose';
import mailSender from '../utils/mailSender.js';

const otpSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Define a function to send emails
async function sendEmail(email, otp) {
  try {
    const subject = "OTP for Email Verification";
    const message = `Your OTP for Email Verification is ${otp}`;
    await mailSender(email, subject, message);
  } catch (error) {
    console.log(error.message);
  }
}

// This middleware runs before saving an otp to send the email
otpSchema.pre("save", async function (next) {
  try {
    await sendEmail(this.email, this.otp);
    next();
  } catch (error) {
    console.log(error.message);
  }
});

const OTP = mongoose.model("OTP", otpSchema);

export default OTP;