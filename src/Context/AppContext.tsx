import React, { createContext,PropsWithChildren, FC, useState, useEffect } from 'react';
import useAppContext, { Employee } from "./hooks/useAppContext";

// type Props = {
// children: JSX.Element | JSX.Element[];
// };

type EmployeeContextType = {
  employees: Employee[];
  isLoading: boolean;
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  updateEmployees: (id: number, updateData: Employee) => void;
  deleteEmployee: (id: number) => void;
};
export const AppContext = createContext<EmployeeContextType>(
  {} as EmployeeContextType
);

export const AppContextProvider: FC<PropsWithChildren> = ({children}) => {
  const { fetchedEmployees, isLoading, updateEmployees, deleteEmployee } = useAppContext();
  const [employees, setEmployees] = useState<Employee[]>([]);
  useEffect(() => {
    if (fetchedEmployees.length > 0) {
      setEmployees(fetchedEmployees);
    }
  }, [fetchedEmployees]);
  return (
    <AppContext.Provider 
    value={{ 
      employees, 
      isLoading, 
      setEmployees, 
      updateEmployees, 
      deleteEmployee 
      }}
      >
      {children}
    </AppContext.Provider>
  );
};
