import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/Users.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an Admin");
  }
};

const seller = (req, res, next) => {
  if (req.user && req.user.isSeller) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as a Seller");
  }
};

// Admin can access all the role of user and seller can access only their role
// Seller can access only their role
// Protect middleware is used to protect the route
// Admin middleware is used to check if the user is admin or not
// Seller middleware is used to check if the user is seller or not
// Protect middleware is used to protect the route
// Admin middleware is used to check if the user is admin or not


export { protect, admin , seller};