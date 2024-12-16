import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    /*Send Client data to the server*/

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        /* jei data server pathano hoisilo sei data display korano holo client side */
        const newUsers = [...users, data];
        setUsers(newUsers);
        form.reset();
      });
  };

  return (
    <>
      <h1>Users Management system</h1>
      <h3>Number of Users:{users.length}</h3>

      <form onSubmit={handleUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>

      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.id} {user.name} {user.email}{" "}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
