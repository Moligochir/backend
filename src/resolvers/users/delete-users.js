export const deleteUser = (req, res) => {
  const deleteUser = req.body;
  users = users.filter((user) => user.id !== deleteUser.id);

  res.send("user deleted successfully");
};
