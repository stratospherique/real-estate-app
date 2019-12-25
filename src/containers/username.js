import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

class UserName extends Component {
  handleLogout = () => {
    axios.delete('https://final-app-api.herokuapp.com/logout', { withCredentials: true })
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
              <Link to="/login">login</Link>
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
      })
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserName));
