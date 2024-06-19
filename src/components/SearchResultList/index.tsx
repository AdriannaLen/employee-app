import React from "react";
import "./SearchResultList.scss";
import { Employee } from "../../Context/hooks/useAppContext";
import SearchResult from "../../components/SearchResult";

type SearchResultListProps = {
  results: Employee[];
};

const SearchResultList: React.FC<SearchResultListProps> = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result) => (
        <SearchResult result={result} key={result.id} />
      ))}
    </div>
  );
};

export default SearchResultList;
