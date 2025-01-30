import { useContext } from "react";
import { MoneyContext } from "./Grandpa";

const Brother = () => {
  const [money] = useContext(MoneyContext);

  return (
    <div className="border-pink-400 border-2 p-4 rounded-lg mr-4">
      <h1>Brother</h1>
      <p>Grandpa:{money}</p>
    </div>
  );
};

export default Brother;
