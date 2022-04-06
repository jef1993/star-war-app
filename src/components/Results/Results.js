import ResultsItem from "./ResultsItem";

function Results(props) {
  const searchData = props.searchData;
  const searchResult = searchData.results;
  console.log(searchData);
  console.log(searchData.results);

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
            <button className="results__prev">Prev</button>
            <button className="results__next">Next</button>
          </div>
        </div>
      )}

      <ul className="results__list">
        {searchData.results &&
          searchData.results.map((obj, i) => (
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
          ))}
      </ul>
    </div>
  );
}

export default Results;
