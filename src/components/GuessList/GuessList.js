import React from "react";

import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const GuessList = ({ guesses }) => {
  const guessRows = guesses.map((guess) => guess.split(""));

  const numberOfEmptyRows = NUM_OF_GUESSES_ALLOWED - guesses.length;
  const emptyRows = range(numberOfEmptyRows).map(() => ["", "", "", "", ""]);

  const rows = [...guessRows, ...emptyRows];

  console.log(rows);
  return (
    <div className="guess-results">
      {rows.map((letters, index) => (
        <Guess letters={letters} key={index} />
      ))}
    </div>
  );
};

export default GuessList;
