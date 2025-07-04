/* eslint-disable react/prop-types */
const Selected = ({ selectPlayer, handleDelete, handleButton }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">
        Selected players({selectPlayer.length}/6){" "}
      </h1>
      <div className="mb-10">
        {selectPlayer.map((player) => {
          return (
            <div
              key={player.id}
              className="flex justify-between items-center p-4 bg-slate-100 rounded-lg border mb-4"
            >
              <div className="flex items-center">
                <img
                  className="w-40 h-24 object-cover rounded-lg"
                  src={player.image}
                  alt=""
                />
                <div className="ml-4">
                  <p className="text-xl font-bold">{player.name}</p>
                  <p className="mt-2">{player.batting_style}</p>
                </div>
              </div>
              <button onClick={() => handleDelete(player.id)} className="btn">
                <i className="fa-regular fa-trash-can text-red-700 font-bold text-xl"></i>
              </button>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => handleButton("available")}
        className="btn mb-4 bg-[#e7fe29] border-orange-500"
      >
        Add more Player
      </button>
    </div>
  );
};

export default Selected;
