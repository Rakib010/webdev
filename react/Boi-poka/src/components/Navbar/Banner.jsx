import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div>
      <div className="bg-base-200 mt-8 rounded-lg p-6 ">
        <div className="flex justify-between items-center flex-col lg:flex-row-reverse">
          <img src={bannerImg} className="rounded-lg" />
          <div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-4xl font-bold mb-10 px-16 ">
                Books To Freshen Up <br /> Your Bookshelf
              </p>
              <button className="btn btn-primary font-semibold ">
                View The List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
