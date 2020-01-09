import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TheListings } from '../styled-components/main';
import Items from './List-item';


const Favorites = ({ likedItems }) => (
  <div>
    <h3>List of Appreciated Real Estates</h3>
    <TheListings>
      <Items items={likedItems} />
    </TheListings>
  </div>
);


const getFavorites = (data, theArray) => {
  return data.filter((e) => theArray.includes(e.id));
}

const mapStateToProps = (state) => ({
  likedItems: getFavorites(state.aptList, state.likedItems),
})


export default withRouter(connect(mapStateToProps, null)(Favorites));
