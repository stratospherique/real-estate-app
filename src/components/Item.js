import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ArticlePreview, PreviewIMG, ArtPrice, ArtDesc, DelBtn, FavBtn } from '../styled-components/main';
import { getItems, getItemsFail } from '../actions/index';
import DOMAIN from '../_helpers/api-source';

const Item = ({ index, imgLink, altText, price, description, isAdmin, isLogged, likedItems, history, user_id, index: article_id, addLiked, getItems, flashFailure, flashSuccess, cleanFlash, flashActive, deletable }) => {
  const handleRemove = (index) => {
    if (!history) return
    axios.delete(`${DOMAIN}/articles/${index}`, { withCredentials: true })
      .then((response) => {
        getItems();
        flashSuccess('Succesfully Deleted');
      })
      .catch((errors) => {
        flashFailure('Oops, Unable to delete!');
      })
  }

  const handleLike = () => {
    axios.post(`${DOMAIN}/favorites`, { favorite: { user_id, article_id } }, { withCredentials: true })
      .then((response) => {
        addLiked(response.data);
        flashSuccess('Item Successfully added to favorites');
      })
      .catch((err) => {
        flashFailure('Oops, something went wrong!');
      })
  }

  const handleClick = (e) => {
    if (flashActive) cleanFlash();
  }

    return (
      <ArticlePreview>
        <Link to={{ pathname: `/show/${index}` }} onPointerDown={handleClick}>
          <LazyLoad
            placeholder={<span>Loading...</span>}
            once
          >
            <PreviewIMG source={imgLink} alt={altText} className="preview" loading="lazy" />
          </LazyLoad>
          <ArtPrice className="art-price"><span>Price:</span><span> $ {price}</span></ArtPrice>
          <ArtDesc className="art-desc"><span>Description:</span><span>{description}</span></ArtDesc>
        </Link>
        {isLogged && (isAdmin || deletable) ? <DelBtn onClick={() => handleRemove(index)} className="del-button"><FontAwesomeIcon icon={faTrashAlt} /></DelBtn> : null}
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
  user_id: state.currentUser.user.id,
  flashActive: state.flash.active
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
  flashSuccess: (msg) => {
    dispatch({
      type: 'ACTIVATE_FLASH',
      msg,
      nature: 'success'
    })
  },
  flashFailure: (msg) => {
    dispatch({
      type: 'ACTIVATE_FLASH',
      msg,
      nature: 'failure'
    })
  },
  cleanFlash: () => {
    dispatch({
      type: 'DEACTIVATE_FLASH',
      nature: '',
      msg: ''
    })
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Item));
