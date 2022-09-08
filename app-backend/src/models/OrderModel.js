import mongoose from "mongoose";
const { Schema, model } = mongoose;

const OrderSchema = new Schema(
  {
    userId: { type: String, required: true },
    serviceId: { type: String, required: true },
    dateScheduled: { type: Date, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const OrderModel = model("Order", OrderSchema);

export default OrderModel;
