import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import User from "./User";
import Effect from "./Effect";

function App() {
  function handleClick() {
    alert("Btn click");
  }
  const handleClick2 = () => {
    alert("Yo click");
  };

  const AddToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>React Core Concept</h3>

      {/* useEffect */}
      <Effect></Effect>
      <User></User>

      {/* useState */}
      <Counter></Counter>
      <Team></Team>

      {/* regular btn just use onClick */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click</button>
      
      {/* btn inline function */}
      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        Third Button
      </button>
      {/* arrow function die call kore dite hoi */}
      <button onClick={() => AddToFive(3)}>Four</button>
    </>
  );
}

export default App;
