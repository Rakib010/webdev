import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
  const dataNew = useLoaderData();
  /* console.log(dataNew); */

  return (
    <div>
      <div
        className="flex items-start justify-evenly mt-5
      "
      >
        <button className="btn btn-accent">
          <Link to="/">Button 1</Link>
        </button>
        <button className="btn btn-success">
          <Link to="/button2">Button 2</Link>
        </button>
      </div>
      <div className="border border-red-600 p-10 m-5">
        <h2 className="text-3xl font-bold">This Home page</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quasi
          expedita, deserunt asperiores omnis inventore nisi illum vel libero
          quidem!
        </p>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
