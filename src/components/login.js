import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <form onSubmit={(e) => {
    e.preventDefault();
  }} >
    <div>
      <label htmlFor="username">User Name</label>
      <input type="text" id="username" />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
    </div>
    <div>
      <button type="submit">Sign in</button>
      <Link to="/sign-up" exact>Sign Up</Link>
    </div>
  </form>
);

export default Login;
