import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import Hub from './containers/Hub';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Hub} />
    <Route path="/hub" component={Hub} />
  </Route>
);
