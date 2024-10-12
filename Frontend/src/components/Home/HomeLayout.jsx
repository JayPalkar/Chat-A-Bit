/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import ChatBox from "./components/ChatBox";
import UserProfile from "./components/UserProfile";

const HomeLayout = () => {
  return (
    <div>
      <div className="p-2">
        <div>
          <NavBar />
        </div>
        <div className="flex ">
          <div className="flex-auto">
            <SideBar />
          </div>
          <div className="flex-auto">
            <ChatBox />
            <UserProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
