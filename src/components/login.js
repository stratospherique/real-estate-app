import React from 'react';

const Login = () => (
  <form onSubmit={(e) => {
    e.preventDefault();
  }}>
    <div>
      <label htmlFor="username">User Name</label>
      <input id="username" />
    </div>
    <div>
      <label htmlFor="password">User Name</label>
      <input id="password" />
    </div>
    <button type="submit">Sign in</button>
  </form>
);

export default Login;
