import React from 'react';
import { connect } from 'react-redux';
import Items from './List-item';
import { TheListings, SectionHeading } from '../styled-components/main';

const TopRated = ({ trending }) => (
  <div>
    <SectionHeading>Trending</SectionHeading>
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
