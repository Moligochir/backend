import express from "express";
const app = express();
const PORT = 8000;

let users = [
  {
    id: 1,
    username: "John",
    phone: 99009900,
  },
  {
    id: 2,
    username: "Bob",
    phone: 99112233,
  },
];
app.use(express.json());
app.get("/users", (req, res) => {
  res.status(200).json(users);
});
app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(200).json(users);
});
app.put("/users", (req, res) => {
  const updatedUser = req.body;

  users = users.map((user) =>
    user.id === updatedUser.id ? updatedUser : user
  );

  res.send("user updated successfully");
});
app.delete("/users", (req, res) => {
  const deleteUser = req.body;
  users = users.filter((user) => user.id !== deleteUser.id);

  res.send("user deleted successfully");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
