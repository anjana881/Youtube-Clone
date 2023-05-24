import React, { useState } from "react";

import { BiDotsVerticalRounded, BiMicrophone } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import RightSidebar from "./RightSidebar";
import { setShow } from "../sliceFeatures/toggleSlice";

const Navbar = () => {
  const [data, setData] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  // const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  // const { show } = useSelector((state) => {
  //   return state.toggleSidebar;
  // });
  const handleShow = () => {
    console.log("handle show");
    dispatch(setShow());
  };
  return (
    <>
      <div className="navbar md: flex p-4 text-white justify-between items-center content-center">
        <div className="logo flex w-3/12 ">
          <button
            onClick={handleShow}
            className="menu-bar text-3xl mr-4 flex items-center content-center"
          >
            <AiOutlineMenu />
          </button>
          <img src={logo} alt="logo" className="h-7 w-28" />
        </div>

        <div className="search w-1/2 flex">
          <input
            type="text"
            value={searchInput}
            placeholder="Search"
            onChange={(e) => setSearchInput(e.target.value)}
            className="search-input bg-transparent border-gray-500 border rounded-l-3xl px-8 py-2 w-3/4  "
          />
          <button
            onClick={() => setSearch(searchInput)}
            type="submit"
            className="border border-gray-500 rounded-r-3xl  px-6 py-2 bg-gray-500"
          >
            <AiOutlineSearch />
          </button>
          <button className="ml-4">
            <i className="text-2xl">
              <BiMicrophone />
            </i>
          </button>
        </div>

        <div className="logo-right  w-3/12 flex justify-end ">
          <div className="flex justify-center items-center content-center text-white">
            <i className="text-2xl">
              <BiDotsVerticalRounded />
            </i>
          </div>
          <button className="flex justify-center items-center content-center border border-gray-500 rounded-3xl  px-6 py-2">
            <i className="mr-2">
              <BsPersonCircle />
            </i>
            <p>Sign In</p>
          </button>
        </div>
      </div>
      {/* {show && <RightSidebar />} */}
    </>
  );
};

export default Navbar;
