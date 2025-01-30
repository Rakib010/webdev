import { useContext } from "react";
import { AssetContext } from "./Grandpa";

const Friend = ({ asset }) => {
  const gift = useContext(AssetContext);

  return (
    <div className="border-pink-400 border-2 p-4 rounded-lg mr-4">
      <h2>Spacial</h2>
      <p>has:{asset}</p>
      <p>Also has: {gift}</p>
    </div>
  );
};

export default Friend;
