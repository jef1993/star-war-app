import React, { useState, useEffect } from "react";
import colors from "./colors.scss";

function Avatar(props) {
  let eyeColors = props.eyeColor.replace(/[- ]/g, "").split(",");
  let hairColors = props.hairColor.replace(/[- ]/g, "").split(",");
  let skinColors = props.skinColor.replace(/[- ]/g, "").split(",");

  if (
    skinColors[0] === "none" ||
    skinColors[0] === "n/a" ||
    skinColors[0] === "unknown"
  ) {
    skinColors = hairColors;
  }

  //   console.log(eyeColors, hairColors, skinColors);

  const dynamicStyles = (part, dir = "right") => {
    if (part.length > 1)
      return {
        backgroundImage: `linear-gradient(to ${dir}, ${[
          ...part.map((el) => colors[el]),
        ]})`,
      };
    return {
      backgroundColor: colors[part[0]],
    };
  };

  return (
    <div className="avatar">
      <div className="avatar__head" style={dynamicStyles(skinColors, "bottom")}>
        <div className="avatar__hair" style={dynamicStyles(hairColors)}></div>
        <div className="avatar__eyes">
          <div
            className="avatar__eyes--left"
            style={dynamicStyles(eyeColors)}
          ></div>
          <div
            className="avatar__eyes--right"
            style={dynamicStyles(eyeColors)}
          ></div>
        </div>
      </div>
      <div
        className="avatar__neck"
        style={dynamicStyles(skinColors, "top")}
      ></div>
      {/* {hairColors.flat() + ","}
      {eyeColors.flat() + ","}
      {skinColors.flat()} */}
    </div>
  );
}

export default Avatar;
