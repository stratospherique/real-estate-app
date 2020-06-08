import React from 'react';

import Item from './Item';
// const Item = React.lazy(() => import('./Item'));

const Items = ({ items }) => {
  return (
    <>
      {
        (items[0] && items.map((item) => (
          <li key={item.id}>
              <Item index={item.id} imgLink={item.preview[0]} altText={item.buildingType} price={item.price} description={item.description} />
          </li>
        ))) || <li>No items collected</li>
      }
    </>
  );
}


export default Items;
