import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './containers/App';
import NotFound from './components/NotFound';

const Router = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/*" component={NotFound} />
  </Switch>
);

export default Router;
