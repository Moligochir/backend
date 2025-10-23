import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  id: { type: ObjectId },
  email: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
  role: { type: String, enum: ["USER", "ADMIN"] },
  orderedFoods: { type: String },
  ttl: { type: Date },
  isVerified: { type: String },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

export const userModel = mongoose.model("user", userSchema);
