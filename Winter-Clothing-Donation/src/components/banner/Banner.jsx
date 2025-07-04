import React from "react";

import photo1 from "../../assets/01.jpg";
import photo2 from "../../assets/2.jpg";
import photo3 from "../../assets/3.jpg";
import photo4 from "../../assets/4.jpg";

const Banner = () => {
  return (
    <div className="relative my-6">
      <div
        className="carousel w-full h-[450px] rounded-lg"
      >
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img
            src={photo2}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 flex justify-between transform">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full h-full">
          <img
            src={photo3}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 flex justify-between transform">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full h-full">
          <img
            src={photo1}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 flex justify-between transform">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full h-full">
          <img
            src={photo4}
            alt="Slide 4"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 flex justify-between transform">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
