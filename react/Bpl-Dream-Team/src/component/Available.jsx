/* eslint-disable react/prop-types */
import Player from "./Player";

const Available = ({ players,handleSelectPlayer}) => {
  /* console.log(players); */
  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">Available Players</h1>
      <div className="grid grid-cols-3 gap-4">
        {players.map((player) => (
          <Player key={player.name} player={player}
          handleSelectPlayer={handleSelectPlayer}></Player>
        ))}
      </div>
    </div>
  );
};

export default Available;
