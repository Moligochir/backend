import { foodModel } from "../../model/food-model.js";

export const createFood = async (req, res) => {
  const data = req.body;
  try {
    const newFood = await foodModel.create({
      foodName: data.foodName,
      price: data.price,
      image: data.image,
      ingredients: data.ingredients,
      category: data.category,
    });
    res.status(200).json(newFood);
  } catch (error) {
    res.status(400).json(error);
  }
};
