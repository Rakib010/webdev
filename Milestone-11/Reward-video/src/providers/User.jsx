import React, { createContext, useState } from "react";

export const userContext = createContext(null);
const User = ({ children }) => {
  const [user, setUser] = useState({
    name: "Hi",
    email: "Hello.com",
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default User;
