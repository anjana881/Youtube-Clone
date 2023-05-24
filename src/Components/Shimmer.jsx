import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer flex">
      {Array(3)
        .fill("")
        .map((value, index) => (
          <div className="w-[600px] h-[250px] m-4 " key={index}>
            <p className="bg-[#333333] m-4 rounded-md h-[200px] w-[600]"></p>
            <p className="bg-[#333333] m-4 rounded-md h-[200px] w-[600]"></p>
            {/* <p className="bg-[#333333] m-4 rounded-md h-[250px] w-[600]"></p> */}
          </div>
        ))}
      Shimmer
    </div>
  );
};

export default Shimmer;
