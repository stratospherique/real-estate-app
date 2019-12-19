import React from 'react';
import { Link } from 'react-router-dom';
import { ArticlePreview } from '../styled-components/main';

const Item = ({ index, imgLink, altText }) => (
  <ArticlePreview to={{ pathname: `/show/${index}` }}>
    <img src={imgLink} alt={altText} className="preview" />
    <span>8745 $</span>
    <span>short description</span>
  </ArticlePreview>
);

export default Item;