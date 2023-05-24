import React from "react";
import { TbMathGreater } from "react-icons/tb";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "./swiper.css";
import "swiper/swiper-bundle.css";

// Swiper.use([Navigation, Pagination]);
// import { SwiperSlide } from "swiper/react";
const Filter = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={10}
        className="mySwiper text-white"
        spaceBetween={0}
      >
        <SwiperSlide>
          <h3 className=" border-gray-500 border rounded-2xl p-2">ALL</h3>
        </SwiperSlide>

        <SwiperSlide>
          <h3 className=" border-gray-500 border rounded-2xl p-2">Mixes</h3>
        </SwiperSlide>

        <SwiperSlide>
          <h3 className=" border-gray-500 border rounded-2xl p-2">Music</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className=" border-gray-500 border rounded-2xl p-2">ALL</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className=" border-gray-500 border rounded-2xl p-2">ALL</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className=" border-gray-500 border rounded-2xl p-2">ALL</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className=" border-gray-500 border rounded-2xl p-2">ALL</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className=" border-gray-500 border rounded-2xl p-2">ALL</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className=" border-gray-500 border rounded-2xl p-2">ALL</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className=" border-gray-500 border rounded-2xl p-2">ALL</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className=" border-gray-500 border rounded-2xl p-2">ALL</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className=" border-gray-500 border rounded-2xl p-2">ALL</h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Filter;
