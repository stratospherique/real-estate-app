import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { ArtForm, FormButton } from '../styled-components/main';
import DOMAIN from '../_helpers/api-source';

class Login extends React.Component {
  state = {
    errors: {}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: this.username.value,
      password: this.password.value,
    }
    axios.post(`${DOMAIN}/login`, { user: newUser }, { withCredentials: true })
      .then((response) => {
          axios.get(`${DOMAIN}/user/${response.data.user.id}/favorites`, { withCredentials: true })
          .then((resp) => {
                 this.props.getLikedArts(resp.data)
          })
          .catch((err) => {
            console.error(err);
          })
          this.props.loginSuccess(response.data.user, response.data.link)
          this.redirect();
        
      })
      .catch((err) => {
        this.setState({
          errors: err.response.data.errors,
        })
      })
  }

  redirect = () => {
    this.props.history.push('/');
  }

  render() {
    const errorsDisplay = this.state.errors.length > 0 ? (
      <ul>
        {this.state.errors.map((error) => <li key={error}>{error}</li>)}
      </ul>
    ) : null;
    return (
      <ArtForm onSubmit={this.handleSubmit}>
        <span>Login</span>
        {errorsDisplay}
        <div>
          <input type="text" id="username" ref={(input) => this.username = input} />
        </div>
        <div>
          <input type="password" id="password" ref={(input) => this.password = input} />
        </div>
        <div>
          <FormButton type="submit">Sign in</FormButton>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </ArtForm>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginStart: () => {
    console.log('login started!');
  },
  loginSuccess: (user, link) => {
    dispatch({
      type: 'LOGGED_IN',
      user,
      link
    })
  },
  getLikedArts: (data) => {
    dispatch({
      type: 'GET_LIKED',
      liked: data,
    })
  }
})


export default connect(null, mapDispatchToProps)(Login);
