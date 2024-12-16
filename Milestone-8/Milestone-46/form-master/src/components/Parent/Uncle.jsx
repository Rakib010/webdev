import Cousin from "./Cousin";

const Uncle = ({ asset }) => {
  return (
    <div className="border-pink-400 border-2 p-4 rounded-lg mr-4">
      <h1>Uncle</h1>
      <section className="flex">
        <Cousin name={"Rafsan"} asset={asset}></Cousin>
        <Cousin name={"Sohana"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
