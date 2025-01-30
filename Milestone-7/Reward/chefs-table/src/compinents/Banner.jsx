const Banner = () => {
  return (
    <div>
      <div
        className="hero h-96 mt-10 object-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1551218808-94e220e084d2)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>

            <button className="btn bg-green-400">Explore Now</button>
            <button className="btn ml-8">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
