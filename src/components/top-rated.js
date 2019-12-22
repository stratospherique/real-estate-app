import React from 'react';
import axios from 'axios';
import Items from './list-item';
import { TheListings } from '../styled-components/main';

class TopRated extends React.Component {

  state = {
    trending: []
  }

  UNSAFE_componentWillMount() {
    axios.get('http://localhost:3001/articles/trending')
      .then((response) => {
        this.setState({
          trending: response.data.trending
        })
      })
  }

  render() {
    const { trending } = this.state;
    return (
      <TheListings>
        <Items items={trending} />
      </TheListings>
    );
  };
}


export default TopRated;