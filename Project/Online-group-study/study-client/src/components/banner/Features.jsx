import {
  FaTasks,
  FaUsers,
  FaGraduationCap,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-3 text-gray-800 ">
          Key Features
        </h2>
        <p className="text-gray-600 mb-12">
          Explore the exciting features that make group study engaging and
          productive.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow p-6 border">
            <div className="text-teal-500 text-4xl mb-4">
              <FaTasks />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Create Assignments
            </h3>
            <p className="text-gray-600">
              Easily create and share assignments with your friends to enhance
              collaborative learning.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border">
            <div className="text-teal-500 text-4xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Connect with Friends
            </h3>
            <p className="text-gray-600">
              Every registered user becomes your friend, enabling seamless group
              collaboration.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border">
            <div className="text-teal-500 text-4xl mb-4">
              <FaGraduationCap />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Grade Assignments
            </h3>
            <p className="text-gray-600">
              Review and grade your friends’ assignments to help each other
              improve and grow.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border">
            <div className="text-teal-500 text-4xl mb-4">
              <FaChalkboardTeacher />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Free to Use
            </h3>
            <p className="text-gray-600">
              Enjoy all features for free and focus on learning without any cost
              barriers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
