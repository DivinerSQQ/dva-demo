import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Counter from './routes/Counter';
import TodoList from './routes/TodoList';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/counter" exact component={Counter} />
        <Route path="/todos" exact component={TodoList} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
