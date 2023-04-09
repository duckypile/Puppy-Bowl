import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="searchBarDiv">
      <input
        type="text"
        placeholder="Search for a puppy..."
        value={searchTerm}
        onChange={onSearchChange}
        className="searchBar"
      />
    </div>
  );
};

export default SearchBar;
