function ResultsItem(props) {
  return (
    <li className="results__item">
      <h2 className="results__name">{props.name}</h2>
      <div className="results__info">
        <p className="results__height">Height: {props.height / 100}m</p>
        <p className="results__mass">Weight: {props.mass}kg</p>
        <p className="results__gender">Gender: {props.gender}</p>
        <p className="results__birth-year">Birth Year: {props.birthYear}</p>
      </div>
      <div className="results__avatar">
        <p className="results__hair-color">{props.hairColor}</p>
        <p className="results__eye-color">{props.eyeColor}</p>
        <p className="results__skin-color">{props.skinColor}</p>
      </div>
    </li>
  );
}

export default ResultsItem;
