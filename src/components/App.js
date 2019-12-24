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
import axios from 'axios';
import { connect } from 'react-redux';
import Home from './Home';
import NotFound from './notfound';
import NavSecion from './navigation';
import Login from './login';
import SignUp from './signup';
import Article from './article-view';
import { Container, MainSection } from '../styled-components/main';
import About from './about';
import AddForm from './add-item';
import Favorites from './favorites';
import { getItems, getItemsFail } from '../actions/index';



class App extends React.Component {

  componentDidMount() {
    this.props.loginStatus();
  }

  componentWillMount() {
    this.props.getItems();
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
              <Route path="/favorities" exact component={Favorites} />
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
    axios.get('http://localhost:3001/logged_in', { withCredentials: true }).then((response) => {
      if (response.data.logged_in) {
        dispatch({
          type: 'LOGGED_IN',
          user: response.data.user,
        })
        axios.get(`http://localhost:3001/user/${response.data.user.id}/favorites`, { withCredentials: true })
          .then((response) => {
            dispatch({
              type: 'GET_LIKED',
              liked: response.data,
            })
          })
        axios.get('http://localhost:3001/articles/trending')
          .then((response) => {
            dispatch({
              type: 'GET_TRENDING',
              ids: response.data.trending
            })
          })
      } else {
        console.log('logged_out')
        dispatch({
          type: 'LOGGED_OUT',
        })
        dispatch({
          type: 'CLEAR_LIKED',
        })
      }
    }
    ).catch((err) => {
      console.error('api errors', err);
    })
  },
  getItems: () => {
    axios.get('http://localhost:3001/articles')
      .then((response) => {
        dispatch(getItems(response.data.articles));
      })
      .catch(() => {
        dispatch(getItemsFail());
      });
  },
})


App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
