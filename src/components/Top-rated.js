import React from 'react';
import { connect } from 'react-redux';
import Items from './List-item';
import { TheListings } from '../styled-components/main';

const TopRated = ({ trending }) => (
  <div>
    <h3>Trending</h3>
    <TheListings>
      <Items items={trending} />
    </TheListings>
  </div>
)


const getTrending = (apts, theArray) => {
  return apts.filter((e) => theArray.includes(e.id))
}

const mapStateToProps = (state) => ({
  trending: getTrending(state.aptList, state.trendingItems),
})

export default connect(mapStateToProps, null)(TopRated);
