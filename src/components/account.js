import React from 'react';
import { connect } from 'react-redux';

let Profile = ({ user }) => {
  return (
    <p>
      Profile page! Heelo :) {user}
    </p>
  )
};

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
  }
}

Profile = connect(mapStateToProps, null)(Profile);

export default Profile;
