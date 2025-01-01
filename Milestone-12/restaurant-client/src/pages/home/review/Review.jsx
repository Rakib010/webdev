import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper modules
import { Navigation } from "swiper/modules";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="py-12 bg-gray-100 w-11/12 mx-auto my-10 rounded-lg">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <SectionTitle
          heading="What Our Clients Say"
          subHeading="Testimonials"
        />

        {/* Swiper Section */}
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mt-8"
          spaceBetween={30}
          slidesPerView={1}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="bg-white p-20 rounded-lg shadow-lg flex flex-col items-center">
                {/* Rating */}
                <div className="text-yellow-400 text-4xl mb-4">
                  {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                </div>
                {/* Review Details */}
                <p className="text-gray-600 italic text-center mb-4">
                  "{review.details}"
                </p>
                {/* Reviewer Name */}
                <p className="text-gray-800 text-3xl font-semibold">
                  {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
