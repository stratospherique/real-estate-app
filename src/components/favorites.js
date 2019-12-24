import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { TheListings } from '../styled-components/main';
import Items from './list-item';
import { getItems, getItemsFail } from '../actions/index';


class Favorites extends React.Component {

  render() {
    const { likedItems } = this.props;
    return (
      <TheListings>
        <Items items={likedItems} />
      </TheListings>
    )
  }
}


const getFavorites = (data, theArray) => {
  return data.filter((e) => theArray.includes(e.id));
}

const mapStateToProps = (state) => ({
  likedItems: getFavorites(state.aptList, state.likedItems),
})

const mapDispatchToProps = (dispatch) => ({
  getItems: () => {
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((response) => {
        axios.get(`http://localhost:3001/user/${response.data.user.id}/favs`)
          .then((response) => {
            dispatch(getItems(response.data))
          })
      })
  },
});


export default withRouter(connect(mapStateToProps, null)(Favorites));