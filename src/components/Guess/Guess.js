import React from "react";

import { range } from "../../utils";

const Guess = ({ value }) => (
  <p className="guess">
    {range(5).map((num) => (
      <span key={num} className="cell">
        {value ? value[num] : ""}
      </span>
    ))}
  </p>
);

export default Guess;
