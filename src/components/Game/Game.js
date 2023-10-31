import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import GuessList from "../GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {
  const [guesses, setGuesses] = useState([]);
  const handleSubmitGuess = (text) => setGuesses([...guesses, text]);

  return (
    <>
      <GuessList guesses={guesses} />
      <Input handleSubmitGuess={handleSubmitGuess} />
    </>
  );
};

export default Game;
