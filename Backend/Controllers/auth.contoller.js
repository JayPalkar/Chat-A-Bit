const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
  } catch (error) {}
};
const login = (req, res) => {
  console.log("Login User");
};
const logout = (req, res) => {
  console.log("logout User");
};

export { signup, login, logout };
