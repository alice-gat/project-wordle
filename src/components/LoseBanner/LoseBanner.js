import React from 'react';

import Banner from '../Banner';

const LoseBanner = ({ answer }) => (
  <Banner status="sad">
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  </Banner>
);

export default LoseBanner;
