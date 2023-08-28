import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { BsCheck2, BsFillPlayFill, BsPersonAdd, BsShuffle } from 'react-icons/bs';

import { Button } from 'components';
import { fNumberWithUnits } from 'utils/formatNumber';
import { useDispatch, useSelector } from 'react-redux';
import { commonApi } from 'api';
import { updateUserField } from 'app/features/userSlice';

export default function ArtistItem({ data, small }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser, isAuth } = useSelector((state) => state.user);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState();

  useEffect(() => {
    if (currentUser && currentUser.followedArtists) {
      setIsFollowing(currentUser.followedArtists.includes(data._id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const handleFollowArtist = async () => {
    try {
      if (!isAuth) return navigate('/login');
      const result = await commonApi.toggleFollowerArtist(data._id, currentUser._id);
      const { updatedFollowerCount, updatedFollowedArtists } = result;
      setFollowerCount(updatedFollowerCount);
      dispatch(updateUserField({ field: 'followedArtists', value: updatedFollowedArtists }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="artist-item">
      <Link to={`/artist/${data.slug}`} className="artist-item__wrap">
        <div className="artist-item__img">
          <img src={data.imageUrl} alt={data.name} />
          <div className="artist-item__overlay"></div>
          {!small && (
            <span className="artist-item__icon">
              <BsShuffle />
            </span>
          )}
        </div>
        {small && (
          <span className="artist-item__play">
            <BsFillPlayFill />
          </span>
        )}
      </Link>
      <div className="artist-item__info">
        <h3 className="artist-item__name">{data.name}</h3>
        {!small && (
          <p className="artist-item__desc">
            {fNumberWithUnits(followerCount || data.followers)} quan tâm
          </p>
        )}
        {!small && (
          <Button
            onClick={handleFollowArtist}
            uppercase
            className="px-4"
            primary
            medium
            leftIcon={isFollowing ? <BsCheck2 /> : <BsPersonAdd />}
          >
            {isFollowing ? 'Đã Quan tâm' : 'Quan tâm'}
          </Button>
        )}
      </div>
    </div>
  );
}
