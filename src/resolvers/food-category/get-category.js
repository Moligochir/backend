import { foodCategoryModel } from "../../model/food-category-model.js";

export const getFoodCategory = async (req, res) => {
  const FoodCategory = await foodCategoryModel.find().populate("food-category");

  res.status(200).json(FoodCategory);
};
