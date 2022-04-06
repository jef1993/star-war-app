import React, { useState } from "react";
// import { ReactComponent as StarWarsLogo } from "./star-wars-logo.svg";

function SearchBar(props) {
  const [query, setQuery] = useState({
    type: "people",
    value: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.onQuerySubmit(query);
  };

  const valueHandler = (e) => {
    setQuery((prev) => {
      return { ...prev, value: e.target.value };
    });
  };

  const typeHandler = (e) => {
    setQuery((prev) => {
      return { ...prev, type: e.target.value };
    });
  };

  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={submitHandler}>
        <select
          className="search-bar__selector"
          onChange={typeHandler}
          value={query.type}
        >
          <option className="search-bar__option" value="people">
            people
          </option>
        </select>
        <input
          className="search-bar__input"
          type="text"
          value={query.value}
          onChange={valueHandler}
        ></input>
        <button className="search-bar__btn">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
