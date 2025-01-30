import { useState } from "react";
import Display from "./components/display";

const App = () => {
  const arr = [1, 2, 3, 4, 5];
  const data = {
    name: "rakib",
    age: 22,
  };

  const [value, setValue] = useState(0);

  /* let value = 0; */
  const handleBtn = () => {
    /* value = value + 1;
    console.log(value); */
    setValue(value + 1);
  };

  return (
    <>
      <Display data={data} color="red" isTrue={true} number={40} arr={arr}>
        <div>
          <p>I'm props</p>
          <p>I'm props 1</p>
          <p>I'm prop 2</p>
        </div>
      </Display>

      <div>
        <p>{value}</p>
        <button onClick={handleBtn}>Click Me</button>
      </div>
    </>
  );
};

export default App;
