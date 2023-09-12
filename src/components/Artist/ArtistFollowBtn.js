import Button from 'components/Button';
import React from 'react';
import { BsCheck2, BsPersonAdd } from 'react-icons/bs';

function ArtistFollowBtn({ isFollowing, onClickFollow }) {
  return (
    <Button
      onClick={onClickFollow}
      uppercase
      className="px-4"
      primary
      medium
      leftIcon={isFollowing ? <BsCheck2 /> : <BsPersonAdd />}
    >
      {isFollowing ? 'Đã Quan tâm' : 'Quan tâm'}
    </Button>
  );
}

export default ArtistFollowBtn;
