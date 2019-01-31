import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, getCount } from '../../redux/modules/counter';
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
  count: getCount(state),
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
