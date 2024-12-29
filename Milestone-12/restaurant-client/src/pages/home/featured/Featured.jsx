import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
/* import "./featured.css"; */

import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="featured-item bg-fixed py-12"
      style={{
        backgroundImage: `url(${featuredImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="container mx-auto px-4">
        {/* Section Title */}
        <SectionTitle heading="Featured Item" subHeading="Check it out" />

        {/* Featured Content */}
        <div className="md:flex justify-center items-center gap-8 bg-gray-800 bg-opacity-75 rounded-lg p-6">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src={featuredImg}
              alt="Featured Item"
              className="rounded-lg object-cover w-full h-full shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 mt-6 md:mt-0 text-white">
            <p className="text-gray-400 text-sm">March 20, 2023</p>
            <h3 className="text-3xl font-bold mt-2">WHERE CAN I GET SOME?</h3>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-primary mt-6">Order Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
