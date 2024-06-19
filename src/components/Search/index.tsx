import { t } from "i18next";
import React, { useState } from "react";
import { Employee } from "../../Context/hooks/useAppContext";
import "./index.scss";
import { FaSearch } from "react-icons/fa";
import useContext from "../../Context/AppContext";
import "./index.scss";

export type SearchProps = {
  employees: Employee[];
  setResults: React.Dispatch<React.SetStateAction<Employee[]>>;
};

const Search: React.FC<SearchProps> = ({ employees, setResults }) => {
  // const { AppContext } = useContext(AppContext);
  const [input, setInput] = useState("");

  const fetchEmployees = (value: string) => {
    const results = employees.filter((user) => {
      return (
        value &&
        user &&
        user.firstName &&
        user.firstName.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(results);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    fetchEmployees(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder={t("app.search")}
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
