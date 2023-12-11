import React from "react";

const Box = ({ title, item, result }) => {
  console.log(title, item, result);
  if (title === "Computer" && result !== "tie" && result !== "") {
    result = result === "win" ? "lose" : "win";
  } else {
    result = result;
  }
  if (title === "Computer") {
    console.log(`Computer ${result}`);
  }
  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      <img
        className="item-img"
        src={item && item.img}
        alt={item && item.name}
      />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
