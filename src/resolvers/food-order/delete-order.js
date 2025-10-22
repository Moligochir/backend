import { foodOrderModel } from "../../model/food-order-model.js";

export const deleteFoodOrder = async (req, res) => {
  try {
    const FoodOrder = await foodOrderModel.findByIdAndDelete(req.body.id, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    res.status(200).json(FoodOrder);
  } catch (error) {
    res.status(400).json(error);
  }
};
