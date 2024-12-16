const Hero = () => {
  return (
    <div className="w-11/12 mx-auto mt-5">
      <div className="hero rounded-lg">
        <img
          className="h-96 w-full object-cover rounded-lg"
          src="https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?q=80&w=1876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="flex flex-col justify-center items-center text-white text-center ">
          <h1 className="mb-5 text-5xl font-bold">Hello people</h1>
          <p className="mb-5">
            Bangla hotels are known for their unique blend of warm
            hospitality,cultural richness, and comfort that <br /> make guests
            feel truly at home.From bustling city hotels to serene beachfront
            resorts, these <br /> establishments offer a variety of options to
            cater to every type of traveler
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
