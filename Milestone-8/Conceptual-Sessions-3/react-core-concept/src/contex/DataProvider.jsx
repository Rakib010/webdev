import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext([]);

const DataProvider = ({ children }) => {
  const [dataNew, setDataNew] = useState();

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setDataNew(data));
  }, []);

  const contextInfo = {
    dataNew,
    setDataNew,
  };

  return (
    <DataContext.Provider value={contextInfo}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
