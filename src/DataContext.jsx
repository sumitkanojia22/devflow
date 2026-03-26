import { createContext, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [name, setName] = useState("CHUKUNDAR");
  return (
    <DataContext.Provider value={{ name, setName }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider };
