import React from 'react';
import UserName from '../containers/username';
import { AvatarContainer } from '../styled-components/main';

class Avatar extends React.Component {
  state = {
    open: false,
    width: window.innerWidth,
    direction: window.width > 750 ? 'down' : 'up',
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
      direction: window.innerWidth > 750 ? 'down' : 'up',
    })
  }

  handleDrop = () => {
    this.setState((state) => ({
      open: !state.open,
    }))
  }

  render() {
    const dropMenu = this.state.open ? (
      <UserName cls={this.state.direction === 'up' ? 'up-content' : 'down-content'} />
    ) : <UserName cls="hidden" />
    return (
      <AvatarContainer>
        <img src="https://www.w3schools.com/howto/img_avatar2.png" className="avatar-pic" onClick={this.handleDrop} />
        {dropMenu}
      </AvatarContainer>
    );
  }
}


export default Avatar;