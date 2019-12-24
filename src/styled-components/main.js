import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid;
  display: block;
  position: relative;
  width: 100%;
  min-width: 250px;
`;

const MainSection = styled.main`
  border: 1px solid blue;
  position: absolute;
  top: 6rem;
  width: 100%;
  padding: 1rem;
  

  @media screen and (max-width: 750px){
    top: 0;
    margin-bottom: 4rem;
  }
`;

const TheListings = styled.ul`
  border: 1px solid green;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: repeat(auto-fill, minmax(100px, 150px));
  grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
  grid-gap: 1rem;
`;

const ArticlePreview = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: auto;
  max-width: 250px;
  height: 9rem;
  position: relative;

  & > a {
    height: 100%;
  }
  .preview {
    width: 100%;
    max-width: 250px;
    max-height: 150px;
    height: 70%;
  }

  .del-button {
    position: absolute;
    top:0;
    right: 0;
    color: red;
  }
`;

const HeaderContainer = styled.header`
  border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
  width: 100%;
  position: fixed;
  z-index: 100;

  @media screen and (max-width: 750px){
    bottom: 0;
  }
  background-color: white;
`;


export { ArticlePreview, Container, HeaderContainer, MainSection, TheListings };
