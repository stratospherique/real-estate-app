import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faHeart } from '@fortawesome/free-solid-svg-icons';
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

const PreviewComponent = ({ source, className, altText, children }) => {

  const [isLoading, setIsLoading] = useState(true)

  const [hasError, setHasError] = useState(false);

  return (
    <>
      {children}
      { isLoading && !hasError ? <Loading bgColor="white" size="small" spinnerColor="white" /> : null}
      { !hasError ? <img src={source} className={className} alttext={altText} onError={() => setHasError(true)} 
      onLoad={() => setIsLoading(false)} /> : null}
      { hasError ? <img src={missingImage} className={className} alttext="image unavailable" /> : null }
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

  &:hover{
    opacity: .6;
    background-color: gray;
  }
`;

const LoadingDiv = ({ className, children }) => (
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
  ${props => props.bgColor ? `background-color: ${props.bgColor};` : 'background-color: rgb(100,100,100);'}
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  place-content: center;
  z-index: ${({size}) => size && size == 'small' ? '20;' : '1000;'}

  & > div {
    width: ${({size}) => size && size == 'small' ? '2rem;' : '5rem;'}
    height: ${({size}) => size && size == 'small' ? '2rem;' : '5rem;'}
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.squareColor ? `background-color: ${props.squareColor};` : 'background-color: rgb(10,50,0);'};
    border-radius: 1rem;

    svg {
      ${props => props.spinnerColor ? `color: ${props.spinnerColor};` : 'color: pink;'};
      font-size: ${({size}) => size && size == 'small' ? '1rem;' : '2rem;'}
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
  top: 0;
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

const AddFavBtn = ({className, children, triggerLike}) => (
  <div className={className} onClick={triggerLike}>
    <FontAwesomeIcon icon={faHeart} />
    {children}
  </div>
)

const FavBtn = styled(AddFavBtn)`
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

  & > svg {
    transition: color .5s ease;
    color: ${({liked}) => liked ? 'red;' : 'gray;'}
  }
`;

const HeaderContainer = styled.header`
  border: 1px solid #A6A9AC;
  /*
  display: grid;
  grid-template-columns: 1fr 3rem 1fr;
  grid-template-rows: auto;
  grid-template-areas: "left-side center-side right-side";
  */
  display: flex;
  justfy-content: space-around;
  height: 3.5rem;
  width: 100%;
  position: fixed;
  z-index: 100;

  @media screen and (max-width: 750px){
    bottom: 0;
  }
  /*
  @media screen and (min-width: 751px) {
    grid-template-columns: 1fr 1fr 5rem;
    grid-template-areas: "left-side right-side center-side";
  }*/
  background-color: white;

  nav {
    width: ${({rightStart}) => rightStart ? '45%' : '90%'};
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
`;

const AvatarContainer = styled.div`
  position: relative;
  display:flex;
  justify-content: center;
  width: 10%;
  height: 100%;


  .avatar-pic {
    box-sizing: content-box;
    vertical-align: middle;
    width: 3rem;
    height: 3rem;
    border: 1px dotted; 
    border-radius: 50%;
    position: absolute;
    top: 10%;
    cursor: pointer;
  }

  .drop-content {
    width: 4rem;
    height: 2.5rem;
    position: absolute;
    left: calc(50% - 2rem);
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
  width: 22rem;
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

  & button {
    margin-top: 10px;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

const ErrorsDisplayBasic = ({className, children, errors, action}) => (
  <div className={className}>
    {children}
      <span>Unable to {action} due to the following errors:</span>
      <ul>
        {errors.map((item) => <li key={item}>{item}</li>)}
      </ul>
  </div>
);

const ErrorsDisplay = styled(ErrorsDisplayBasic)`
  width: 100%;
  padding: .5rem;
  background-color: rgba(140,0,0,0.2);
  border-radius: .6rem;

  & > span {
    display: inline-block;
    margin-bottom: .5rem;
  }

  & li {
    list-style: circle;
    margin-left: 8%;
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
  ArticlePreview, Container, HeaderContainer, MainSection, TheListings, AvatarContainer, ArticleViewContainer, PreviewIMG, ArtPrice, ArtDesc, DelBtn, FavBtn, ArtForm, FormButton, SectionHeading, AboutContainer, Loading, ErrorsDisplay
};
