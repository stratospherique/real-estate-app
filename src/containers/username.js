import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserName extends Component {
  render() {
    const { user } = this.props;
    return (
      <span>{user}</span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
  };
};

UserName = connect(mapStateToProps, null)(UserName);

export default UserName;

