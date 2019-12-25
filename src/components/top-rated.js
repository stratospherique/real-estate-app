import React from 'react';
import { connect } from 'react-redux';
import Items from './list-item';
import { TheListings } from '../styled-components/main';

const TopRated = ({ trending }) => (
  <TheListings>
    <Items items={trending} />
  </TheListings>
)


const getTrending = (apts, theArray) => {
  return apts.filter((e) => theArray.includes(e.id))
}

const mapStateToProps = (state) => ({
  trending: getTrending(state.aptList, state.trendingItems),
})

export default connect(mapStateToProps, null)(TopRated);
