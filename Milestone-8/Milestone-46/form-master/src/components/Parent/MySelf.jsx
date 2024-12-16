import Friend from "./Friend";

const MySelf = ({asset}) => {
  return (
    <div className="border-pink-400 border-2 p-4 rounded-lg mr-4">
      <h1>MySelf</h1>
      <section className="flex">
        <Friend asset={asset}></Friend>
      </section>
    </div>
  );
};

export default MySelf;
