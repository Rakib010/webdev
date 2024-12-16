import { useEffect, useState } from "react";

export default function Effect({ style }) {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(0);

  const handleState = () => {
    setState(state + 1);
    // console.log(state);
  };

  useEffect(() => {
    console.log("Hello from userEffect");
  }, [state]);

  return (
    <>
      <div style={style}>
        <h2>This is State count :{state}</h2>
      </div>
      <button onClick={handleState} className="hero">
        State count{}
      </button>
    </>
  );
}
