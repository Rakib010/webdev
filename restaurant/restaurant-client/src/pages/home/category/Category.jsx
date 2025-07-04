import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="w-11/12 mx-auto my-10">
      <SectionTitle
        heading={"From 11.00am to 10.00pm"}
        subHeading={"Order Online"}
      />

      <Swiper
        slidesPerView={4} // Display one slide at a time
        centeredSlides={true} // Center the active slide
        spaceBetween={20} // Set a gap of 20px between slides
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="Salads" className="rounded-lg object-cover" />
          <h3 className="text-2xl uppercase text-center -mt-10 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Pizza" className="rounded-lg object-cover" />
          <h3 className="text-2xl uppercase text-center -mt-10 text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide3}
            alt="Desserts"
            className="rounded-lg object-cover"
          />
          <h3 className="text-2xl uppercase text-center -mt-10 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide4}
            alt="Desserts"
            className="rounded-lg object-cover"
          />
          <h3 className="text-2xl uppercase text-center -mt-10 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="Salads" className="rounded-lg object-cover" />
          <h3 className="text-2xl uppercase text-center -mt-10 text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
