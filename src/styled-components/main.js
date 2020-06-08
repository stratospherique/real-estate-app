import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import missingImage from '../assets/not-available.png';

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

const SectionHeading = styled.h1`
  margin: 0;
  margin-left: 2.2rem;
  font-size: 1.5rem;
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
`;

const ArticlePreview = styled.div`
  display: flex;
  border: 1px solid #CBCCCD;
  border-radius: 10px 10px 0px 0px;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  height: 9rem;
  position: relative;
  background-color: #fff;

  & > a {
    height: 100%;
    text-decoration: none;
  }
`;

const PreviewComponent = ({ source, className, altText }) => {

  const [isLoading, setIsLoading] = useState(true)

  const [hasError, setHasError] = useState(false);

  return (
    <>
      { isLoading && !hasError ? <Loading /> : null}
      { !hasError ? <img src={source} className={className} altText={altText} onError={() => setHasError(true)} 
      onLoad={() => setIsLoading(false)} /> : null}
      { hasError ? <img src={missingImage} className={className} altText="image unavailable" /> : null }
    </>
  )
}

const PreviewIMG = styled(PreviewComponent)`
  width: 100%;
  max-width: 250px;
  max-height: 150px;
  height: 70%;
  border-radius: 10px 10px 0px 0px;
  transition: .5s opacity ease-out;
  positon: relative;

  & > svg {
    position: absolute;
    left: 40%;
    top: 40%;
  }

  &:hover{
    opacity: .6;
    background-color: gray;
  }
`;

const LoadingDiv = ({className, children}) => (
  <div className={className}>
    <div>
      <FontAwesomeIcon icon={faSpinner} spin />
    </div>
    {children}
  </div>
)

const Loading = styled(LoadingDiv)`
  width: 100%;
  height: 100%;
  background-color: rgb(100,100,100);
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  place-content: center;
  z-index: 1000;

  & > div {
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(88,155,88);
    border-radius: 1rem;

    svg {
      color: white;
      font-size: 2rem;
    }
  }
`;

const ArtPrice = styled.div`
  padding-left: .3rem;
  & :nth-child(1) {
    color: black;
    font-size: .6rem;
    margin-right: .2rem;
  }
  & :nth-child(2) {
    color: #1B2333;
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
  background-color: #a7a9ac;
  opacity: .5;
  cursor: pointer;

  &:hover {
    color: #D831B5;
    opacity: 1;
  }
`;

const FavBtn = styled.span`
  position: absolute;
  top: 60%;
  right: 0;
  border-radius: 50%;
  border: .5px solid lightgray;
  padding: .7rem;
  font-size: 1.2rem;
  background-color: white;
  transition: .5s all ease-in;
  cursor: pointer;
  color: #82858F;
  font-weight: bold;
`;

const HeaderContainer = styled.header`
  border: 1px solid #A6A9AC;
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
      font-size: 1em;
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
      color: #1B2333;
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
  border: 1px solid #CBCCCD;
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

const AboutContainer = styled.div`
  border: 1px solid #CBCCCD;
  padding: 1rem;
  border-radius: .5rem;

  h3 {
    font-size: 1.5em;
    margin-bottom: 1rem;
    color: #222A39;
  }

  h4 {
    font-size: 1em;
    margin-bottom: .5rem;
    color: #D831B5;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    p {
      margin-bottom: 5px;
    }
    & span {
      width: 1.5rem;
      display: inline-block;
      text-align: center;
      color: #57DAD7;
    }
  }
`;

export {
  ArticlePreview, Container, HeaderContainer, MainSection, TheListings, AvatarContainer, ArticleViewContainer, PreviewIMG, ArtPrice, ArtDesc, DelBtn, FavBtn, ArtForm, FormButton, SectionHeading, AboutContainer, Loading
};
