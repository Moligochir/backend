import { foodOrderModel } from "../../model/food-order-model.js";

export const updateFoodOrder = async (req, res) => {
  try {
    const foodOrder = await foodOrderModel.findByIdAndUpdate(req.body.id, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    res.status(200).json(foodOrder);
  } catch (error) {
    res.status(400).json(error);
  }
};
