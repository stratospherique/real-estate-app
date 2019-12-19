import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ArticlePreview = styled(Link)`
  border: 1px solid red;
  display: flex;
  width: 11rem;
  height: 9rem;

  .preview {
    width: 100%;
    height: 100%;
  }
`;

export { ArticlePreview };