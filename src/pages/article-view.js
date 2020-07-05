import React from 'react';
import { connect } from 'react-redux';
import { ArticleViewContainer } from '../styled-components/main';


const Article = ({ theItem, cleanFlash }) => {

  return (
    <div>
      {
        theItem ? (
          <ArticleViewContainer>
            <img src={theItem.preview[0]} alt="oh ma" className="art-img" />
            <div className="art-l1">
              <span>$ {theItem.price}</span>
              <span>🌟 {theItem.rating}</span>
            </div>
            <p className="art-l2">{theItem.description}</p>
            <div className="art-l3">
              <span>🏘 {theItem.buildingType}</span>
              <span>🏚 {theItem.propertyType}</span>
              <span>▨ {theItem.footage}</span>
              <span>🏙 {theItem.city}</span>
            </div>
          </ArticleViewContainer>
        ) : (<article>Oops! Somethings wrong</article>)
      }
    </div>
  );
}


const mapStateToProps = (state, ownProps) => {
  return {
    theItem: state.aptList.find((e) => e.id == ownProps.match.params.id),
  };
};


export default connect(mapStateToProps, null)(Article);
