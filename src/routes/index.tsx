import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Search from '../pages/Search';
import Details from '../pages/Details';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/search" component={Search} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  );
}

export default Routes;