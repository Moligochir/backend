import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/users", userRouter);

mongoose
  .connect(
    "mongodb+srv://dbuser:pass1234@food.ut7gmqz.mongodb.net/?retryWrites=true&w=majority&appName=Food"
  )
  .then(() => console.log("Connected!"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
