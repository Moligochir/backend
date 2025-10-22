import { foodOrderModel } from "../../model/food-order-model.js";

export const createFoodOrder = async (req, res) => {
  const data = req.body;
  try {
    const foodOrder = await foodOrderModel.create({
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
    res.status(200).json(foodOrder);
  } catch (error) {
    res.status(400).json(error);
  }
};
