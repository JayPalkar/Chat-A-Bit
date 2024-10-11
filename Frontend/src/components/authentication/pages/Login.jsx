/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { easeInOut, motion, transform } from "framer-motion";
import bgImg from "../../../assets/Imgs/bg.png";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handlePassword = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex h-screen justify-center">
      <div className="imgContainer bg-primary w-full flex flex-col justify-center items-center">
        <div className="z-10 absolute top-60 flex justify-center items-center flex-col gap-6">
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="font-bold text-white text-6xl"
          >
            Good to see you again!
          </motion.p>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-white text-2xl"
          >
            Please <span className="font-bold">LOG IN</span> to continue your
            conversation.
          </motion.p>
        </div>
        <motion.img
          initial={{ transform: " translateY(8px)", scale: 0.5 }}
          animate={{ transform: "translateY(16px)", scale: 5 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: easeInOut,
          }}
          className="absolute top-80 w-[580px] select-none"
          src={bgImg}
          alt=""
        />
      </div>
      <div className="formContainer w-full flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 p-6">
          <input
            className="outline-none w-96 text-primary py-2 px-2 border-primary border-2 rounded-lg text-xl"
            type="text"
            placeholder="Enter Username"
          />
          <div className=" w-96 flex justify-start items-center py-2 px-2 border-primary border-2 rounded-lg text-xl">
            <input
              className="flex-1  outline-none text-primary"
              type={isVisible ? "text" : "password"}
              placeholder="Enter Password"
            />
            <motion.button
              whileTap={{ scale: 0.83 }}
              className="text-primary"
              onClick={handlePassword}
            >
              {isVisible ? <FiEye /> : <FiEyeOff />}
            </motion.button>
          </div>
          <motion.button
            whileTap={{ scale: 0.83 }}
            className="bg-primary py-2 px-2 rounded-lg text-white font-bold text-xl hover:bg-blue-600"
          >
            Log in
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Login;
