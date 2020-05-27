import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import DOMAIN from '../_helpers/api-source';
import TopRated from '../components/Top-rated';
import Listings from '../components/Listings';

const Home = (props) => {
  
  useEffect(() => {
    console.log('home mounted', props.articles)
    axios.get(`${DOMAIN}/articles/trending`)
    .then((response) => {
      props.getTrending(response.data.trending);
    })
  }, [])

  return (
  <>
    <TopRated />
    <Listings />
  </>
  );
}

const mapStateToProps = (state) => ({
  articles: state.aptList.length
});

const mapDispatchToProps = (dispatch) => ({
  getTrending: (trending) => {
    dispatch({
      type: 'GET_TRENDING',
      ids: trending,
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
