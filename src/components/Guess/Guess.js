import React from "react";

const Guess = ({ letters }) => (
  <p className="guess">
    {letters.map((letter, index) => (
      <span key={index} className="cell">
        {letter}
      </span>
    ))}
  </p>
);

export default Guess;
