import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Home from '../pages/home';
import NotFound from '../pages/notfound';
import NavSecion from './Navigation';
import Login from './Login';
import SignUp from './Signup';
import Article from '../pages/article-view';
import { Container, MainSection } from '../styled-components/main';
import About from '../pages/about';
import AddForm from './add-item';
import Favorites from './Favorites';
import { getItems, getItemsFail } from '../actions/index';
import DOMAIN from '../_helpers/api-source';

class App extends React.Component {

  constructor(props) {
    super(props);
    props.getItems();
    props.loginStatus();
  }

  render() {
    return (
      <Router>
        <Container>
          <NavSecion />
          <MainSection>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/favorites" exact component={Favorites} />
              <Route path="/about" exact component={About} />
              <Route path="/show/:id" exact component={Article} />
              <Route path="/add-real" exact component={AddForm} />
              <Route path="/sign-up" exact component={SignUp} />
              <Route path="/login" exact component={Login} />
              <Route path="*" component={NotFound} />
            </Switch>
          </MainSection>
        </Container>
      </Router>
    )
  }
}


const mapStateToProps = (state) => ({
  current_user: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  loginStatus: () => {
    axios.get(`${DOMAIN}/logged_in`, { withCredentials: true }).then((response) => {
      if (response.data.logged_in) {
        console.log(response.data.link)
        dispatch({
          type: 'LOGGED_IN',
          user: response.data.user,
          link: response.data.link,
        })
        axios.get(`${DOMAIN}/user/${response.data.user.id}/favorites`, { withCredentials: true })
          .then((response) => {
            dispatch({
              type: 'GET_LIKED',
              liked: response.data,
            })
          })
      } else {
        dispatch({
          type: 'LOGGED_OUT',
        })
        dispatch({
          type: 'CLEAR_LIKED',
        })
      }
      axios.get(`${DOMAIN}/articles/trending`)
        .then((response) => {
          dispatch({
            type: 'GET_TRENDING',
            ids: response.data.trending,
          })
        })
    })
  },
  getItems: () => {
    axios.get(`${DOMAIN}/articles`)
      .then((response) => {
        dispatch(getItems(response.data.articles));
      })
      .catch(() => {
        dispatch(getItemsFail());
      });
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
