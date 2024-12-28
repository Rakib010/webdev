import React, { useEffect } from "react";
import { FaHandsHelping, FaMapMarkerAlt, FaBox } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-12 my-10">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <h2 className="text-4xl font-bold">How It Works</h2>
          <p className="text-gray-600 mt-3">
            Learn how you can contribute, locate collection points, and explore
            supported divisions.
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid md:grid-cols-3 gap-10">
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <FaHandsHelping className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Donate</h3>
            <p className="text-gray-600 mt-2">
              Fill out the donation form and let us know what you’re
              contributing. Every item counts!
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <FaMapMarkerAlt className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Find a Collection Point
            </h3>
            <p className="text-gray-600 mt-2">
              Locate the nearest collection point in your area using our
              interactive map.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <FaBox className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Supported Divisions
            </h3>
            <p className="text-gray-600 mt-2">
              Your contributions support local communities across several
              divisions. See the full list below.
            </p>
          </div>
        </div>

        {/* Supported Divisions Section */}
        <div className="mt-12" data-aos="zoom-in" data-aos-delay="1000">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Supported Divisions
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Dhaka",
              "Chittagong",
              "Barisal",
              "Khulna",
              "Mymensingh",
              "Rajshahi",
              "Rangpur",
              "Sylhet",
            ].map((division) => (
              <button
                key={division}
                className="btn btn-success text-white px-4 py-2 rounded-md shadow-lg"
              >
                {division}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
