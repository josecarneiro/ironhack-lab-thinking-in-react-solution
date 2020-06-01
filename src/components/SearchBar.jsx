import React from 'react';

function SearchBar(props) {
  return (
    <form>
      <label htmlFor="search-input">Search</label>
      <input
        id="search-input"
        type="text"
        placeholder="Search for any product..."
        value={props.query}
        onChange={props.handleInputChange}
      />
      <input
        id="on-stock-checkbox"
        type="checkbox"
        onChange={props.handleCheckboxChange}
        checked={props.onlyAllowStocked}
      />
      <label htmlFor="on-stock-checkbox">Only show products on stock</label>
    </form>
  );
}

export default SearchBar;
