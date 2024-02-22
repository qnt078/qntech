import express from "express";
import asyncHandler from "express-async-handler";
const routerProduct = express.Router();
import Product from "../models/Products.js";
routerProduct.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

routerProduct.post("/", asyncHandler(async (req, res) => {
    const { name, price, description } = req.body;
    const product = await Product.create({
      name,
      price,
      description,
    });
    if (product) {
      res.status(201).json({
        _id: product._id,
        name: product.name,
        price: product.price,
        description: product.description,
      });
    } else {
      res.status(400);
      throw new Error("Invalid Product Data");
    }

}));

export default routerProduct;
