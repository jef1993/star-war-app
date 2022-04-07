import React, { useContext } from "react";
import ResultsItem from "./ResultsItem";
import DataContext from "../storage/dataContext";

function Results(props) {
  const ctx = useContext(DataContext);
  const searchData = ctx.results;

  const currentPage = () => {
    const page = searchData.next && searchData.next.split("=");
    if (searchData.next === null) return Math.ceil(searchData.count / 10);
    if (searchData.previous === null) return 1;
    return page[page.length - 1] - 1;
  };

  return (
    <div className="results">
      {searchData.count && (
        <div className="results__ctn">
          <div className="results__count">
            {`Found ${searchData.count} item${
              searchData.count > 1 ? "s" : ""
            }:`}
          </div>
          <div className="results__btns">
            <button
              className={`results__prev ${
                searchData.previous === null ? "hidden" : ""
              }`}
              onClick={props.toPrevPage}
            >
              Prev
            </button>
            <div className="results__pages">
              {currentPage()}/{Math.ceil(searchData.count / 10)}
            </div>

            <button
              className={`results__next ${
                searchData.next === null ? "hidden" : ""
              }`}
              onClick={props.toNextPage}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <ul className="results__list">
        {searchData.results &&
          searchData.results.map((obj, i) =>
            ctx.type === "people" ? (
              <ResultsItem
                key={i}
                name={obj.name}
                height={obj.height}
                mass={obj.mass}
                gender={obj.gender}
                birthYear={obj.birth_year}
                hairColor={obj.hair_color}
                eyeColor={obj.eye_color}
                skinColor={obj.skin_color}
              />
            ) : (
              <div key={i}>{obj.title}</div>
            )
          )}
      </ul>
    </div>
  );
}

export default Results;
