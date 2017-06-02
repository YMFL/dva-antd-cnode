import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Users from './routes/Users';
import App from './routes/App';
import Login from './routes/Login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        <IndexRoute component={App} />
        <Route path="/users" component={Users} />
        <Route path="/app" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/*" component={App} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
