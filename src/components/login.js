import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

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
    axios.post('http://localhost:3001/login', { user: newUser }, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          this.props.loginSuccess(response.data.user)
          this.redirect();
        } else {
          this.setState({
            errors: response.data.errors,
          })
        }
      })
      .catch((err) => {
        this.setState({
          errors: ['API errors'],
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
      <form onSubmit={this.handleSubmit} >
        {errorsDisplay}
        <div>
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" ref={(input) => this.username = input} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={(input) => this.password = input} />
        </div>
        <div>
          <button type="submit">Sign in</button>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginStart: () => {
    console.log('login started!');
  },
  loginSuccess: (user) => {
    dispatch({
      type: 'LOGGED_IN',
      user
    })
  }
})


export default connect(null, mapDispatchToProps)(Login);
