const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-8">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-thin mb-4">
        {title}
      </h1>
      <h1 className="text-xs md:text-base text-gray-600 text-center font-thin">
        {subtitle}
      </h1>
    </div>
  );
};

export default Heading;
