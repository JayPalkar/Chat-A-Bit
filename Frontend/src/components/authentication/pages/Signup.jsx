/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import bgImg from "../../../assets/Imgs/signBg.png";
import { easeInOut, motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Signup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handlePassword = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex h-screen justify-center">
      <div className="imgContainer bg-primary w-full flex flex-col justify-center items-center">
        <div className="z-10 top-60 flex justify-center items-center flex-col gap-6">
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="font-bold text-white text-6xl"
          >
            Join us today!
          </motion.p>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-white text-2xl"
          >
            <span className="font-bold">SIGN UP</span> and start chatting
            instantly.
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
          className="relative right-36 top-180 w-[580px] select-none"
          src={bgImg}
          alt=""
        />
      </div>
      <div className="formContainer w-full flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 p-6">
          <input
            className="outline-none w-96 text-primary py-2 px-2 border-primary border-2 rounded-lg text-xl"
            type="text"
            placeholder="Enter Full Name"
          />
          <input
            className="outline-none w-96 text-primary py-2 px-2 border-primary border-2 rounded-lg text-xl"
            type="text"
            placeholder="Enter Username"
          />
          <input
            className="outline-none w-96 text-primary py-2 px-2 border-primary border-2 rounded-lg text-xl"
            type="email"
            placeholder="Enter email"
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
          <div className=" w-96 flex justify-start items-center py-2 px-2 border-primary border-2 rounded-lg text-xl">
            <input
              className="flex-1  outline-none text-primary"
              type={isVisible ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <motion.button
              whileTap={{ scale: 0.83 }}
              className="text-primary"
              onClick={handlePassword}
            ></motion.button>
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className="flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="gender"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-lg  text-primary font-semibold"
              >
                Male
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-2"
                type="radio"
                value=""
                name="gender"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 text-lg  text-primary font-semibold"
              >
                Female
              </label>
            </div>
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

export default Signup;
