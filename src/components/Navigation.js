import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from './Avatar';
import { HeaderContainer } from '../styled-components/main';

const NavSection = ({ isAdmin, isLogged, avatar, viewport, cleanFlash, flashActive }) => {

  const handleClick = (e) => {
    if (flashActive) cleanFlash();
  }

  return (
    <HeaderContainer rightStart={viewport === 'mobile'}>
      {
      viewport !== 'mobile' ?
      <>
      <nav>
        <NavLink to="/" exact activeClassName="activeTab" onPointerDown={handleClick}>Home</NavLink>
        {isLogged ? <NavLink to="/favorites" activeClassName="activeTab" onPointerDown={handleClick}>Favorities</NavLink> : null}
        {isLogged ? <NavLink to="/add-real" activeClassName="activeTab" onPointerDown={handleClick}>add appart</NavLink> : null}
        <NavLink to="/about" activeClassName="activeTab" onPointerDown={handleClick}>About</NavLink>
      </nav>
      <Avatar image={avatar} />
      </>
      : <>
      <nav className="nav-left">
        <NavLink to="/" exact activeClassName="activeTab" onPointerDown={handleClick}>Home</NavLink>
        {isLogged ? <NavLink to="/favorites" activeClassName="activeTab" onPointerDown={handleClick}>Favorities</NavLink> : null}
      </nav>
      <Avatar image={avatar} />
      <nav className="nav-right">
        {isLogged ? <NavLink to="/add-real" activeClassName="activeTab" onPointerDown={handleClick}>add appart</NavLink> : null}
        <NavLink to="/about" activeClassName="activeTab" onPointerDown={handleClick}>About</NavLink>
      </nav>
        </>
      }
    </HeaderContainer>
  );
}

const mapStateToProps = (state) => ({
  isAdmin: state.currentUser.user.admin,
  isLogged: state.currentUser.logged_in,
  avatar: state.currentUser.avatarLink,
  viewport: state.viewport,
  flashActive: state.flash.active,
});

const mapDispatchToProps = (dispatch) => ({
  cleanFlash: () => {
    dispatch({
      type: 'DEACTIVATE_FLASH',
      nature: '',
      msg: ''
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavSection);
