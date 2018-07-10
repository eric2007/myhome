import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import loadPage from './routes/loadPage';
import homePage1 from './routes/homePage1';
import userconfig from './routes/userConfig';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={loadPage} />
        <Route path='/homeOrdinary' exact component={homePage1} />
        <Route path='/start' exact component={IndexPage} />
        <Route path='/userconfig' exact component={userconfig}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
