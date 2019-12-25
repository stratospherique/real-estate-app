import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from './avatar';
import { HeaderContainer } from '../styled-components/main';

const NavSection = ({ isAdmin, isLogged }) => (
  <HeaderContainer>
    <nav className="nav-left">
      <NavLink to="/" exact activeClassName="activeTab" >Home</NavLink>
      {isLogged ? <NavLink to="/favorities" activeClassName="activeTab">Favorities</NavLink> : null}
    </nav>
    <Avatar />
    <nav className="nav-right" style={isAdmin ? null : { justifyContent: 'flex-start', marginLeft: '2rem' }}>
      <NavLink to="/about" activeClassName="activeTab">About</NavLink>
      {isAdmin ? <NavLink to="/add-real" activeClassName="activeTab">add appart</NavLink> : null}
    </nav>
  </HeaderContainer>
);

const mapStateToProps = (state) => ({
  isAdmin: state.currentUser.user.admin,
  isLogged: state.currentUser.logged_in,
});

export default connect(mapStateToProps, null)(NavSection);
