import { createContext, useContext, useState } from "react";
import { meetups } from "../Data/Data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [meets, setMeets] = useState(meetups.meetups);
  const [filters, setFilters] = useState({
    sortBy: "both",
    searchKey: "",
  });
  return (
    <DataContext.Provider value={{ meets, filters, setMeets, setFilters }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
