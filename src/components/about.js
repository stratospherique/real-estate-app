import React from 'react';
import { connect } from 'react-redux';

let About = ({ user }) => {
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

About = connect(mapStateToProps, null)(About);

export default About;
