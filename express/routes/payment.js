import express from "express";
import Stripe from 'stripe';
import {protect} from '../middleware/auth.js';
import asyncHandler from "express-async-handler";
import * as dotenv from 'dotenv';


dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const paymentRouter = express.Router();

paymentRouter.post(
  "/",
  
  asyncHandler(async (req, res) => {
    const { amount } = req.body;
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
     
        automatic_payment_methods: {
          enabled: true,
        },
        
        

       
        
      });
      res.status(200).json(paymentIntent.client_secret);
    } catch (error) {
      res.status(400).send(error.message);
    }
  })
);

export default paymentRouter;