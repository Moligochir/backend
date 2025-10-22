import { foodModel } from "../../model/food-model.js";

export const updateFood = async (req, res) => {
  try {
    const Food = await foodModel.findByIdAndUpdate(req.body.id, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    res.status(200).json(Food);
  } catch (error) {
    res.status(400).json(error);
  }
};
