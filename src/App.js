import React, { useState, useEffect } from "react";
import "./App.css";
import getAllPeople from "./utils";

function App() {
  const [people, setPeople] = useState([]);

  let method = getAllPeople;
  const getMethod = () => {
    if (typeof method === "function") {
      return getAllPeople(setPeople);
    }
    return method;
  };

  useEffect(() => {
    getMethod();
  }, []);

  return <div className="App">{people[0].name}</div>;
}

export default App;
