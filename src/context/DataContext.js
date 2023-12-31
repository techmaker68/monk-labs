import { createContext, useContext, useState } from 'react';

// Create the context
const DataContext = createContext();

// Create a provider component
export function DataProvider({ children }) {
  const [data, setData] = useState({
    key1: 'value1',
    key2: 'value2',
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

// Create a custom hook to access the data
export function useData() {
  return useContext(DataContext);
}
