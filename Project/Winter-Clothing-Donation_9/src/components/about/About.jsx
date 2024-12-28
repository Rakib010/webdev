import React, { useEffect } from "react";
import imgDonation from "../../assets/Donation.avif";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      /* duration: 1000,
      once: true,  */
    });
  }, []);

  return (
    <div className="bg-blue-50 py-10 px-5 rounded-lg mt-10 shadow-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Image */}
        <div
          className="md:w-1/2"
          data-aos="fade-right" 
        >
          <img
            src={imgDonation}
            alt="Donation"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text */}
        <div
          className="md:w-1/2 mt-6 md:mt-0 md:pl-10 text-center md:text-left"
          data-aos="fade-left" 
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our mission is to bring warmth to underprivileged communities in
            Bangladesh during the cold months. We connect generous donors with
            volunteers to ensure that no one faces the winter without enough
            clothing.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            How You Can Contribute
          </h2>

          {/* Button */}
          <Link
            to="/DonationForm"
            className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium py-2 px-6 rounded-md shadow-md transition duration-300"
          >
            Contribute Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
