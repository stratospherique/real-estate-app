import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from './Avatar';
import { HeaderContainer } from '../styled-components/main';

const NavSection = ({ isAdmin, isLogged, avatar, viewport }) => (
  <HeaderContainer rightStart={viewport === 'mobile'}>
    {
    viewport !== 'mobile' ?
    <>
    <nav>
      <NavLink to="/" exact activeClassName="activeTab">Home</NavLink>
      {isLogged ? <NavLink to="/favorites" activeClassName="activeTab">Favorities</NavLink> : null}
      {isAdmin ? <NavLink to="/add-real" activeClassName="activeTab">add appart</NavLink> : null}
      <NavLink to="/about" activeClassName="activeTab">About</NavLink>
    </nav>
    <Avatar image={avatar} />
    </>
    : <>
    <nav className="nav-left">
      <NavLink to="/" exact activeClassName="activeTab">Home</NavLink>
      {isLogged ? <NavLink to="/favorites" activeClassName="activeTab">Favorities</NavLink> : null}
    </nav>
    <Avatar image={avatar} />
    <nav className="nav-right">
      {isAdmin ? <NavLink to="/add-real" activeClassName="activeTab">add appart</NavLink> : null}
      <NavLink to="/about" activeClassName="activeTab">About</NavLink>
    </nav>
      </>
    }
  </HeaderContainer>
);

const mapStateToProps = (state) => ({
  isAdmin: state.currentUser.user.admin,
  isLogged: state.currentUser.logged_in,
  avatar: state.currentUser.avatarLink,
  viewport: state.viewport
});

export default connect(mapStateToProps, null)(NavSection);
