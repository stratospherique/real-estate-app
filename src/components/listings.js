import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getItems, getItemsFail } from '../actions/index';
import { TheListings } from '../styled-components/main';
import Items from './list-item';

class Listings extends React.Component {


  UNSAFE_componentWillMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props;
    return (
      <TheListings>
        <Items items={items} />
      </TheListings>
    );
  }
}
const mapStateToProps = (state) => ({
  items: state.aptList,
});

const mapDispatchToProps = (dispatch) => ({
  getItems: () => {
    axios.get('http://localhost:3001/articles')
      .then((response) => {
        dispatch(getItems(response.data.articles));
      })
      .catch(() => {
        dispatch(getItemsFail());
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
