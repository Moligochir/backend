import { userModel } from "../../model/user-model.js";

export const createUser = async (req, res) => {
  const data = req.body;
  try {
    const newUser = await userModel.create({
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};
