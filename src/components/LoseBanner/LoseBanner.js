import React from 'react';

const LoseBanner = ({ answer }) => (
  <div className="sad banner">
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  </div>
);

export default LoseBanner;
