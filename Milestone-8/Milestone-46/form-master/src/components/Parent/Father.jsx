import Brother from "./Brother";
import MySelf from "./MySelf";
import Sister from "./Sister";

const Father = ({asset}) => {
  return (
    <div className="border-pink-400 border-2 p-4 rounded-lg mr-4">
      <h1 className="text-2xl">Father</h1>

      <section className="flex">
        <MySelf asset={asset}></MySelf>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Father;
