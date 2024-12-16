import { useState } from "react";
import Effect from "../useeffect/effect";
import Count from "../usestage/Count";

export default function Rendering() {
  const [status, setStatus] = useState(false);

  const handleStatus = () => {
    setStatus(!status);
  };

  // css
  const dynamicStyle = {
    padding: "10px",
    color: "white",
    borderRadius: "5px",
    backgroundColor: status ? "green" : "red",
    border: status ? "2px solid darkgreen" : "2px solid darkred",
  };

  return (
    <>
      <button className="box" onClick={handleStatus}>
        Handle Status
      </button>

      {status ? (
        <Count style={dynamicStyle}></Count>
      ) : (
        <Effect style={dynamicStyle}></Effect>
      )}
    </>
  );
}
