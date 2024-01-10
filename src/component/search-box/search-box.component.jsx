// import { Component } from "react";

const SearchBox = (props) => {
  let { onSearchChange, placeholder } = props;

  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;
