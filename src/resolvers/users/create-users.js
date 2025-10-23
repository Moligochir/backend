import { userModel } from "../../model/user-model.js";

export const createUser = async (req, res) => {
  const data = req.body;
  try {
    const newUser = await userModel.create({
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.address,
      role: data.role,
      orderedFoods: data.orderedFoods,
      ttl: data.ttl,
      isVerified: data.isVerified,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};
