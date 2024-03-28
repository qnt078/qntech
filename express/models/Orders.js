import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "users",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { 
          //get image from product id model
          type: String,
          required: true,
          ref: "Product",

        
        },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      name: { type: String, required: true },
      phone : { type: String, required: true },
      note : { type: String, required: false },
    },
    paymentMethod: {
      type: String,
      required: true,
      default: "COD",
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },

    // shippingPrice: {
    //   type: Number,
    //   required: true,
    //   default: 0.0,
    // },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },

  {
    timestamps: true,
  }
);

const Order = mongoose.model("orders", orderSchema);
export default Order;
