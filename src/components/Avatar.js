import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import UserName from '../containers/username';
import { AvatarContainer } from '../styled-components/main';

const figureDirection = (label) => {
  switch (label) {
    case 'mobile':
      return 'up'
    default:
      return 'down'
  }
}

const Avatar = ({ viewport, image }) => {
  const [dropState, setDropState] = useState({
    open: false,
    direction: figureDirection(viewport),
  });

  useEffect(() => {
    setDropState({
      ...dropState,
      direction: figureDirection(viewport),
    })
  }, [viewport])

  const handleDrop = () => {
    if (viewport !== 'web') return;
    setDropState({
      ...dropState,
      open: true,
    })
  }

  const handleResume = () => {
    if (viewport !== 'web') return;
    setDropState({
      ...dropState,
      open: false,
    })
  }

  const handleClick = () => {
    if (viewport === 'web') return;
    setDropState({
      ...dropState,
      open: !dropState.open
    })
  }

  return (
    <AvatarContainer
      onPointerLeave={handleResume}
      onPointerEnter={handleDrop}
      onClick={handleClick}
      orientation={dropState.open ? dropState.direction : null}
    >
      <img src={image} className="avatar-pic" alt="Avatar" />
      {dropState.open ? (
    <UserName cls={dropState.direction === 'up' ? 'up-content' : 'down-content'} />
  ) : <UserName cls="hidden" />}
    </AvatarContainer>
  );
}

const mapStateToProps = ({ viewport }) => ({
  viewport,
});


export default connect(mapStateToProps, null)(Avatar);
