import React, { useContext } from "react";
import { AssetContext } from "./Grandpa";
const SisterFriend = () => {
  const gift = useContext(AssetContext);

  return (
    <div className="border-pink-400 border-2 p-4 rounded-lg mr-4">
      <h1>Friend</h1>
      <p>{gift}</p>
    </div>
  );
};

export default SisterFriend;
