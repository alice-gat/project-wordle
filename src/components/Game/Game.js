import React, { useState } from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { checkGuess, isGuessCorrect } from '../../game-helpers';
import { sample } from '../../utils';
import GuessList from '../GuessList';
import Input from '../Input';
import LoseBanner from '../LoseBanner';
import WinBanner from '../WinBanner';

const gameStatuses = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lose: 'LOSE',
};

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {
  const [gameStatus, setGameStatus] = useState(gameStatuses.inProgress);
  const [guesses, setGuesses] = useState([]);

  const handleSubmitGuess = (text) => {
    const nextGuesses = [...guesses, text];
    setGuesses(nextGuesses);

    if (text.toUpperCase() === answer) {
      setGameStatus(gameStatuses.win);
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(gameStatuses.lose);
    }
  };

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <Input
        handleSubmitGuess={handleSubmitGuess}
        disabled={gameStatus !== gameStatuses.inProgress}
      />
      {gameStatus === gameStatuses.win && (
        <WinBanner numGuesses={guesses.length} />
      )}
      {gameStatus === gameStatuses.lose && <LoseBanner answer={answer} />}
    </>
  );
};

export default Game;
