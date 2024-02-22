import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import userRouter  from "./routes/user.js";
import routerProduct from "./routes/product.js";
import orderRouter from "./routes/order.js";
dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT ;

app.use(express.json());
app.use("/api/v1/user", userRouter );
app.use("/api/v1/product", routerProduct);
app.use("/api/v1/order", orderRouter);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
