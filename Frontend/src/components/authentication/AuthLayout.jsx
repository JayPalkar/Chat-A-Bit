/* eslint-disable no-unused-vars */
import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const AuthLayout = () => {
  return (
    <div>
      <Login />
      <button>Scroll</button>
      <Signup />
    </div>
  );
};

export default AuthLayout;
