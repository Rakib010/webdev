import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <div>
        <h1 className="text-center mt-4 text-3xl font-bold">
          Our Users: {users.length}
        </h1>
        <div className="grid grid-cols-3 gap-3 p-4">
          {users.map((user) => (
            <User key={user.id} user={user}></User>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default Users;
