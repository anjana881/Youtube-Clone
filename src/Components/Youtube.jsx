import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Navbar from "./Navbar";
import RightSidebar from "./RightSidebar";
import Filter from "./Filter";
import Videos from "./Videos";
import Card from "./Card";
import axios from "axios";
import { instance } from "../axios";
import { useSelector } from "react-redux";
import SmallSidebar from "./SmallSidebar";

const Youtube = () => {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const item = useSelector((store) => store.toggleSidebar.show);

  const [videos, setVideos] = useState([]);
  // const API_KEY = "b067c7c3admsh3663499c5e305c7p1d7d6ajsn29888094e210";

  useEffect(() => {
    const fetchVideos = async () => {
      await instance
        .get(`/video/data?video_id=hs1W2KQluWA`)
        .then((res) => {
          console.log("response", res);
          setVideos(res.data);
        })
        .catch((err) => console.log(err));
    };

    fetchVideos();
  }, []);

  return (
    <>
      <Navbar />
      {/* <SmallSidebar /> */}
      <div className="flex">
        {item ? <RightSidebar /> : <SmallSidebar />}
        {/* {item && <RightSidebar />} */}

        <div className="w-4/5 flex flex-col">
          <Filter />
          {videos.length === 0 ? (
            <Shimmer />
          ) : (
            <div className="p-8 flex flex-wrap">
              {videos.map((video, index) => (
                <div key={index}>
                  {" "}
                  <Card data={video} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Youtube;
