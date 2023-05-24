import React from "react";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
const SmallSidebar = () => {
  return (
    <div className="small-sidebar w-32 text-white flex flex-col p-3">
      <div className="home flex flex-col items-center py-2 px-4">
        <i>
          <AiFillHome />
        </i>
        <p className="text-xs">Home</p>
      </div>
      <div className="subscribe flex flex-col items-center  py-3 px-4">
        <i>
          <MdSubscriptions />
        </i>
        <p className="text-xs">Subscriptions</p>
      </div>
      <div className="home flex flex-col items-center py-3 px-4">
        <i>
          <AiFillHome />
        </i>
        <p className="text-xs">Home</p>
      </div>
    </div>
  );
};

export default SmallSidebar;
