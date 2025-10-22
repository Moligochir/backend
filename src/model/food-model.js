import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const foodSchema = new Schema({
  id: { type: ObjectId },
  name: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: Number, require: true },
});
export const foodModel = mongoose.model("food", foodSchema);
