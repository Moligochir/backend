import { foodModel } from "../../model/food-model.js";

export const deleteFood = async (req, res) => {
  const data = req.body;
  try {
    const Food = await foodModel.findByIdAndDelete(req.body.id, {
      foodName: data.foodName,
      price: data.price,
      image: data.image,
      ingredients: data.ingredients,
      category: data.category,
    });
    res.status(200).json(Food);
  } catch (error) {
    res.status(400).json(error);
  }
};
