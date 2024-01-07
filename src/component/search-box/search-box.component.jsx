import { Component } from "react";

class SearchBox extends Component {
  render() {
    let { onSearchChange, placeholder } = this.props;

    return (
      <input
        className="search-box"
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
      />
    );
  }
}

export default SearchBox;
