import React from 'react';
import { connect } from 'react-redux';

class Article extends React.Component {

  render() {
    const { theItem } = this.props;
    return (
      <>
        {
          theItem ? (
            <article>
              <img src={theItem.preview[0]} />
            </article >
          ) : (
              <article>Oops! Somethings wrong</article>
            )
        }
      </>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    theItem: state.aptList.find((e) => e.id == ownProps.match.params.id),
  }
}

export default connect(mapStateToProps, null)(Article);
