import Avatar from "../Avatar/Avatar";

function ResultsItem(props) {
  return (
    <li className="results__item">
      <h2 className="results__name">{props.name}</h2>
      <div className="results__info">
        <p className="results__height">
          Height: {props.height / 100}
          {props.height !== "unknown" && "m"}
        </p>
        <p className="results__mass">
          Weight: {props.mass}
          {props.mass !== "unknown" && "kg"}
        </p>
        <p className="results__gender">Gender: {props.gender}</p>
        <p className="results__birth-year">Birth Year: {props.birthYear}</p>
      </div>
      <div className="results__avatar">
        <Avatar
          eyeColor={props.eyeColor}
          hairColor={props.hairColor}
          skinColor={props.skinColor}
        />
      </div>
    </li>
  );
}

export default ResultsItem;
