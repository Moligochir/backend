import { foodModel } from "../../model/food-model.js";

export const createFood = async (req, res) => {
  const data = req.body;
  try {
    const newFood = await foodModel.create({
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
    res.status(200).json(newFood);
  } catch (error) {
    res.status(400).json(error);
  }
};
