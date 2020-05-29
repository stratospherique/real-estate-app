import React, {useEffect} from 'react';
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

const App = (props) => {


  useEffect(() => {
    props.getItems();
    props.getTrending();
    props.loginStatus();
  }, [])

  useEffect(() => {
    if (props.currentUser.logged_in) props.getLikedArts(props.currentUser.user.id);
  }, [props.currentUser.logged_in])


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


const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  loginStatus: () => {
    axios.get(`${DOMAIN}/logged_in`, { withCredentials: true }).then((response) => {
        dispatch({
          type: 'LOGGED_IN',
          user: response.data.user,
          link: response.data.link,
        })
    })
    .catch((err) => {
      dispatch({
        type: 'LOGGED_OUT',
      })
      dispatch({
        type: 'CLEAR_LIKED',
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
  getTrending: () => {
    axios.get(`${DOMAIN}/articles/trending`)
    .then((response) => {
      dispatch({
        type: 'GET_TRENDING',
        ids: response.data.trending,
      })
    })
  },
  getLikedArts: (userId) => {
    axios.get(`${DOMAIN}/user/${userId}/favorites`, { withCredentials: true })
    .then((resp) => {
           dispatch({
             type: 'GET_LIKED',
             liked: resp.data,
           })
    })
    .catch((err) => {
      console.error(err);
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
