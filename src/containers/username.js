import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import DOMAIN from '../_helpers/api-source';

class UserName extends Component {
  handleLogout = () => {
    axios.delete(`${DOMAIN}/logout`, { withCredentials: true })
      .then(() => {
        this.props.loggoutStart();
        this.redirect();
      })
  }

  redirect = () => {
    this.props.history.push('/');
  }

  render() {
    const { user, cls } = this.props;
    return (
      <>
        {user ? (
          <div className={`drop-content ${cls}`}>
            <span>{user}</span>
            <span onClick={this.handleLogout}>Logout</span>
          </div>
        ) : (
            <div className={`drop-content ${cls}`}>
              <span>Visitor</span>
              <Link to="/login" onPointerDown={() => this.props.cleanFlash()}>login</Link>
            </div>
          )}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.currentUser.user.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loggoutStart: () => {
      dispatch({
        type: 'LOGGED_OUT'
      });
      dispatch({
        type: 'CLEAR_LIKED',
      });
    },
    cleanFlash: () => {
      dispatch({
        type: 'DEACTIVATE_FLASH',
      })
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserName));
