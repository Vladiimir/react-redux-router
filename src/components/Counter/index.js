import React from 'react';

import './style.scss';

const Counter = ({ count, increment, decrement }) => (
  <div className="counter">
    <p>{count}</p>
    <button type="button" onClick={increment}>
      Increase
    </button>
    <button type="button" onClick={decrement}>
      Decrease
    </button>
  </div>
);

export default Counter;
