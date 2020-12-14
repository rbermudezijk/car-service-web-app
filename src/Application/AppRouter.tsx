import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Common/Home';
import NotFound from './General/Components/NotFound';

const AppRouter = () => 
  <HashRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/not-found" component={NotFound} exact/>
    </Switch>
  </HashRouter>

export default AppRouter;