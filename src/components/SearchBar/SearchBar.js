import React, { useState } from "react";

function SearchBar(props) {
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onQuerySubmit(query);
  };

  const inputHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={submitHandler}>
        <input
          className="search-bar__input"
          type="text"
          value={query}
          onChange={inputHandler}
        ></input>
        <button className="search-bar__btn">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
