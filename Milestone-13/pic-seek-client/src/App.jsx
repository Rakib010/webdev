import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Root from "./layouts/Root";
import Generate from "./pages/Generate";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />}></Route>
          <Route path="/generateImg" element={<Generate />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
