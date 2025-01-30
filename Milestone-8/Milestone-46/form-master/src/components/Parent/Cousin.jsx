import Friend from "./Friend";
import SisterFriend from "./SisterFriend";

const Cousin = ({ name, asset }) => {
  return (
    <div className="border-pink-400 border-2 p-4 rounded-lg mr-4">
      <h2>Cousin</h2>
      <p>{name}</p>
      <section>
       {
        asset &&<Friend asset={asset}></Friend>
       }
       {
        name==="Shuba" && <SisterFriend></SisterFriend>
       }
      </section>
    </div>
  );
};

export default Cousin;
