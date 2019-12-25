import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid;
  display: block;
  position: relative;
  width: 100%;
  min-width: 250px;
`;

const MainSection = styled.main`
  position: absolute;
  top: 6rem;
  width: 100%;
  padding: 1rem;
  display: grid;
  justify-content: center;
  justify-items: center;
  

  @media screen and (max-width: 750px){
    top: 0;
    margin-bottom: 4rem;
  }
`;

const TheListings = styled.ul`
  padding: 1rem;
  margin: .5rem;
  width: 80vw;
  max-width: 850px;
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(auto-fill, minmax(100px, 150px));
  grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
  grid-gap: 1rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 1px 1px 2px 2px #a7a9ac;
`;



const ArticlePreview = styled.div`
  display: flex;
  border: 1px solid;
  border-radius: 10px 10px 0px 0px;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  height: 9rem;
  position: relative;
  background-color: rgb(230,255,200);

  & > a {
    height: 100%;
    text-decoration: none;
  }
`;

const PreviewIMG = styled.img`
  width: 100%;
  max-width: 250px;
  max-height: 150px;
  height: 70%;
  border-radius: 10px 10px 0px 0px;
  transition: .5s opacity ease-out;

  &:hover{
    opacity: .6;
    background-color: gray;
  }
`

const ArtPrice = styled.div`
  padding-left: .3rem;
  & :nth-child(1) {
    color: black;
    font-size: .6rem;
    margin-right: .2rem;
  }
  & :nth-child(2) {
    color: magenta;
    font-size: .8rem;
  }
`;

const ArtDesc = styled.div`
  padding-left: .3rem;
  height: 10%;
  overflow: hidden;
  & :nth-child(1) {
    color: black;
    font-size: .6rem;
    margin-right: .2rem;
  }
  & :nth-child(2) {
    color: #a7a9ac;
    font-size: .8rem;
  }
`;

const DelBtn = styled.span`
  position: absolute;
  top:0;
  right: .2rem;
  font-size: 1rem;
  font-weight: 900;
  color: red;
  padding: .7rem;
  border-radius: 50%;
  transition: .5s all ease-in;
  background-color: #17BEBB;
  opacity: .5;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: lightgray;
    opacity: 1;
  }
`;

const FavBtn = styled.span`
  position: absolute;
  top: 60%;
  right: 0;
  border-radius: 50%;
  padding: .7rem;
  font-size: 1rem;
  background-color: lightgray;
  transition: .5s all ease-in;
  cursor: pointer;
  &:hover {
    background-color: lightpink;
  }
`;

const HeaderContainer = styled.header`
  border: 1px solid green;
  display: grid;
  grid-template-columns: 1fr 3rem 1fr;
  grid-template-rows: auto;
  grid-template-areas: "left-side center-side right-side";
  height: 3.5rem;
  width: 100%;
  position: fixed;
  z-index: 100;

  @media screen and (max-width: 750px){
    bottom: 0;
  }

  @media screen and (min-width: 751px) {
    grid-template-columns: 1fr 1fr 5rem;
    grid-template-areas: "left-side right-side center-side";
  }
  background-color: white;

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      text-decoration: none;
      text-transform: capitalize;
      text-align: center;
      width: 5.5rem;
      height: 2.2rem;
      line-height: 1.4rem;
      overflow: hidden;
      border: 1px solid;
      padding: .5rem;
      border-radius: 5px 0 5px 0;
      color: black;

      &:hover {
        background-color: rgba(200,0,100,0.4);
        border-color: white;
        color: white;
      }

      @media screen and (max-width: 400px) {
        width: 4rem;
      }
    }
  }

  .activeTab {
    color: gray;
  }

  .nav-left {
      grid-area: left-side;
      
    }

  .nav-right {
      grid-area: right-side;
  }
  
`;

const AvatarContainer = styled.div`
  grid-area: center-side;
  position: relative;
  height: 100%;

  .avatar-pic {
    vertical-align: middle;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    position: absolute;
    top: 10%;
    cursor: pointer;
  }

  .drop-content {
    width: 4rem;
    height: 2.5rem;
    position: absolute;
    left: -10%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    z-index: 100;
    background-color: white;

    box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.2);

    & span {
      height: 50%;
      text-align: center;
      color: rgba(255,50,0,0.4);

      &:hover {
        background-color: rgba(0,255,0,0.1);
      }
    }
    & a {
      height: 50%;
      text-align: center;
      color: rgba(255,50,0,0.4);
      text-decoration: none;

      &:hover {
        background-color: rgba(0,255,0,0.1);
      }
    }
  }

  .hidden {
    visibility: hidden;
  }

  .up-content {
    top: -2.55rem;
    flex-direction: column-reverse;
  }

  .down-content {
    bottom: -2.7rem;
    flex-direction: column;
  }
`;

const ArticleViewContainer = styled.article`
  box-shadow: 0px 1px 1px 3px #82858F;
  height: 20rem;
  margin-top: 7rem;
  max-width: 500px;
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(203, 233, 176, 0.19);

  .art-img {
    border-radius: 10px 10px 0px 0px;
    border-bottom: 2px solid #232a38;
    width: 100%;
    height: 50%;

    &:hover {
      opacity: 0.8;
    }
  }

  .art-l1 {
    padding: .5rem 1rem;
    display: flex;
    justify-content: space-between;
    margin-top: .3rem;

    & :nth-child(1) {
      color: magenta;
      font-size: 1.5em;
      font-weight: 900;
    }
    & :nth-child(2) {
      color: #EB73D5;
      font-size: 1.5em;
      font-weight: 900;
    }
  }

  .art-l2 {
    padding: .5rem 1rem;
    font-size: 1.2em;
  }

  .art-l3 {
    padding: .5rem 1rem;
    display: flex;
    flex-wrap: wrap;

    & span {
      display: inline-block;
      width: 50%;
      padding: 10px;
      transition: .5s transform ease;
      line-height: .7rem;

      &:hover {
        transform: scale(1.2);
        transform: translateX(10%);
        color: #232a38;
      }
    }
  }
`;

const ArtForm = styled.form`
  margin-top: 7rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 2px 2px #EB73D5; 
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & div {
    padding: .5rem;
    width: 100%;

    & input {
      width: 100%;
      box-shadow: inset 1px 1px solid gray;
      border-radius: 5px;
      text-align: center;
      color: rgba(140,0,200,0.6);
    }
  }

  & ul {
    padding: .5rem;
    background-color: rgba(140,0,0,0.2);
    border-radius: .6rem;
    
    & li {
      list-style: circle;
      margin-left: 8%;
    }
  }

  & button {
    margin-top: 10px;
  }
`;

const FormButton = styled.button`
  border-radius: 5px;
  padding: .5rem;
  background-color: rgba(140,0,200,0.6);
  text-transform: capitalize;
  color: white;
  font-weight: 900;
`;

export {
  ArticlePreview, Container, HeaderContainer, MainSection, TheListings, AvatarContainer, ArticleViewContainer, PreviewIMG, ArtPrice, ArtDesc, DelBtn, FavBtn, ArtForm, FormButton,
};
