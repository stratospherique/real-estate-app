import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from './avatar';
import { HeaderContainer } from '../styled-components/main';

const NavSection = () => (
  <HeaderContainer>
    <nav>
      <NavLink to="/" activeClassName="activeTab" exact>Home</NavLink>
      <NavLink to="/favorities" activeClassName="activeTab">Favorities</NavLink>
      <NavLink to="/about" activeClassName="activeTab">About</NavLink>
    </nav>
    <Avatar />
  </HeaderContainer>
);

export default NavSection;
