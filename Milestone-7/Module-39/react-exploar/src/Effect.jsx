import { useEffect, useState } from "react";
import "./Effect.css";
import Effects from "./Effects";
export default function Effect() {
  const [effect, setEffect] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setEffect(data));
  }, []);

  return (
    <div className="box">
      <h3>Friends:{effect.length}</h3>

      {effect.map((effect) => (
        <Effects effect={effect}></Effects>
      ))}
    </div>
  );
}

/* 
 *data load
1.state to hold data
2.use effect with dependency array
3.use fetch to load data
4.set loaded data to the state 
5.display data on the component

*/
