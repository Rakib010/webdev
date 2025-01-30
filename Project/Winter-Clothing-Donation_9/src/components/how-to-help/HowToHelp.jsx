import React from "react";
import {
  FaDonate,
  FaHandsHelping,
  FaBullhorn,
  FaMoneyCheckAlt,
  FaMobileAlt,
  FaUniversity,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HowToHelp = () => {
  const navigate = useNavigate();

  const handleDonation = () => {
    navigate("/DonationForm");
  };

  const handleVolunteer = () => {
    navigate("/volunteerForm");
  };

  return (
    <section className="py-12 my-10 bg-gradient-to-r from-green-100 via-white to-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-2xl font-serif mt-2">
            Make a difference today! Here are some simple ways you can support
            our mission.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <FaDonate className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Donate</h3>
            <p className="text-gray-600 mt-2">
              Your donations help us provide essential items to those in need.
              Every contribution counts!
            </p>
            <button
              onClick={handleDonation}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
            >
              Donate Now
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <FaHandsHelping className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Volunteer</h3>
            <p className="text-gray-600 mt-2">
              Join our team of volunteers and help us organize events,
              distribute donations, and make an impact.
            </p>
            <button
              onClick={handleVolunteer}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
            >
              Sign Up
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <FaBullhorn className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Spread the Word
            </h3>
            <p className="text-gray-600 mt-2">
              Share our mission on social media and encourage your friends and
              family to get involved.
            </p>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
              Share Now
            </button>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <button className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaMobileAlt className="text-pink-500 text-4xl mb-2" />
            <span className="text-gray-800 font-medium">Bkash</span>
          </button>
          <button className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaMobileAlt className="text-orange-500 text-4xl mb-2" />
            <span className="text-gray-800 font-medium">Nagad</span>
          </button>

          <button className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaMoneyCheckAlt className="text-blue-500 text-4xl mb-2" />
            <span className="text-gray-800 font-medium">Upay</span>
          </button>

          {/* Bank */}
          <button className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaUniversity className="text-green-600 text-4xl mb-2" />
            <span className="text-gray-800 font-medium">Bank</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
