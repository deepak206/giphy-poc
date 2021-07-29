import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Trending from '../views/trending/Trending'; 

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Trending} />
  </Switch>
);

export default Routes;