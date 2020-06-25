import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { ArtForm, FormButton, ErrorsDisplay } from '../styled-components/main';
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
    return (
      <ArtForm onSubmit={this.handleSubmit}>
        <span>Login</span>
        { this.state.errors.length > 0 ? <ErrorsDisplay action="login" errors={this.state.errors} /> : null }
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
