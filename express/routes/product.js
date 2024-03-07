import express from "express";
import asyncHandler from "express-async-handler";
const routerProduct = express.Router();
import Product from "../models/Products.js";
import {cloudinaryConfig ,uploadImage} from "../config/cloudinary.js";

routerProduct.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

routerProduct.post(
  "/upload",
  cloudinaryConfig.single('image'),
  uploadImage,
  asyncHandler(async (req, res) => {
    const { name, price, description } = req.body;
    const product = await Product.create({
      name,
      price,
      description,
      image: req.file.path,
    });
    if (product) {
      res.status(201).json({
        _id: product._id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
      });
    } else {
      res.status(400);
      throw new Error("Invalid Product Data");
    }
  })
);

export default routerProduct;
