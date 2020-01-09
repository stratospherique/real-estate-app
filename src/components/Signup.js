import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { ArtForm, FormButton } from '../styled-components/main';
import DOMAIN from '../_helpers/api-source';


class SignUp extends React.Component {
  state = {
    errors: []
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: this.username.value,
      email: this.email.value,
      password: this.pwd.value,
      password_confirmation: this.pwdC.value,
    }
    axios.post(`${DOMAIN}/users`, { user: newUser }, { withCredentials: true })
      .then((response) => {
        if (response.data.user) {
          this.props.signUpSuccess(response.data.user)
          this.redirect();
        } else {
          this.setState({
            errors: response.data.errors,
          })
        }
      })
      .catch((errors) => {
        this.setState({
          errors: ['API Errors'],
        })
      })
  };

  redirect = () => {
    this.props.history.push('/');
  }


  render() {
    const errorsDisplay = this.state.errors && this.state.errors.length > 0 ? (
      <ul>
        {this.state.errors.map((error) => <li key={error}>{error}</li>)}
      </ul>
    ) : null;
    return (
      <ArtForm onSubmit={this.handleSubmit}>
        <span>Login</span>
        {errorsDisplay}
        <div>
          <input type="text" placeholder="username" ref={(input) => this.username = input} />
        </div>
        <div>
          <input type="email" placeholder="email" ref={(input) => this.email = input} />
        </div>
        <div>
          <input type="password" placeholder="Password" ref={(input) => this.pwd = input} />
        </div>
        <div>
          <input type="password" placeholder="Password confirmation" ref={(input) => this.pwdC = input} />
        </div>
        <FormButton type="submit">Sign UP</FormButton>
      </ArtForm>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: () => {
    console.log('hey');
  },
  signUpSuccess: (user) => {
    dispatch({
      type: 'LOGGED_IN',
      user
    })
  },
})

export default connect(null, mapDispatchToProps)(SignUp);
