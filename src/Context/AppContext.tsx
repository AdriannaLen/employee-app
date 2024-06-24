import React, { createContext,PropsWithChildren, FC, useState, useEffect } from 'react';
import useAppContext, { Employee } from "./hooks/useAppContext";

type EmployeeContextType = {
  employees: Employee[];
  isLoading: boolean;
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  updateEmployees: (id: number, updateData: Employee) => void;
  deleteEmployee: (id: number) => void;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};
export const AppContext = createContext<EmployeeContextType>(
  {} as EmployeeContextType
);

export const AppContextProvider: FC<PropsWithChildren> = ({children}) => {
  const { fetchedEmployees, isLoading, updateEmployees, deleteEmployee} = useAppContext();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    if (fetchedEmployees.length > 0) {
      setEmployees(fetchedEmployees);
    }
  }, [fetchedEmployees]);

  const totalPages = Math.ceil(employees.length / itemsPerPage);

  return (
    <AppContext.Provider 
    value={{ 
      employees, 
      isLoading, 
      setEmployees, 
      updateEmployees, 
      deleteEmployee,
      currentPage,
      itemsPerPage,
      totalPages,
      setCurrentPage,
      }}
      >
      {children}
    </AppContext.Provider>
  );
};
