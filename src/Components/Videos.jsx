import React, { useEffect, useState } from "react";
import SingleVideos from "./Card";
const API_KEY = "AIzaSyALr2eByNY6LAT1dUUM_mnh9tOzdzs58Cs";
const CHANNEL_ID = "@javascriptmastery";
let fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`;

const Videos = () => {
  const [allvideos, setAllVideos] = useState([]);
  // useEffect(() => {
  //   fetch(fetchUrl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       // const result = data.items.map((doc) => ({
  //       //   ...doc,
  //       //   Videolink: "https://www.youtube.com/embed/" + doc.id.videoId,
  //       // }));
  //       // setAllVideos(result);
  //     });
  // }, []);
  console.log(allvideos);
  return (
    <div className="videos">
      {/* {allvideos.map((item) => {
        return (
          <div>
            <iframe
              width="350"
              height="200"
              src={item.Videolink}
              title="videos"
              frameborder="0"
            ></iframe>
            <p>{item.snippet.title}</p>
          </div>
        );
      })} */}

      <div className="row flex"></div>
    </div>
  );
};

export default Videos;
