import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from './avatar';

const NavSection = () => (
  <header>
    <nav>
      <NavLink to="/" activeClassName="activeTab" exact>Home</NavLink>
      <NavLink to="/favorities" activeClassName="activeTab">Favorities</NavLink>
      <NavLink to="/account-settings" activeClassName="activeTab">Account</NavLink>
    </nav>
    <Avatar />
  </header>
);

export default NavSection;
