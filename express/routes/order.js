import express from "express";
import asyncHandler from "express-async-handler";
import Order from "../models/Orders.js";

import { admin, protect } from "../middleware/auth.js";
import responseMessage from "../global/responseMessage.js";
const orderRouter = express.Router();


// GET ALL ORDER
orderRouter.get(
  "/all",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const orders = await Order.find({}).sort({ _id: -1 });
    if (orders) {
      res.status(200).json({
        status: responseMessage.SUCCESS,
        statusCode: 200,
        data: orders,
      });
    }
    else {
      res.status(404).json({
        status: responseMessage.ERROR,
        statusCode: 404,
        message: "Order not found",
      });
    }
    
  })
);



// GET ORDER WITH USER
orderRouter.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id }).sort({ _id: -1 });
    if (orders) {
      res.status(200).json({
        status: responseMessage.SUCCESS,
        statusCode: 200,
        data: orders,
      });
    } else {
      res.status(404).json({
        status: responseMessage.ERROR,
        statusCode: 404,
        message: "Order not found",
      });
    }
  })
);

// GET TOTAL ORDER COUNT & TOTAL SALES WITH USER AND RETURN FULL LIST USER ORDER
orderRouter.get(
  "/summary",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const orders = await Order.aggregate([
      {
        $group: {
          _id: "$user",
          totalOrders: { $sum: 1 },
          totalSales: { $sum: "$totalPrice" },

        }
      },
      { $sort: { totalSales: -1 } },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user"
        }

      },
      {
        $unwind: "$user"
      },
      {
        $project: {
          _id: 1,
          totalOrders: 1,
          totalSales: 1,
          user: {
            _id: 1,
            name: 1,
            email: 1
          }
        }
      }
    ])

    const summary = {
   
      totalSales: orders.reduce((acc, order) => acc + order.totalSales, 0),
      orders
    }


    

    res.status(200).json({
      status: responseMessage.SUCCESS,
      statusCode: 200,
      data: summary,
    });
  })
);

// GET EACH PRICE IS PAID AND NOT PAID WITH 5 DAYS AGO BEGIN CURRENT DAY IF NOT VALUE WILL BE 0
orderRouter.get(
  "/total",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    try {
      const orders = await Order.aggregate([
        {
          $group: {
            _id: {
              $dateToString: {
                format: "%m-%d",
                date: "$createdAt"
              }
            },
            totalSales: { $sum: "$totalPrice" },
            totalPaid: {
              $sum: {
                $cond: {
                  if: "$isPaid",
                  then: "$totalPrice",
                  else: 0
                }
              }
            }
          }
        },
        {
          $sort: { _id: -1 }
        },
        {$limit: 8}
      ])
      if (orders) {
        res.status(200).json({
          status: responseMessage.SUCCESS,
          statusCode: 200,
          data: orders,
        });
      }
      else {
        res.status(404).json({
          status: responseMessage.ERROR,
          statusCode: 404,
          message: "Order not found",
        });
      }
    }
    catch (error) {
      res.status(500).json({
        status: responseMessage.ERROR,
        statusCode: 500,
        message: "Server Error",
      });
    }
  })
);

// GET ORDER BY ID
orderRouter.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.status(200).json({
        status: responseMessage.SUCCESS,
        statusCode: 200,
        data: order,
      });
    } else {
      res.status(404).json({
        status: responseMessage.ERROR,
        statusCode: 404,
        message: "Order not found",
      });
    }
  })
);

// GET ORDER BY PHONE NUMBER
orderRouter.get(
  "/phone/:phone",
  asyncHandler(async (req, res) => {
    const order = await Order.find({ "shippingAddress.phone": req.params.phone });

    if (order) {
      res.status(200).json({
        status: responseMessage.SUCCESS,
        statusCode: 200,
        data: order,
      });
    } else {
      res.status(404).json({
        status: responseMessage.ERROR,
        statusCode: 404,
        message: "Order not found",
      });
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
      res.status(400).json({
        status: responseMessage.ERROR,
        statusCode: 400,
        message: "No order items",
      });
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

      res.status(201).json({
        status: responseMessage.SUCCESS,
        statusCode: 201,
        data: createOrder,
      });
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
      res.status(400).json({
        status: responseMessage.ERROR,
        statusCode: 400,
        message: "No order items",
      });
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
      res.status(201).json({
        status: responseMessage.SUCCESS,
        statusCode: 201,
        data: createOrder,
      });
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
      res.status(200).json({
        status: responseMessage.SUCCESS,
        statusCode: 200,
        data: updateOrder,
      });
    } else {
      res.status(404).json({
        status: responseMessage.ERROR,
        statusCode: 404,
        message: "Order not found",
      });
    }
  })
);

export default orderRouter;