import React from 'react';

const Banner = ({ status, children }) => (
  <div className={`${status} banner`}>{children}</div>
);

export default Banner;
