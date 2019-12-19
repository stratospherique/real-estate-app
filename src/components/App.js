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
import NotFound from './notfound';
import NavSecion from './navigation';
import Login from './login';
import SignUp from './signup';
import Article from './article-view';
import { Container, MainSection } from '../styled-components/main';
import About from './about';


const App = () => (
  <Router>
    {/*  <Route render={props => (
      localStorage.getItem('user')
        ? ( */}
    <Container>
      <NavSecion />
      <MainSection>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favorities" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/show/:id" exact component={Article} />
          <Route path="*" component={NotFound} />
        </Switch>
      </MainSection>
    </Container>
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
