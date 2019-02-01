import React from 'react';
import PropTypes from 'prop-types';

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

Counter.defaultProps = {
  count: 0,
};

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default Counter;
