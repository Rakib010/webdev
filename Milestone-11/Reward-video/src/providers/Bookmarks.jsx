import React, { createContext, useState } from "react";

export const bookmarksContext = createContext(null);

const Bookmarks = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const Info = {
    bookmarks,
    setBookmarks,
  };
  return (
    <bookmarksContext.Provider value={Info}>
      {children}
    </bookmarksContext.Provider>
  );
};

export default Bookmarks;
