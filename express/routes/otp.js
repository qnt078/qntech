import express from "express";
import sendOTP from "../controller/sendOTP.js";

const otpRouter = express.Router();
otpRouter.post("/send", sendOTP);

export default otpRouter;