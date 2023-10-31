import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const Guess = ({ value, answer }) => {
  const guessResults = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={`${value ? `cell ${guessResults[num].status}` : "cell"}`}
        >
          {value ? guessResults[num].letter : ""}
        </span>
      ))}
    </p>
  );
};

export default Guess;
