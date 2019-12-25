import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ArticlePreview, PreviewIMG, ArtPrice, ArtDesc, DelBtn, FavBtn } from '../styled-components/main';
import axios from 'axios';
import { getItems, getItemsFail } from '../actions/index';

class Item extends React.Component {

  handleRemove = (index) => {
    if (!this.props.history) return
    axios.delete(`https://final-app-api.herokuapp.com/articles/${index}`)
      .then((response) => {
        this.props.getItems();
      })
      .catch((errors) => {
        alert(errors);
      })
  }

  redirect = () => {
    this.props.history.push('/favorities');
  }

  handleLike = () => {
    const { user_id, index: article_id, addLiked } = this.props
    axios.post('https://final-app-api.herokuapp.com/favorites', { favorite: { user_id, article_id } })
      .then((response) => {
        addLiked(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    const { index, imgLink, altText, price, description, isAdmin, isLogged, likedItems } = this.props;
    return (
      <ArticlePreview>
        <Link to={{ pathname: `/show/${index}` }} >
          <PreviewIMG src={imgLink} alt={altText} className="preview" />
          <ArtPrice className="art-price"><span>Price:</span><span>{price} $</span></ArtPrice>
          <ArtDesc className="art-desc"><span>Description:</span><span>{description}</span></ArtDesc>
        </Link>
        {isAdmin ? <DelBtn onClick={() => this.handleRemove(index)} className="del-button">✗</DelBtn> : null}
        {isLogged ? (
          likedItems.includes(index) ? <FavBtn className="fav-btn">💜</FavBtn> : <FavBtn className="fav-btn" onClick={this.handleLike}>💚</FavBtn>
        ) : null}

      </ArticlePreview>
    )
  }
}


const mapStateToProps = (state) => ({
  isAdmin: state.currentUser.user.admin,
  isLogged: state.currentUser.logged_in,
  likedItems: state.likedItems,
  user_id: state.currentUser.user.id
})

const mapDispatchToProps = (dispatch) => ({
  addLiked: (data) => {
    dispatch({
      type: 'ADD_LIKED',
      id: data,
    })
  },
  getItems: () => {
    axios.get('https://final-app-api.herokuapp.com/articles')
      .then((response) => {
        dispatch(getItems(response.data.articles));
      })
      .catch(() => {
        dispatch(getItemsFail());
      });
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Item));