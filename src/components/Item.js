import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import axios from 'axios';
import { ArticlePreview, PreviewIMG, ArtPrice, ArtDesc, DelBtn, FavBtn } from '../styled-components/main';
import { getItems, getItemsFail } from '../actions/index';
import DOMAIN from '../_helpers/api-source';

const Item = ({ index, imgLink, altText, price, description, isAdmin, isLogged, likedItems, history, user_id, index: article_id, addLiked, getItems }) => {
  const handleRemove = (index) => {
    if (!history) return
    axios.delete(`${DOMAIN}/articles/${index}`)
      .then((response) => {
        getItems();
      })
      .catch((errors) => {
        alert(errors);
      })
  }

  const redirect = () => {
    history.push('/favorities');
  }

  const handleLike = () => {
    axios.post(`${DOMAIN}/favorites`, { favorite: { user_id, article_id } })
      .then((response) => {
        addLiked(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }

    return (
      <ArticlePreview>
        <Link to={{ pathname: `/show/${index}` }}>
          <LazyLoad
            placeholder={<span>Loading...</span>}
            once
          >
            <PreviewIMG source={imgLink} alt={altText} className="preview" loading="lazy" />
          </LazyLoad>
          <ArtPrice className="art-price"><span>Price:</span><span> $ {price}</span></ArtPrice>
          <ArtDesc className="art-desc"><span>Description:</span><span>{description}</span></ArtDesc>
        </Link>
        {isAdmin ? <DelBtn onClick={() => handleRemove(index)} className="del-button">✗</DelBtn> : null}
        {isLogged ? (
          likedItems.includes(index) ? <FavBtn liked /> : <FavBtn triggerLike={handleLike} />
        ) : null}

      </ArticlePreview>
    )
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
    axios.get(`${DOMAIN}/articles`)
      .then((response) => {
        dispatch(getItems(response.data.articles));
      })
      .catch(() => {
        dispatch(getItemsFail());
      });
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Item));
