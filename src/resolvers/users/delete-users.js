import { userModel } from "../../model/user-model.js";

export const deleteUser = async (req, res) => {
  const data = req.body;
  try {
    const User = await userModel.findByIdAndDelete(req.body.id, {
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.address,
      role: data.role,
      orderedFoods: data.orderedFoods,
      ttl: data.ttl,
      isVerified: data.isVerified,
    });
    res.status(200).json(User);
  } catch (error) {
    res.status(400).json(error);
  }
};
