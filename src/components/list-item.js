import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { getItems, getItemsFail } from '../actions/index';
import Item from './item';

class Items extends React.Component {

  UNSAFE_componentWillMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props;
    return (
      <>
        {
          (items[0] && items.map((item) => (
            <li key={item.id}>
              <Item index={item.id} imgLink={item.preview[0]} altText={item.buildingType} />
            </li>
          ))) || <li>No items collected</li>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.aptList,
});

const mapDispatchToProps = (dispatch) => ({
  getItems: () => {
    axios.get('http://localhost:4000/articles')
      .then((response) => {
        dispatch(getItems(response.data));
      })
      .catch(() => {
        dispatch(getItemsFail());
      });
  },
});

Items = connect(mapStateToProps, mapDispatchToProps)(Items);

export default Items;