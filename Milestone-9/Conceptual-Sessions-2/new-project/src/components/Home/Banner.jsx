import bannerImg from "../../assets/images.jpg";

const Banner = () => {
  return (
    <div className="w-full bg-base-200 flex items-center mt-10 py-20 rounded-lg">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">Your Smile, Our Priority!</h1>
          <p className="py-6 text-lg text-gray-700">
            Experience world-class dental care in a friendly and comfortable
            environment. From regular checkups to advanced treatments, we’re
            here to ensure your smile shines bright.
          </p>
          <button className="btn btn-primary w-fit">Book an Appointment</button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={bannerImg}
            alt="Dental Care"
            className="rounded-lg shadow-lg w-full lg:w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
