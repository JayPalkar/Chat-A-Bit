/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { IoIosArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";

const AuthLayout = () => {
  const [signupActive, setSignupActive] = useState(false);

  const scrollToSignup = () => {
    const signupSection = document.getElementById("signupSection");
    signupSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToLogin = () => {
    const loginSection = document.getElementById("loginSection");
    loginSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleToggle = () => {
    if (signupActive) {
      scrollToLogin();
    } else {
      scrollToSignup();
    }
    setSignupActive(!signupActive);
  };

  useEffect(() => {
    scrollToLogin();
  }, []);
  return (
    <div>
      <div id="loginSection" className="min-h-screen">
        <Login />
      </div>

      <div className="flex justify-center">
        <motion.button
          initial={{ rotate: 180 }}
          animate={{
            y: signupActive ? 180 : -120,
            rotate: signupActive ? 180 : 0,
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleToggle}
          className=" absolute bg-white text-primary text-5xl p-1 rounded-full"
        >
          <IoIosArrowDropdown />
        </motion.button>
      </div>
      <div id="signupSection" className="min-h-screen">
        <Signup />
      </div>
    </div>
  );
};

export default AuthLayout;
