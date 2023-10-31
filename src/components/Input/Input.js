import React, { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
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
          pattern="[a-zA-Z]{5}"
          title="You must guess a 5 letter word"
        />
      </form>
    </>
  );
};

export default Input;
