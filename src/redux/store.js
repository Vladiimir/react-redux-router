import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './modules/reducer';

const Store = {
  instance: null,

  getStore () {
    if (!this.instance) {
      this.instance = createStore(reducers, applyMiddleware(thunkMiddleware));
    }

    return this.instance;
  },
};

export default Store.getStore();
