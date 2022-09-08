import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ServiceSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    type: { type: String },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const ServiceModel = model("Service", ServiceSchema);

export default ServiceModel;
