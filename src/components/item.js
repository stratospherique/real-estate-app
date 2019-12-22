import React from 'react';
import { Link } from 'react-router-dom';
import { ArticlePreview } from '../styled-components/main';
import axios from 'axios';

class Item extends React.Component {

  handleRemove = (index) => {
    console.log(this.props)
    if (!this.props.history) return
    axios.delete(`http://localhost:3001/articles/${index}`)
      .then((response) => {
        this.redirect();
      })
      .catch((errors) => {
        alert(errors);
      })
  }

  redirect = () => {
    this.props.history.push('/');
  }

  render() {
    const { index, imgLink, altText, history } = this.props;
    return (
      <ArticlePreview>
        <Link to={{ pathname: `/show/${index}` }} >
          <img src={imgLink} alt={altText} className="preview" />
          <span>8745 $</span>
          <span>short description</span>
        </Link>
        <span onClick={() => this.handleRemove(index)} className="del-button">✗</span>
      </ArticlePreview>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  getItems: (data) => {
    dispatch({
      type: 'GET_ITEMS',
      items: data,
    })
  }
})

export default Item;