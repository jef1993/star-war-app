import React, { useState } from "react";
import "./App.css";

import Banner from "./components/Banner/Banner";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./components/Results/Results";
import getData from "./utils";

function App() {
  const [results, setResults] = useState([]);

  let method = getData;
  const getMethod = (type, searchStr) => {
    if (typeof method === "function") {
      return getData(setResults, type, searchStr);
    }
    return method;
  };

  const searchResultHandler = (data) => {
    getMethod(data.type, data.value.trim());
  };

  // let colors = results
  //   .map((obj) => [
  //     obj.eye_color.split(", "),
  //     obj.hair_color.split(", "),
  //     obj.skin_color.split(", "),
  //   ])
  //   .flat(2)
  //   .map((color) => color.replace(" ", "-"));

  // console.log(
  //   results
  //     .map((obj) => [
  //       obj.skin_color.split(", "),
  //       obj.hair_color.split(", "),
  //       obj.skin_color.split(", "),
  //     ])
  //     .flat(1)
  // );

  // const uniqueColors = [...new Set(colors)];
  // console.log(uniqueColors);

  // const bigNum =
  //   results.length > 0 &&
  //   results.map((obj) => Number(obj.mass)).filter((num) => !isNaN(num));
  // console.log(bigNum && bigNum.sort((a, b) => a - b));

  return (
    <div className="App">
      <Banner />
      <SearchBar onQuerySubmit={searchResultHandler} />
      <Results searchData={results} />
      {results.results ? (
        results.results.map((obj, i) => <div key={i}>{obj.name}</div>)
      ) : (
        <div>no results</div>
      )}
    </div>
  );
}

export default App;
