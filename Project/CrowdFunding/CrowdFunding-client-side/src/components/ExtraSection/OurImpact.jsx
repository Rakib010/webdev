const OurImpact = () => {
  return (
    <div className="bg-gray-50 py-12 mt-10 ">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Impact</h2>
        <p className="text-gray-600 mt-2">
          See how we’ve made a difference in lives around the world.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%] lg:w-[80%] mx-auto">
        <div className="p-6 text-center bg-white rounded-lg shadow">
          <h3 className="text-2xl font-bold text-indigo-600">5,000+</h3>
          <p className="text-gray-600 mt-2">Lives Impacted</p>
        </div>
        <div className="p-6 text-center bg-white rounded-lg shadow">
          <h3 className="text-2xl font-bold text-indigo-600">$1M+</h3>
          <p className="text-gray-600 mt-2">Donations Collected</p>
        </div>
        <div className="p-6 text-center bg-white rounded-lg shadow">
          <h3 className="text-2xl font-bold text-indigo-600">50+</h3>
          <p className="text-gray-600 mt-2">Successful Campaigns</p>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
