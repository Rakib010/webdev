import { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./Grandpa";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);

  return (
    <div className="border-pink-400 border-2 p-4 rounded-lg mr-4">
      <h1>Aunty</h1>
      <section className="flex">
        <Cousin name={"Tushar"}></Cousin>
        <Cousin name={"Shuba"}></Cousin>
      </section>
      <p>Money:{money}</p>
      <button onClick={() => setMoney(money + 100)}>Add Money</button>
    </div>
  );
};

export default Aunty;
