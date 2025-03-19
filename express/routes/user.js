import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/Users.js";
import OTP from "../models/OTP.js";
import generateToken from "../utils/generateToken.js";
import { protect, admin, seller } from "../middleware/auth.js";

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

    res.json({ users, page, pages: Math.ceil(count / PAGE_SIZE) });
  })
);

userRouter.get(
  "/all",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
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
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  })
);

// REGISTER
userRouter.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, password, isAdmin, isSeller } = req.body;
    if (!name || !email || !password ) {
      res.status(400).json({ message: "Please fill all the fields" });
    }

    const userExists = await User.findOne({
      email,
    });
    if (userExists) {
      res.status(500).json({ message: "User already exists" });
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
        message: "User created successfully ✌",
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isSeller: user.isSeller,
        isVerify: user.isVerify,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  })
);

// Logout
userRouter.post(
  "/logout",
  asyncHandler(async (req, res) => {
    res.json({ message: "User logged out successfully" });
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
        success: false,
        message: "The OTP is not valid",
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      user.isVerify = true;
      await user.save();
      res.status(200).json({
        message: "Email verified successfully",
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

// PROFILE
userRouter.get(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      const { _id, name, email, isAdmin, createdAt } = user;
      res.json({ _id, name, email, isAdmin, createdAt });
    } else {
      res.status(404);
      throw new Error("User not found");
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
      res.json({
        message: "User updated successfully",
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        isSeller: updatedUser.isSeller,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

export default userRouter;
