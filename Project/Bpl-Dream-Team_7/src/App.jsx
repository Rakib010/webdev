import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import "./App.css";
import { useState } from "react";
import AvailablePlayers from "./component/AvailablePlayers";
import Footer from "./component/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isActive, setIsActive] = useState({
    available: true,
    selected: false,
  });
  const [coinCount, setCoinCount] = useState(0);
  const [selectPlayer, setSelectPlayer] = useState([]);

  // remove selected player
  const handleDelete = (id) => {
    const remainPlayer = selectPlayer.filter((p) => p.id != id);
    setSelectPlayer(remainPlayer);
    toast("Remove Player");
  };

  // players all functionality
  const handleSelectPlayer = (player) => {
    const isExist = selectPlayer.find((p) => p.id === player.id);

    if (isExist) {
      toast("Player already selected", {
        position: "top-left",
      });
    } else if (selectPlayer.length >= 6) {
      toast("Already 6 players Added", {
        position: "top-center",
      });
    } else if (coinCount < player.price) {
      toast("Not enough money to buy this player.Claim some Credit", {
        position: "top-center",
      });
    } else {
      setCoinCount(coinCount - player.price);
      setSelectPlayer([...selectPlayer, player]);
      toast(`Cognates !! ${player.name} is now in your squad`, {
        position: "top-center",
      });
    }
  };
  /*  console.log(selectPlayer); */

  // coin added function
  const handleCoinBtn = (totalCoin) => {
    setCoinCount(coinCount + totalCoin);
    toast("Credit Added to your Account", {
      position: "top-center",
    });
  };
  // toggle Two buttons
  const handleButton = (button) => {
    setIsActive({
      available: button === "available",
      selected: button === "selected",
    });
  };
  /*   console.log(isActive); */
  return (
    <div>
      {/* navbar */}
      <Navbar coinCount={coinCount}></Navbar>
      <div className="w-10/12 mx-auto">
        {/* Hero section */}
        <Hero handleCoinBtn={() => handleCoinBtn(50000)}></Hero>

        <AvailablePlayers
          isActive={isActive}
          handleButton={handleButton}
          handleSelectPlayer={handleSelectPlayer}
          selectPlayer={selectPlayer}
          handleDelete={handleDelete}
        ></AvailablePlayers>
        <ToastContainer />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
