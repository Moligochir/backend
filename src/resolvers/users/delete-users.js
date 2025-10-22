import { userModel } from "../../model/user-model.js";

export const deleteUser = async (req, res) => {
  try {
    const User = await userModel.findByIdAndDelete(req.body.id, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    res.status(200).json(User);
  } catch (error) {
    res.status(400).json(error);
  }
};
