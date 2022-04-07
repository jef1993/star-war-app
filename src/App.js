import React, { useState } from "react";
import "./App.css";

import Banner from "./components/Banner/Banner";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./components/Results/Results";
import DataContext from "./components/storage/dataContext";
import getData, { getPage } from "./utils";

function App() {
  const [results, setResults] = useState([]);
  const [searchType, setSearchType] = useState("");

  const getDataMethod = (type, searchStr) => {
    let method = getData;
    if (typeof method === "function") {
      return getData(setResults, type, searchStr);
    }
    return method;
  };

  const getPageMethod = (url) => {
    let method = getPage;
    if (typeof method === "function") {
      return getPage(setResults, url);
    }
    return method;
  };

  const searchResultHandler = (data) => {
    getDataMethod(data.type, data.value.trim());
    setSearchType(data.type);
  };

  const prevPageHandler = () => {
    getPageMethod(results.previous);
  };

  const nextPageHandler = () => {
    getPageMethod(results.next);
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
    <DataContext.Provider
      value={{
        results: results,
        type: searchType,
      }}
    >
      <div className="App">
        <Banner />
        <SearchBar onQuerySubmit={searchResultHandler} />
        <Results toPrevPage={prevPageHandler} toNextPage={nextPageHandler} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
