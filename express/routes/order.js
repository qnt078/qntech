import express from "express";
import asyncHandler from "express-async-handler";
import Order from "../models/Orders.js";
import { admin, protect } from "../middleware/auth.js";
const orderRouter = express.Router();

// GET ORDER WITH USER
orderRouter.get(
  "/",
  protect,

  asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id }).sort({ _id: -1 });
    res.json(orders);
  })
);

// GET ORDER BY ID
orderRouter.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error("Order not found");
    }
  })
);

// GET ORDER BY PHONE NUMBER
orderRouter.get(
  "/phone/:phone",
  asyncHandler(async (req, res) => {
    const order = await Order.find({ "shippingAddress.phone": req.params.phone });

    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error("Order not found");
    }
  })
);

// CREATE ORDER
orderRouter.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items");
      return;
    } else {
      const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        totalPrice,
      });

      const createOrder = await order.save();
     
      res.status(201).json(createOrder);

    }
  })
);

// CREATE ORDER WITHOUT USER
orderRouter.post(
  "/create",
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items");
      return;
    } else {
      const order = new Order({
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        totalPrice,
      });

      const createOrder = await order.save();
      res.status(201).json(createOrder);
    }
  })
);

// Update order to paid
orderRouter.put(
  "/:id/pay",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    const Paid = req.body.isPaid;

    if (order) {
      order.isPaid = Paid;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };

      const updateOrder = await order.save();
      res.json(updateOrder);
    } else {
      res.status(404);
      throw new Error("Order not found");
    }
  })
);

export default orderRouter;
