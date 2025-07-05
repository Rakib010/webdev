import React from "react";
import Header from "../components/Header";
import LatesNews from "../components/LatesNews";
import Navbar from "../components/Navbar";
import LeftSide from "../components/Layout-component/LeftSide";
import RightSide from "../components/Layout-component/RightSide";
import MainSection from "../components/Layout-component/MainSection";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <Header></Header>
      <section className="w-11/12 mx-auto">
        <LatesNews></LatesNews>
      </section>
      <nav className="w-11/12 mx-auto py-4">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftSide></LeftSide>
        </aside>
        <section className="col-span-6">
          {/* <MainSection></MainSection> */}
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightSide></RightSide>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
