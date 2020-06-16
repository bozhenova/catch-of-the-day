import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker/StorePicker';
import App from './App/App';
import NotFound from './NotFound/NotFound';

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={StorePicker}></Route>
      <Route path='/store/:storeId' component={App}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </HashRouter>
);

export default Router;
