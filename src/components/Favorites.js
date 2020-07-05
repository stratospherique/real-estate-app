import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TheListings, SectionHeading } from '../styled-components/main';
import Items from './List-item';


const Favorites = ({ likedItems }) => {
  return (
    <div>
      <SectionHeading>List of Appreciated Real Estates</SectionHeading>
      <TheListings>
        <Items items={likedItems} />
      </TheListings>
    </div>
  );
}


const getFavorites = (data, theArray) => {
  return data.filter((e) => theArray.includes(e.id));
}

const mapStateToProps = (state) => ({
  likedItems: getFavorites(state.aptList, state.likedItems),
})


export default withRouter(connect(mapStateToProps, null)(Favorites));
