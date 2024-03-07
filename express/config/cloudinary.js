// cloudinaryConfig.mjs
import cloudinary from "cloudinary";
// import { CloudinaryStorage } from '@cloudinary/storage';
import multer from "multer";

cloudinary.config({
  cloud_name: "decqocjtv",
  api_key: "525239764147953",
  api_secret: "6HeHjsPj1uiyP60fmfx-xQifIko",
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
    // const result = await cloudinary.uploader.upload(req.file.path);
   
    const result = await cloudinary.uploader.upload(req.file.path, {
      width: 300,
      height: 253,
      crop: "fill",
    });
    req.file.path = result.secure_url;

    console.log(req.file.path);
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { cloudinaryConfig, uploadImage };
