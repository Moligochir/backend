import { userModel } from "../../model/user-model";

export const updateUser = async (req, res) => {
  const data = req.body;
  try {
    const updateUser = await userModel.findByIdAndUpdate({
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json(error);
  }
};
