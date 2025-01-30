import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const HeroCard = () => {
  const locations = [
    {
      name: "COX'S BAZAR",
      img: "https://swiperjs.com/demos/images/nature-1.jpg",
    },
    {
      name: "SREEMANGAL",
      img: "https://swiperjs.com/demos/images/nature-2.jpg",
    },
    {
      name: "SUNDARBANS",
      img: "https://swiperjs.com/demos/images/nature-3.jpg",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="mySwiper w-11/12 mx-auto"
    >
      {locations.map((location, index) => (
        <SwiperSlide key={index}>
          <div className="relative group">
            {/* Background Image */}
            <img
              src={location.img}
              alt={location.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold">{location.name}</h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCard;
