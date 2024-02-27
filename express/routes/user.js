import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/Users.js";
import generateToken from "../utils/generateToken.js";
import { protect, admin } from "../middleware/auth.js";
const userRouter = express.Router();

//GET ALL PRODUCT WITH SEARCH AND PEGINATION
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
      .skip(PAGE_SIZE * (page - 1))
     
    res.json({ users, page, pages: Math.ceil(count / PAGE_SIZE) });
  })
);

//GET ALL PRODUCT WITHOUT SEARCH AND PEGINATION
userRouter.get(
  "/all",
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
    const { name, email, password, isAdmin } = req.body;
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
    });
    if (user) {
      res.status(201).json({
        message: "User created successfully",
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
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

export default userRouter;
