import { useState } from "react";
import "./App.css";
import "./style.css";
import Products from "./components/Products/Products";
import Count from "./components/usestage/Count";
import Effect from "./components/useeffect/effect";
import Rendering from "./components/Rendering/Rendering";
import Transfer from "./components/tarnsfer/Transfer";

function App() {
  const information = {
    message: "secret",
    phone: "018358742",
  };

  /* const [status, setStatus] = useState(0); */

  /* child to parent props transfer */
  const transfer = (message) => {
    console.log(message);
  };

  return (
    <>
      <h1>Hello React</h1>
      <Products info={information}></Products>
      <Count></Count>
      <Effect></Effect>
      <Rendering></Rendering>

      {/*  */}
      <Transfer transfer={transfer}></Transfer>
    </>
  );
}

export default App;
