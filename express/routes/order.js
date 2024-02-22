import express from "express";
import asyncHandler from "express-async-handler";
import Order from "../models/Orders.js";
import { admin, protect } from "../middleware/auth.js";
const orderRouter = express.Router();

orderRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const orders = await Order.find({});
    res.json(orders);
  })
);

// CREATE ORDER
orderRouter.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
    
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items");
      return;
    } else {
      const order = new Order({
        orderItems,
        user: req.user._id,
      });

      const createOrder = await order.save();
      res.status(201).json(createOrder);
    }
  })
);

export default orderRouter;