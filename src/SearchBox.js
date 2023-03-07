import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className="pa3 ba bg-lightest-blue"
        type="text"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;