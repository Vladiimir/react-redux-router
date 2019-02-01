import React from 'react';
import { connect } from 'react-redux';
import i18n from 'i18next';
import { NamespacesConsumer } from 'react-i18next';

import { increment as incrementAction, decrement as decrementAction, getCount } from '../../redux/modules/counter';
import Counter from '../../components/Counter';
import { loadUsers, getUsers } from '../../redux/modules/users';
import './style.scss';

class App extends React.Component {
  componentDidMount () {
    const { load } = this.props;
    console.log(load);
    // load();
  }

  changeLanguage (lng) {
    i18n.changeLanguage(lng);
  }

  render () {
    const { users, increment, decrement, count } = this.props;

    return (
      <NamespacesConsumer ns={['app']}>
        {
          (t, { ready }) => (
            ready
              ? (
                <div className="App">
                  <h1>{t('app:Welcome to React')}</h1>
                  {t('common:buttons.increment')}
                  <Counter
                    increment={increment}
                    decrement={decrement}
                    count={count}
                  />
                  {users.map(user => (<p key={user.id}>{user.name}</p>))}
                  <button type="button" onClick={() => this.changeLanguage('it')}>it</button>
                  <button type="button" onClick={() => this.changeLanguage('en')}>en</button>
                </div>
              )
              : <p>loading</p>
          )
        }
      </NamespacesConsumer>
    );
  }
}

const mapStateToProps = state => ({
  count: getCount(state),
  users: getUsers(state),
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementAction()),
  decrement: () => dispatch(decrementAction()),
  load: () => dispatch(loadUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
