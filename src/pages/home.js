import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import DOMAIN from '../_helpers/api-source';
import TopRated from '../components/Top-rated';
import Listings from '../components/Listings';

const Home = ({getTrending}) => {
  getTrending();
  return (
  <>
    <TopRated />
    <Listings />
  </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getTrending: () => {
    axios.get(`${DOMAIN}/articles/trending`)
    .then((response) => {
      dispatch({
        type: 'GET_TRENDING',
        ids: response.data.trending,
      })
    })
    .catch(() => {
      dispatch({
        type: 'ACTIVATE_FLASH',
        msg: `Sorry something went wrong`,
        nature: 'failure'
      })
    })
  },
})

export default connect(null, mapDispatchToProps)(Home);
