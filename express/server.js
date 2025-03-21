import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import cors from "cors";

import userRouter from "./routes/user.js";
import routerProduct from "./routes/product.js";
import orderRouter from "./routes/order.js";
import otpRouter from "./routes/otp.js";
import paymentRouter from "./routes/payment.js";
import { notFound, errorHandler } from "./middleware/errors.js";
dotenv.config();
connectDB();



const app = express();
app.use(cors());
const port = process.env.PORT;

// const specs = swaggerJsdoc(swaggerDocument);

app.use(express.json());
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/otp", otpRouter);
app.use("/api/v1/product", routerProduct);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/payment", paymentRouter);
// Error Handler
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
