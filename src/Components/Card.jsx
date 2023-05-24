import React from "react";

const Card = (props) => {
  return (
    <div className=" text-black" key={props.data.id}>
      <div className="thumbnail-img  ">
        <video
          className="p-4"
          width="320"
          height="240"
          controls
          // className="thumb-img cursor-pointer w-[100%]"
        >
          <source src={props.data.url} />
        </video>
      </div>
    </div>
  );
};

export default Card;
{
  /* <div className="title flex flex-col mb-6 items-center">
            <p className="mb-4">{props.data?.snippet?.title}</p>
            <p className="mb-4">{props.data?.snippet.description}</p>
          </div> */
}
