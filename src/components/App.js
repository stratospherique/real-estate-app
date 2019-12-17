import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Home';
import Profile from './account';
import NotFound from './notfound';
import NavSecion from './navigation';
import Login from './login';
import SignUp from './signup';

const App = () => (
  <Router>
    {/*  <Route render={props => (
      localStorage.getItem('user')
        ? ( */}
    <div>
      <NavSecion />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorities" exact component={Home} />
        <Route path="/account-settings" exact component={Profile} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
    {/* ) : (
          <div>
            <Redirect to={{ pathname: '/login' }} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/login" exact component={Login} />
          </div>
        )
    )} /> */}

  </Router>
);

export default App;
