import { createContext, useContext, useState } from "react";

const DataContext = createContext();
export function DataProvider({ children }) {
  const [data, setData] = useState({
    key1: "value1",
    key2: "value2",
  });
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
export function useData() {
  return useContext(DataContext);
}
