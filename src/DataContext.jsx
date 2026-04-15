import { createContext, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [managerList, setManagerList] = useState(() => {
    const data = localStorage.getItem("managers");
    try {
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  const [employeeList, setEmployeeList] = useState(() => {
    const data = localStorage.getItem("employees");
    try {
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });
  return (
    <DataContext.Provider
      value={{ managerList, setManagerList, employeeList, setEmployeeList }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider };
