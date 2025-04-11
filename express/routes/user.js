import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/Users.js";
import Order from "../models/Orders.js";
import OTP from "../models/OTP.js";
import generateToken from "../utils/generateToken.js";
import { protect, admin, seller } from "../middleware/auth.js";
import responseMessage from "../global/responseMessage.js";

const userRouter = express.Router();


userRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const PAGE_SIZE = 2;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? {
          email: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};

    const count = await User.countDocuments({ ...keyword });
    const users = await User.find({ ...keyword })
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * (page - 1));

    res.status(200).json({
      status: responseMessage.SUCCESS,
      statusCode: 200,
      data: {
        users,
        page,
        pages: Math.ceil(count / PAGE_SIZE)
      }
    });
  })
);

userRouter.get(
  "/all",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.status(200).json({
      status: responseMessage.SUCCESS,
      statusCode: 200,
      data: users
    });
  })
);

// LOGIN

userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.status(200).json({
        status: responseMessage.SUCCESS,
        statusCode: 200,
        message: "User logged in successfully 🎄",
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isSeller: user.isSeller,
        isVerify: user.isVerify,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({
        status: responseMessage.ERROR,
        statusCode: 401,
        message: "Invalid Email or Password"
      });
    }
  })
);

// REGISTER
userRouter.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, password, isAdmin, isSeller } = req.body;
    if ( !email || !password || !name ) {
      return res.status(400).json({
        status: responseMessage.ERROR,
        statusCode: 400,
        message: "Please fill all the fields"
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        status: responseMessage.ERROR,
        statusCode: 400,
        message: "User already exists"
      });
    }
    const user = await User.create({
      name,
      email,
      password,
      isAdmin,
      isSeller,
    });
    if (user) {
      res.status(201).json({
        status: responseMessage.SUCCESS,
        statusCode: 201,
        message: "User created successfully ✌",
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isSeller: user.isSeller,
        isVerify: user.isVerify,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({
        status: responseMessage.ERROR,
        statusCode: 400,
        message: "Invalid user data"
      });
    }
  })
);

// Logout
userRouter.post(
  "/logout",
  asyncHandler(async (req, res) => {
    res.status(200).json({
      status: responseMessage.SUCCESS,
      statusCode: 200,
      message: "User logged out successfully"
    });
  })
);

// VERIFY EMAIL
userRouter.post(
  "/verify",
  asyncHandler(async (req, res) => {
    const { email, otp } = req.body;
   
    const otpExists = await OTP.find({ email, otp })
      .sort({ createdAt: -1 })
      .limit(1);
    
     if (otpExists.length === 0 || otp !== otpExists[0].otp) {
      return res.status(400).json({
        status: responseMessage.ERROR,
        statusCode: 400,
        success: false,
        message: "The OTP is not valid",
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      user.isVerify = true;
      await user.save();
      res.status(200).json({
        status: responseMessage.SUCCESS,
        statusCode: 200,
        message: "Email verified successfully",
      });
    } else {
      res.status(404).json({
        status: responseMessage.ERROR,
        statusCode: 404,
        message: "User not found"
      });
    }
  })
);

// PROFILE
userRouter.get(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    const orderWithUser = await Order.find({ user: req.user._id });
    const totalPrice =  await Order.aggregate([
      { $match: { user: req.user._id } },
      { $group: { _id: req.user._id, totalPrice: { $sum: "$totalPrice" } } },
    ]);

    if (user) {
      const { _id, name, email, isAdmin, createdAt } = user;
      res.status(200).json({
        status: responseMessage.SUCCESS,
        statusCode: 200,
        data: {
          _id,
          name,
          email,
          isAdmin,
          createdAt ,
          orderWithUser,
          totalPrice
        }
      });
    } else {
      res.status(404).json({
        status: responseMessage.ERROR,
        statusCode: 404,
        message: "User not found"
      });
    }
  })
);
// UPDATE USER ROLE TO SELLER

userRouter.put(
  "/update/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    const { isSeller } = req.body;
    if (user) {
      user.isSeller = isSeller;
      const updatedUser = await user.save();
      res.status(200).json({
        status: responseMessage.SUCCESS,
        statusCode: 200,
        message: "User updated successfully",
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        isSeller: updatedUser.isSeller,
      });
    } else {
      res.status(404).json({
        status: responseMessage.ERROR,
        statusCode: 404,
        message: "User not found"
      });
    }
  })
);

export default userRouter;