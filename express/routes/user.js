import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/Users.js";
import generateToken from "../utils/generateToken.js";
import { protect, admin } from "../middleware/auth.js";
const userRouter = express.Router();

userRouter.get(
  "/",
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
    console.log(email, password);
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
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
    const { name, email, password } = req.body;
    const userExists = await User.findOne({
      email,
    });
    if (userExists) {
      res.status(500).json({ message: "User already exists" });
    } else {
      const user = await User.create({
        name,
        email,
        password,
      });
      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
        });
      } else {
        res.status(400).json({ message: "Invalid user data" });
      }
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
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

export default userRouter;
