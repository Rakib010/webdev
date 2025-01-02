import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import categories from "./campaign";

const CategorySlider = () => {
  return (
    <div className="my-16 ">
      <div className="text-center mb-12">
        <span className="text-4xl font-bold text-orange-500 ml-2 ">Our Campaigns Category</span>
      </div>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-[90%] lg:w-[80%] mx-auto"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <div
                className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-md"
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <p className="text-center text-lg font-semibold mt-4 text-blue-900">
                {category.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
