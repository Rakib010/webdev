import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import Bookstore from "./Bookstore";

function App() {
  const actors = ["sakib", "raj", "jasim", "rubel"];

  const singers = [
    { name: "mahfuzur", age: 68 },
    { name: "Eva", age: 38 },
    { name: "Dev", age: 58 },
  ];
  const books = [
    {id:1,name:'physics',price:100}
    {id:2,name:'math',price:200}
    {id:3,name:'Biology',price:150}
  ]

  return (
    <>
      <h1>Vite + React</h1>
       <Bookstore books={books}></Bookstore>


      {/* Use capitalized component names */}
      <Actor name={"Bappa Raz"}></Actor>
       {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      {singers.map((singer) => (
        <singer singer={singer}></singer>
      ))}

      <Person />
      <Student grade="7" score="99"></Student>
      <Developer></Developer>
      <Device name="Laptop" price="3300"></Device>
      <Todo task="learn react" isDone={true}></Todo>
      <Todo task="core concepts" isDone={false}></Todo>
    </>
  );
}
function Device(props) {
  console.log(props);
  return (
    <h2>
      This device:{props.name} price:{props.price}
    </h2>
  );
}

function Person() {
  // You can use the person object directly
  const person = { name: "sakib", age: 12 };
  return (
    <h3>
      I am {person.name}, age: {person.age}
    </h3>
  );
}
const { grade, score } = { grade: "7", score: "99" };

function Student({ grade, score }) {
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>grade:{grade}</p>
      <p>score:{score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    border: "2px solid purple",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>coding:</p>
    </div>
  );
}

export default App;
