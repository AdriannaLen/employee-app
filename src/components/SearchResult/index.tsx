import React from "react";
import "./SearchResult.scss";
import { Employee } from "../../Context/hooks/useAppContext";

type SearchResultProps = {
  result: Employee;
};

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <div className="search-result">
      {result.firstName} {result.lastName}
    </div>
  );
};

export default SearchResult;
