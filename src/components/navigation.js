import React from 'react';
import { Link } from 'react-router-dom';

const NavSection = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/favorities">Favorities</Link>
    <Link to="/account-settings">Account</Link>
  </nav>
);

export default NavSection;
