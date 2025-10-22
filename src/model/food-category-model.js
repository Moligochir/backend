import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const foodCategorySchema = new Schema({
  id: { type: ObjectId },
  name: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: Number, require: true },
});
export const foodCategoryModel = mongoose.model(
  "food-category",
  foodCategorySchema
);
