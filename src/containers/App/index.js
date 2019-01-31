import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../../redux/modules/counter';
import Counter from '../../components/Counter';
import './style.scss';

const App = props => (
  <div className="App">
    <Counter
      {...props}
    />
  </div>
);


const mapStateToProps = state => ({
  count: state.counter.count,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
