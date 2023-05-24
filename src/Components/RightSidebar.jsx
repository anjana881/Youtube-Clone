import React, { useState } from "react";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

const RightSidebar = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="right-sidebar text-lg text-white h-screen  flex flex-col p-5">
          <div className="home flex  items-center content-center py-2 px-4">
            <i className="mr-3">
              <AiFillHome />
            </i>
            <p>Home</p>
          </div>
          <div className="subscribe flex  items-center content-center py-3 px-4">
            <i className="mr-3">
              <MdSubscriptions />
            </i>
            <p>Subscriptions</p>
          </div>
          <div className="home flex  items-center content-center py-3 px-4">
            <i className="mr-3">
              <AiFillHome />
            </i>
            <p>Home</p>
          </div>
          <hr className="border-gray-500 border h-0 " />
          <div className="library flex  items-center content-center py-3 px-4">
            <i className="mr-3">
              <MdVideoLibrary />
            </i>
            <p>Library</p>
          </div>
          <div className="home flex  items-center content-center py-3 px-4">
            <i className="mr-3">
              <AiFillHome />
            </i>
            <p>Home</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
