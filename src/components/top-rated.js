import React from 'react';
import { Link } from 'react-router-dom';
import Items from './list-item';
import { Listings } from '../styled-components/main';

const TopRated = () => (
  <Listings>
    <Items />
  </Listings>
);


export default TopRated;