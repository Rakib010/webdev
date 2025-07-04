import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center px-4">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Hello, I'm Pic Seek</h1>
          <p className="py-6 text-lg text-gray-600">
            Discover the power of AI-driven image generation. Turn your ideas
            into stunning visuals effortlessly.
          </p>
          <Link to="/generateImg" className="btn btn-primary px-6 py-3 text-lg">
            Generate Image
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
