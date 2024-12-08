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
      localStorage.setItem("activeSection", "login");
    } else {
      scrollToSignup();
      localStorage.setItem("activeSection", "signup");
    }
    setSignupActive(!signupActive);
  };

  useEffect(() => {
    const savedSection = localStorage.getItem("activeSection");

    if (savedSection === "signup") {
      scrollToSignup();
      setSignupActive(true);
    } else {
      scrollToLogin();
      setSignupActive(false);
    }
  }, []);

  return (
    <div>
      <div id="loginSection" className="min-h-screen">
        <Login />
      </div>

      <div className="flex justify-center">
        <motion.button
          animate={{
            y: signupActive ? 100 : -150,
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleToggle}
          className=" absolute bg-white text-primary border-primary border-2 text-center text-xl py-1 px-2 rounded-full"
        >
          {signupActive ? "Login" : "Signup"}
        </motion.button>
      </div>
      <div id="signupSection" className="min-h-screen">
        <Signup />
      </div>
    </div>
  );
};

export default AuthLayout;
