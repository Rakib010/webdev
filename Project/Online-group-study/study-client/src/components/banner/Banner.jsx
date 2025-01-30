// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import ph1 from "../../assets/photo1.avif";
import ph2 from "../../assets/photo2.jpg";
import ph3 from "../../assets/photo3.avif";

export default function Banner() {
  return (
    <div className="container px-6 py-10 mx-auto ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide image={ph1} text=" Learn Together, Grow Together!" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={ph2}
            text="Create assignments, complete them, and grade your friends—all in one app!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={ph3} text="Collaborative Study, Redefined!" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
