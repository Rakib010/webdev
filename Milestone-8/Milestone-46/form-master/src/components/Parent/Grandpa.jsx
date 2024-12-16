import { createContext, useState } from "react";
import Aunty from "./Aunty";
import Father from "./Father";
import Uncle from "./Uncle";

export const AssetContext = createContext("gold");

export const MoneyContext = createContext("No Money");

const Grandpa = () => {
  const asset = "Diamond";

  const [money, setMoney] = useState(1000);

  return (
    <div className="border-2 rounded-lg p-4 text-center">
      <h2 className="p-4 text-4xl">Grandpa</h2>
      <p>Net Money:{money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="Gold">
          <div className="flex justify-center">
            <Father asset={asset}></Father>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </div>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/* 
  1. Create a context and export it
  2. Add provider for the context with a value . value could be anything
  3. useContext to access value in the context API

*/
