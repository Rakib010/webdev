import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import ServiceData from "./Banner";

const Slider = () => {
  return (
    <div className="bg-purple-50 py-8 mt-4 rounded-lg dark:bg-darkBackground dark:text-darkText">
      <div className="text-center mb-8"></div>
      <div className="flex items-center justify-center flex-col">
        <Swiper
          breakpoints={{
            340: { slidesPerView: 1, spaceBetween: 15 },
            700: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 2, spaceBetween: 20 },
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="w-[90%] lg:w-[90%]"
        >
          {ServiceData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center shadow-lg rounded-xl overflow-hidden bg-white cursor-pointer transform hover:scale-105 transition-transform duration-300">
                {/* Image */}
                <div
                  className="flex-1 w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                  }}
                >
                  {/* Text  */}
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white p-6">
                    <div className="text-center">
                      <h1 className="text-xl lg:text-2xl font-bold mb-4">
                        {item.title}
                      </h1>
                      <p className="text-sm lg:text-base">{item.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
