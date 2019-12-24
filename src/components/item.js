import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ArticlePreview } from '../styled-components/main';
import axios from 'axios';
import { getItems, getItemsFail } from '../actions/index';

class Item extends React.Component {

  handleRemove = (index) => {
    if (!this.props.history) return
    axios.delete(`http://localhost:3001/articles/${index}`)
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
    axios.post('http://localhost:3001/favorites', { favorite: { user_id, article_id } })
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
          <img src={imgLink} alt={altText} className="preview" />
          <span>{price} $</span>
          <span>{description}</span>
        </Link>
        {isAdmin ? <span onClick={() => this.handleRemove(index)} className="del-button">✗</span> : null}
        {isLogged ? (
          likedItems.includes(index) ? <button>Liked</button> : <button onClick={this.handleLike}>Like</button>
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
    axios.get('http://localhost:3001/articles')
      .then((response) => {
        dispatch(getItems(response.data.articles));
      })
      .catch(() => {
        dispatch(getItemsFail());
      });
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Item));