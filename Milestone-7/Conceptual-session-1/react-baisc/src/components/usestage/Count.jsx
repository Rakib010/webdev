import { useState } from "react";

export default function Count({style}) {
  const [state, setState] = useState(0);

  const handleState = () => {
    setState(state + 1);
    // console.log(state);
  };

  let storeVariable = 0;
  const variableCount = () => {
    storeVariable = storeVariable + 1;
    // console.log(storeVariable);
  };

  const handleHero = (message) => {
    console.log(message);
  };

  return (
    <>
      <div style={style}>
        <h2>This is State count :{state}</h2>
        <h2>This is Variable count:{storeVariable}</h2>
      </div>
      <button onClick={handleState} className="hero">
        State count{}
      </button>
      <button onClick={variableCount} className="hero">
        Variable count
      </button>

      <br />

      {/* when kono onClick die value pass korte hobe thokhn an anonymous function add korte hobe na hoy onClick auto kaj korbe */}
      <button onClick={() => handleHero("Yes click This")} className="hero">
        pass the value{" "}
      </button>
    </>
  );
}
