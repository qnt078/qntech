import otpGenerator from 'otp-generator';
import OTP from '../models/OTP.js';
import User from '../models/Users.js';
import asyncHandler from 'express-async-handler';

const sendOTP = asyncHandler(async (req, res) => {
  try {
      const { email } = req.body;
      const checkUser = await User.findOne({ email });
      if (checkUser) {
          const otp = otpGenerator.generate(6, {
              upperCase: false,
              specialChars: false,
              alphabets: false,
          });
          const newOtp = new OTP({
              email,
              otp,
          });
          await newOtp.save();
          res.status(200).json({ message: 'OTP sent successfully' });
      } else {
          res.status(404);
          throw new Error('User not found');
      }


  }
  catch (error) {
    console.log(error.message);
  }
});

export default sendOTP;