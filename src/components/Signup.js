import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { ArtForm, FormButton, ErrorsDisplay } from '../styled-components/main';
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

    if (this.fileInput.files[0]) {
      newUser['avatar'] = this.fileInput.files[0]
    }

    const formData = new FormData();

    Object.entries(newUser).forEach(
      ([key, value]) => formData.append(key, value)
    )

    axios.post(`${DOMAIN}/users`, formData, { withCredentials: true })
      .then((response) => {
          this.props.signUpSuccess(response.data.user, response.data.link)
          this.redirect();
      })
      .catch((errors) => {
        if (errors.response) {
          this.setState({
            errors: errors.response.data.errors,
          })
        }
        this.props.flashFailure();
      })
  };

  redirect = () => {
    this.props.history.push('/');
  }


  render() {
    return (
      <ArtForm onSubmit={this.handleSubmit}>
        <strong>Join our Network</strong>
        { this.state.errors.length > 0 ? <ErrorsDisplay action="sign up" errors={this.state.errors} /> : null }
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
        <div>
          <input type="file" name="avatar" accept="image/*" ref={(input) => this.fileInput = input} />
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
  signUpSuccess: (user, link) => {
    dispatch({
      type: 'LOGGED_IN',
      user,
      link
    })
  },
  flashFailure: () => {
    dispatch({
      type: 'ACTIVATE_FLASH',
      msg: 'Ooops! Unable to sign up',
      nature: 'failure'
    })
  }
})

export default connect(null, mapDispatchToProps)(SignUp);
