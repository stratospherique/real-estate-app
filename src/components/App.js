import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from '../pages/home';
import NotFound from '../pages/notfound';
import NavSecion from './Navigation';
import Login from './Login';
import SignUp from './Signup';
import Article from '../pages/article-view';
import { Container, MainSection, Loading } from '../styled-components/main';
import About from '../pages/about';
import AddForm from './add-item';
import Favorites from './Favorites';
import { getItems, getItemsFail } from '../actions/index';
import DOMAIN from '../_helpers/api-source';

const device = width => {
  switch (true) {
    case (width < 750):
        return 'mobile'
    case (width >= 750 && width < 1024):
        return 'tablet'
    default:
        return 'web';
  }
}

const App = (props) => {

  const [isLoading, setLoading] = useState(true)

  const [target, setTarget] = useState(device(window.innerWidth))

  const handleResize = (e) => {
    setTarget(device(window.innerWidth))
  }

  useEffect(() => {
    props.getViewPort(target);
    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize);
    }
  }, [target])


  useEffect(() => {
    props.getViewPort(target);
    props.getItems();
    props.getTrending();
    props.loginStatus();
    setLoading(false);
  }, [])


  useEffect(() => {
    setLoading(true);
    if (props.currentUser.logged_in) props.getLikedArts(props.currentUser.user.id);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [props.currentUser.logged_in])

    return (
      <Router>
        {isLoading ? <Loading spinnerColor="lightpink" /> :
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
        </Container>}
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
        console.log(response.data.logged_in)
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
  },
  getViewPort: (target) => {
    dispatch({
      type: 'UPDATE_VIEWPORT',
      target,
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
