import React, { useState } from 'react';

const Input = ({ handleSubmitGuess, disabled }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuess(value);
    setValue('');
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={value}
          minLength={5}
          maxLength={5}
          onChange={(e) => {
            setValue(e.target.value.toUpperCase());
          }}
          required
          pattern="[a-zA-Z]{5}" // Fall back for issues with minLength not working with modified input text
          title="You must guess a 5 letter word"
          disabled={disabled}
        />
      </form>
    </>
  );
};

export default Input;
