import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Home';
import Profile from './account';
import NotFound from './notfound';
import NavSecion from './navigation';

const App = () => (
  <Router>
    <NavSecion />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/favorities" exact component={Home} />
      <Route path="/account-settings" exact component={Profile} />
      <Route path="*" component={NotFound} />
    </Switch>
    <p>Heelo bottom line</p>
  </Router>
);

export default App;
