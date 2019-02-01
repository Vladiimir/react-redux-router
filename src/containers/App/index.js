import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, getCount } from '../../redux/modules/counter';
import Counter from '../../components/Counter';
import { loadUsers, getUsers } from '../../redux/modules/users';
import './style.scss';

class App extends React.Component {
  componentDidMount () {
    const { load } = this.props;
    load();
  }

  render () {
    const { users } = this.props;

    return (
      <div className="App">
        <Counter
          {...this.props}
        />
        {users.map(user => (<p key={user.id}>{user.name}</p>))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: getCount(state),
  users: getUsers(state),
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  load: () => dispatch(loadUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
