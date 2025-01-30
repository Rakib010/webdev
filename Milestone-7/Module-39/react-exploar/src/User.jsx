import { useEffect, useState } from "react";

export default function User() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h3>User:{users.length}</h3>
    </div>
  );
}

/* 
1.declare a state to hold the data
2.useEffect with call back and dependency array
3.use fetch data 
*/
