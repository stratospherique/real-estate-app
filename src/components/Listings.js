import React from 'react';
import { connect } from 'react-redux';
import { TheListings } from '../styled-components/main';
import Items from './List-item';

const Listings = ({ items }) => (
  <div>
    <h3>Real Estates</h3>
    <TheListings>
      <Items items={items} />
    </TheListings>
  </div>
);


const getNotTrending = (apts, theArray) => apts.filter((e) => !theArray.includes(e.id));

const mapStateToProps = (state) => ({
  items: getNotTrending(state.aptList, state.trendingItems),
});


export default connect(mapStateToProps, null)(Listings);
