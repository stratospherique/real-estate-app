import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { ArtForm, FormButton, ErrorsDisplay } from '../styled-components/main';
import DOMAIN from '../_helpers/api-source';

const Login = ({ history, loginSuccess, flashFailure, cleanFlash, isLogged }) => {
  const [errors, setErrors] = useState([])
  const [formFields, setFormFields] = useState({
    username: '',
    password: '',
  })

  const redirect = () => {
    history.push('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${DOMAIN}/login`, { user: formFields }, { withCredentials: true })
      .then((response) => {
          loginSuccess(response.data.user, response.data.link)
          redirect();
      })
      .catch((err) => {
        console.log(err)
        if (err.response) setErrors(err.response.data.errors)
        flashFailure();
      })
  }


  const handleFieldChange = (e) => {
    let { name, value } = e.target
    setFormFields((prevState) => {
      const tmp = { ...prevState }
      if (Array.isArray(tmp[`${name}`])) {
        tmp[`${name}`].push(value);
      } else tmp[`${name}`] = value;
      return { ...tmp }
    })
  }

  if (isLogged) redirect();

  return (
    <ArtForm onSubmit={handleSubmit}>
      <strong>Login</strong>
      { errors.length > 0 ? <ErrorsDisplay action="login" errors={errors} /> : null }
      <div>
        <input type="text" name="username" value={formFields.username} onChange={handleFieldChange} />
      </div>
      <div>
        <input type="password" name="password" value={formFields.password} onChange={handleFieldChange} />
      </div>
      <div>
        <FormButton type="submit">Sign in</FormButton>
        <Link to="/sign-up" onPointerDown={() => cleanFlash()}>Sign Up</Link>
      </div>
    </ArtForm>
  );
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
  },
  flashFailure: () => {
    dispatch({
      type: 'ACTIVATE_FLASH',
      msg: 'Ooops! Unable to login',
      nature: 'failure',
    })
  },
  cleanFlash: () => {
    dispatch({
      type: 'DEACTIVATE_FLASH',
    })
  }
})

const mapStateToProps = (state) => ({
  isLogged: state.currentUser.logged_in
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);
