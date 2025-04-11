// cloudinaryConfig.mjs
import cloudinary from "cloudinary";
// import { CloudinaryStorage } from '@cloudinary/storage';
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY ,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const cloudinaryConfig = multer({ storage });

const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Please upload an image" });
    }
   
   
    const result = await cloudinary.uploader.upload(req.file.path);
    req.file.path = result.secure_url;

    
    next();
  } catch (error) {
   
    res.status(500).json({ error: error.message });
  }
};
const editImage = async (req, res, next) => {
  try {
    
    if (!req.file) {
    return next();
    }    
      const result = await cloudinary.uploader.upload(req.file.path);
      req.file.path = result.secure_url; 

    
    next();
  } catch (error) {
   
    res.status(500).json({ error: error.message });
  }
};
const deleteImage = async (req, res, next) => {
  try {
    const { imageId } = req.body;
    if (!imageId) {
      return res.status(400).json({ message: "Please provide an image id" });
    }
    await cloudinary.uploader.destroy(imageId);
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { cloudinaryConfig, uploadImage,deleteImage ,editImage};
