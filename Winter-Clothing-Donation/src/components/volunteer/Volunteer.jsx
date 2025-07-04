import React from "react";
import { Link } from "react-router-dom";

const Volunteer = () => {
  return (
    <div className="py-10 mt-8">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-4">
          Volunteer Opportunities
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          Join our team of dedicated volunteers and make a direct impact on your
          community.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event Planning */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Event Planning</h3>
            <p className="text-gray-700 mb-6">
              Help organize fundraising events, coordinate community gatherings,
              and be a part of our impactful events that bring people together.
            </p>
            <button className="btn btn-outline">Learn More</button>
          </div>

          {/* Delivery Driver */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Delivery Driver</h3>
            <p className="text-gray-700 mb-6">
              Transport donations to families in need. This role allows you to
              make a real difference in the lives of others by ensuring timely
              deliveries.
            </p>
            <button className="btn btn-outline">Learn More</button>
          </div>

          {/* Social Media Ambassador */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3
              className="text-xl font-semibold 
             mb-4"
            >
              Social Media Ambassador
            </h3>
            <p className="text-gray-700 mb-6">
              Use your social media platforms to spread the word about our
              mission and upcoming events. Help us amplify our impact online.
            </p>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/volunteerForm"
            className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium py-2 px-6 rounded-md shadow-md transition duration-300 animate__animated animate__pulse"
          >
            Sign Up to Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
