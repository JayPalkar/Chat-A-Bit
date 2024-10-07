import express from "express";
import dotenv from "dotenv";

import authRoutes from "./Routes/auth.routes.js";
import connect from "./DB/connect.js";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   //root route
//   res.send("Hello world");
// });

app.listen(PORT, () => {
  connect();
  console.log(`server is running on port ${PORT}`);
});
