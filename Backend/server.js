import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./Routes/auth.routes.js";
import messageRoutes from "./Routes/message.routes.js";
import userRoutes from "./Routes/user.routes.js";

import connect from "./DB/connect.js";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   //root route
//   res.send("Hello world");
// });

app.listen(PORT, () => {
  connect();
  console.log(`server is running on port ${PORT}`);
});
