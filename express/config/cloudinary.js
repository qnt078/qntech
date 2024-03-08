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
      res.status(400);
      throw new Error("No file uploaded");
    }
   
   
    const result = await cloudinary.uploader.upload(req.file.path);
    req.file.path = result.secure_url;

    
    next();
  } catch (error) {
   
    res.status(500).json({ error: error.message });
  }
};

export { cloudinaryConfig, uploadImage };
