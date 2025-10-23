import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const foodOrderSchema = new Schema({
  id: { type: ObjectId },
  user: { type: ObjectId, ref: "user" },
  totalPrice: { type: Number },
  foodOrderItems: { type: String },
  status: { type: String },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

export const foodOrderModel = mongoose.model("food-order", foodOrderSchema);
