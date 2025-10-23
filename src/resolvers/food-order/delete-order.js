import { foodOrderModel } from "../../model/food-order-model.js";

export const deleteFoodOrder = async (req, res) => {
  const data = req.body;
  try {
    const FoodOrder = await foodOrderModel.findByIdAndDelete(req.body.id, {
      user: data.user,
      totalPrice: data.totalPrice,
      foodOrderItems: data.foodOrderItems,
      status: data.status,
    });
    res.status(200).json(FoodOrder);
  } catch (error) {
    res.status(400).json(error);
  }
};
