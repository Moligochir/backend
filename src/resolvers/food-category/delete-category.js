import { foodCategoryModel } from "../../model/food-category-model.js";

export const deleteFoodCategory = async (req, res) => {
  try {
    const FoodCategory = await foodCategoryModel.findByIdAndDelete(
      req.body.id,
      {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      }
    );
    res.status(200).json(FoodCategory);
  } catch (error) {
    res.status(400).json(error);
  }
};
