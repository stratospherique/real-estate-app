import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UserName extends Component {

  handleLogout = () => {
    axios.delete('http://localhost:3001/logout', { withCredentials: true })
      .then(() => {
        this.props.loggoutStart();
      })
  }

  render() {
    const { user } = this.props;
    return (
      <>
        {user ? (
          <div>
            <span>{user}</span>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        ) : (
            <div>
              <span>Anonymous</span>
              <Link to="/login">login</Link>
            </div>
          )
        }
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

UserName = connect(mapStateToProps, mapDispatchToProps)(UserName);

export default UserName;

