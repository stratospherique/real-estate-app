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
import { connect } from 'react-redux';
import Home from './Home';
import NotFound from './notfound';
import NavSecion from './navigation';
import Login from './login';
import SignUp from './signup';
import Article from './article-view';
import { Container, MainSection } from '../styled-components/main';
import About from './about';
import Axios from 'axios';
import AddForm from './add-item';


class App extends React.Component {

  componentDidMount() {
    this.props.loginStatus();
  }

  render() {
    const { current_user } = this.props;
    return (
      <Router>
        {/* <Route render={props => (
          current_user.logged_in
            ? ( */}
        <Container>
          <NavSecion />
          <MainSection>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/favorities" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/show/:id" exact component={Article} />
              <Route path="/add-real" exact component={AddForm} />
              <Route path="/sign-up" exact component={SignUp} />
              <Route path="/login" exact component={Login} />
              <Route path="*" component={NotFound} />
            </Switch>
          </MainSection>
        </Container>
        {/* ) : (
              <div>
                <Redirect to={{ pathname: '/login' }} />
                <Switch>
                  <Route path="/sign-up" exact component={SignUp} />
                  <Route path="/login" exact component={Login} />
                </Switch>
              </div>
            )
        )} /> */}
      </Router>
    )
  }
}


const mapStateToProps = (state) => ({
  current_user: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  loginStatus: () => {
    Axios.get('http://localhost:3001/logged_in', { withCredentials: true }).then((response) => {
      if (response.data.logged_in) {
        dispatch({
          type: 'LOGGED_IN',
          user: response.data.user,
        })
      } else {
        console.log('logged_out')
        dispatch({
          type: 'LOGGED_OUT',
        })
      }
    }
    ).catch((err) => {
      console.error('api errors', err);
    })
  }
})
App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
