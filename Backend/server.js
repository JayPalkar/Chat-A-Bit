import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.routes.js";
import connect from "./DB/connect.js";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  //root route
  res.send("Hello world");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connect();
  console.log(`server is running on port ${PORT}`);
});
