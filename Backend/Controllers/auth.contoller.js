import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

const signup = async (req, res) => {
  try {
    const { fullName, userName, email, password, confirmPassword, gender } =
      req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }

    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ error: "User already exist" });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // avatar
    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      email,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? maleProfilePic : femaleProfilePic,
    });
    if (newUser) {
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user Data" });
    }
  } catch (error) {
    console.log("error in signup:", error.message);

    res.status(500).json({ error: "Internal server Error" });
  }
};

const login = (req, res) => {
  console.log("Login User");
};
const logout = (req, res) => {
  console.log("logout User");
};

export { signup, login, logout };
