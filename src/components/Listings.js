import React from 'react';
import { connect } from 'react-redux';
import { TheListings, SectionHeading } from '../styled-components/main';
import Items from './List-item';

const Listings = ({ items }) => (
  <div>
    <SectionHeading>Real Estates</SectionHeading>
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
