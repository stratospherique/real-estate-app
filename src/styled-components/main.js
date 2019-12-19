import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  border: 1px solid;
  display: block;
  position: relative;
  width: 100%;
`;

const MainSection = styled.main`
  border: 1px solid blue;
  position: absolute;
  top: 6rem;
  width: 100%;
  padding: 1rem;
`;

const ArticlePreview = styled(Link)`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: auto;
  height: 9rem;

  .preview {
    width: 100%;
    height: 70%;
  }
`;

const HeaderContainer = styled.header`
  border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  position: fixed;
  z-index: 100;
  background-color: white;
`;

const Listings = styled.ul`
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
`;


export { ArticlePreview, Container, HeaderContainer, MainSection, Listings };
