/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Available from "./Available";
import Selected from "./Selected";

const AvailablePlayers = ({
  handleButton,
  isActive,
  handleSelectPlayer,
  selectPlayer,
  handleDelete,
}) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("PlayerData.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div></div>
        <div>
          <button
            onClick={() => handleButton("available")}
            className={`${isActive.available ? "btn active" : "btn"}`}
          >
            Available
          </button>
          <button
            onClick={() => handleButton("selected")}
            className={`${isActive.selected ? "btn active" : " btn"}`}
          >
            Selected ({selectPlayer.length})
          </button>
        </div>
      </div>
      <div>
        {isActive.available ? (
          <Available
            handleSelectPlayer={handleSelectPlayer}
            players={players}
          />
        ) : (
          <Selected selectPlayer={selectPlayer} handleDelete={handleDelete}
          handleButton={ handleButton}
          />
        )}
      </div>
    </div>
  );
};

export default AvailablePlayers;
