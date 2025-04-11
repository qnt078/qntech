import express from "express";
import asyncHandler from "express-async-handler";
const routerProduct = express.Router();
import Product from "../models/Products.js";
import {cloudinaryConfig ,uploadImage, editImage, deleteImage} from "../config/cloudinary.js";
import responseMessage from "../global/responseMessage.js";

routerProduct.get(
  "/",
  asyncHandler(async (req, res) => {
   try {
    const limit = parseInt(req.query.limit) || 0; 
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;
    const search = req.query.search ? req.query.search : "";
    const products = await Product.find({ name: { $regex: search, $options: "i" } }).limit(limit).skip(skip);
    if (products) {
      res.status(200).json({
        status: responseMessage.SUCCESS,
        statusCode: 200,
        data: products,
      });
    } else {
      res.status(404).json({
        status: responseMessage.ERROR,
        statusCode: 404,
        message: "Product not found",
      });
    }
   } catch (error) {
      res.status(500).json({
        status: responseMessage.ERROR,
        statusCode: 500,
        message: error.message
      })
    }
  })
);



routerProduct.post(
  "/upload",
  cloudinaryConfig.single('image'),
  uploadImage,
  asyncHandler(async (req, res) => {
    const { name, price, description,category } = req.body;
    const product = await Product.create({
      name,
      price,
      description,
      image: req.file.path,
      category
    });
    if (product) {
      res.status(201).json({
        status: responseMessage.SUCCESS,
        statusCode: 201,
        data: {
          _id: product._id,
          name: product.name,
          price: product.price,
          description: product.description,
          image: product.image,
          category: product.category
        }
      });
    } else {
      res.status(400).json({
        status: responseMessage.ERROR,
        statusCode: 400,
        message: "Invalid product data",
      });
    }
  })
);

// EDIT PRODUCT
routerProduct.put(
  "/:id",
  cloudinaryConfig.single('image'),
  editImage,
  asyncHandler(async (req, res) => {
    const { name, price, description, category } = req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
      product.name = name;
      product.price = price;
      product.description = description;
      product.image = req.file ? req.file.path : product.image;
      product.category = category;
      const updatedProduct = await product.save();
      res.status(200).json({
        status: responseMessage.SUCCESS,
        statusCode: 200,
        data: updatedProduct,
      });
    } else {
      res.status(404).json({
        status: responseMessage.ERROR,
        statusCode: 404,
        message: "Product not found",
      });
    }
  })
);

// DELETE PRODUCT
routerProduct.delete(
  "/:id",
  asyncHandler(async (req, res) => {
   try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne({ _id: req.params.id });
      res.status(200).json({
        status: responseMessage.SUCCESS,
        statusCode: 200,
        message: "Product removed",
      });
    } else {
      res.status(404).json({
        status: responseMessage.ERROR,
        statusCode: 404,
        message: "Product not found",
      });
    }
   }
    catch (error) {
        res.status(500).json({
          status: responseMessage.ERROR,
          statusCode: 500,
          message: error.message
        })
      }
  })
);

export default routerProduct;