/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
const Player = ({ player, handleSelectPlayer }) => {
  const { name, image, country, role, batting_style, price,bowling_style } = player;
  return (
    <div>
      <div className="p-4 border rounded-lg">
        <img
          className="w-full h-48 object-cover rounded-lg"
          src={image}
          alt=""
        />
        <div className="flex items-center gap-4 my-2 ">
          <i class="fa-solid fa-user"></i>
          <p className="font-bold">{name}</p>
        </div>
        <div className="flex items-center justify-between my-2">
          <p className="text-[#131313B3]">
            <i class="fa-solid fa-flag mr-2"></i>
            {country}
          </p>
          <p className="px-2 py-1 rounded-lg bg-slate-100">{role}</p>
        </div>
        <hr className="my-2" />
        <h2 className="font-semibold">Rating</h2>
        <div className="flex items-center justify-between my-2">
          <p className="text-[#131313B3]">{batting_style}</p>
          <p>{bowling_style}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Price: ${price}</p>
          <button onClick={() => handleSelectPlayer(player)} className="btn">
            Chose player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
