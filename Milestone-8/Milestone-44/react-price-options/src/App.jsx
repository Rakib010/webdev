import "./App.css";
import Nav from "./components/Nav";
import Prices from "./components/Prices";
import Chart from "./components/Chart";
import User from "./components/User";

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Prices></Prices>
      <Chart></Chart>
      <User></User>
    </div>
  );
};

export default App;
