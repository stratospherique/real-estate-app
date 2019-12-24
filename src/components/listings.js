import React from 'react';
import { connect } from 'react-redux';
import { TheListings } from '../styled-components/main';
import Items from './list-item';

const Listings = ({ items }) => (
  <TheListings>
    <Items items={items} />
  </TheListings>
);


const getNotTrending = (apts, theArray) => apts.filter((e) => !theArray.includes(e.id));

const mapStateToProps = (state) => ({
  items: getNotTrending(state.aptList, state.trendingItems),
});


export default connect(mapStateToProps, null)(Listings);
