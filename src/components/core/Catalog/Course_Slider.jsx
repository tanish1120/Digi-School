import React, { useEffect, useState } from "react"
// Import Swiper React components


// Import Swiper styles
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';


// import { getAllCourses } from "../../services/operations/courseDetailsAPI"
import Course_Card from "./Course_Card"

function Course_Slider({ Courses }) {
  return (
    <>
      {Courses?.length ? (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar,Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{delay:3500,
                     disableOnInteraction: false,}}
          navigation={true}
          pagination={{ clickable: true,}}
          scrollbar={{ draggable: true }}
          

        >
        {Courses?.map((course, index) => (
            <SwiperSlide key={index}>
              <Course_Card course={course} Height={"h-[500px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

export default Course_Slider
