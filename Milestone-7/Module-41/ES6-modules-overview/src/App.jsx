import { useState } from "react";
import "./App.css";
import Watches from "./componets/Watches";
import WatchesOwn from "./componets/WatchesOwn";

function App() {
  const watches = [
    { id: 1, name: "Apple Watch", brand: "Apple", price: 200 },
    { id: 2, name: "MI Smart Watch", brand: "MI", price: 100 },
    { id: 3, name: "Samsung Galaxy Watch", brand: "Samsung", price: 50 },
  ];

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        {watches.map((watch) => (
          <Watches key={watch.id} watch={watch}></Watches>
        ))}
      </div>
      {/* <WatchesOwn></WatchesOwn> */}
    </>
  );
}

export default App;
