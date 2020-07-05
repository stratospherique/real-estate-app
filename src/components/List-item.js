import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
// const Item = React.lazy(() => import('./Item'));

const Items = ({ items, authorID }) => {
  return (
    <>
      {
        (items[0] && items.map((item) => (
          <li key={item.id}>
              <Item index={item.id} imgLink={item.preview[0]} altText={item.buildingType} price={item.price} description={item.description} deletable={authorID === item.user_id} />
          </li>
        ))) || <li>No items collected</li>
      }
    </>
  );
}

const mapStateToProps = ({ currentUser }) => ({
  authorID: currentUser.user.id
})


export default connect(mapStateToProps, null)(Items);
