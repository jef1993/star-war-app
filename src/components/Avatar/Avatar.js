import React, { useState, useEffect } from "react";
import colors from "./colors.scss";

function Avatar(props) {
  let eyeColors = props.eyeColor.replace(/[- ]/g, "").split(", ");
  let hairColors = props.hairColor.replace(/[- ]/g, "").split(", ");
  let skinColors = props.skinColor.replace(/[- ]/g, "").split(", ");

  if (
    skinColors[0] === "none" ||
    skinColors[0] === "n/a" ||
    skinColors[0] === "unknown"
  ) {
    skinColors = hairColors;
  }

  console.log(eyeColors, hairColors, skinColors);

  const styleInline = (part, dir = "right") => {
    return {
      backgroundColor: colors[part[0]],
      backgroundImage: `linear-gradient(to ${dir}, ${[
        ...part.map((el) => colors[el]),
      ]})`,
    };
  };

  return (
    <div className="avatar">
      <div className="avatar__head" style={styleInline(skinColors, "bottom")}>
        <div className="avatar__hair" style={styleInline(hairColors)}></div>
        <div className="avatar__eyes">
          <div
            className="avatar__eyes--left"
            style={styleInline(eyeColors)}
          ></div>
          <div
            className="avatar__eyes--right"
            style={styleInline(eyeColors)}
          ></div>
        </div>
      </div>
      <div
        className="avatar__neck"
        style={styleInline(skinColors, "top")}
      ></div>
      {/* <div className="avatar__body">
        <div
          className="avatar__body--top"
          style={{ backgroundColor: colors[skinColors[0]] }}
        ></div>
        <div className="avatar__body--mid"></div>
        <div className="avatar__body--bot"></div>
      </div> */}
    </div>
  );
}

export default Avatar;
