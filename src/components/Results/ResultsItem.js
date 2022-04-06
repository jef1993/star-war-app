function ResultsItem(props) {
  return (
    <li className="results__item">
      <h2 className="results__name">{props.name}</h2>
      <div className="results__info">
        <p className="results__height">{props.height}</p>
        <p className="results__mass">{props.mass}</p>
        <p className="results__gender">{props.gender}</p>
        <p className="results__birth-year">{props.birthYear}</p>
      </div>
      <div className="results__avatar">
        <p className="results__hair-color">{props.hairColor}</p>
        <p className="results__skin-color">{props.skinColor}</p>
        <p className="results__eye-color">{props.eyeColor}</p>
      </div>
    </li>
  );
}

export default ResultsItem;
