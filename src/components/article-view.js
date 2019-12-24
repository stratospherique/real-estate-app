import React from 'react';
import { connect } from 'react-redux';


const Article = ({ theItem }) => (
  <div>
    {
      theItem ? (
        <article>
          <img src={theItem.preview[0]} alt="oh ma" />
          <span>{theItem.price}</span>
          <p>{theItem.desciption}</p>
          <span>{theItem.rating}</span>
          <div>
            <span>{theItem.buildingType}</span>
            <span>{theItem.propertyType}</span>
            <span>{theItem.footage}</span>
            <span>{theItem.city}</span>
          </div>
        </article>
      ) : (<article>Oops! Somethings wrong</article>)
    }
  </div>
);


const mapStateToProps = (state, ownProps) => {
  return {
    theItem: state.aptList.find((e) => e.id == ownProps.match.params.id),
  };
};

export default connect(mapStateToProps, null)(Article);
