import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from './avatar';
import { HeaderContainer } from '../styled-components/main';

const NavSection = ({ isAdmin, isLogged }) => (
  <HeaderContainer>
    <nav>
      <NavLink to="/" exact activeClassName="activeTab" >Home</NavLink>
      {isLogged ? <NavLink to="/favorities" activeClassName="activeTab">Favorities</NavLink> : null}
      <NavLink to="/about" activeClassName="activeTab">About</NavLink>
      {isAdmin ? <NavLink to="/add-real" activeClassName="activeTab">add a real estate</NavLink> : null}
    </nav>
    <Avatar />
  </HeaderContainer>
);

const mapStateToProps = (state) => ({
  isAdmin: state.currentUser.user.admin,
  isLogged: state.currentUser.logged_in,
});

export default connect(mapStateToProps, null)(NavSection);
