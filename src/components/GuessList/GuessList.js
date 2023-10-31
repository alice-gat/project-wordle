import React from "react";

const GuessList = ({ guesses }) => (
  <div className="guess-results">
    {guesses.map(({ word, id }) => (
      <p className="guess" key={id}>
        {word}
      </p>
    ))}
  </div>
);

export default GuessList;
