import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line to the line before.
export default () => {
  return (
    <div>
      Im some other page!
      <Link to="/">Go back home</Link>
    </div>
  );
};
