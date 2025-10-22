import { foodModel } from "../../model/food-model.js";

export const deleteFood = async (req, res) => {
  try {
    const Food = await foodModel.findByIdAndDelete(req.body.id, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    res.status(200).json(Food);
  } catch (error) {
    res.status(400).json(error);
  }
};
