import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openAuthForm, updateUserField } from 'app/features/userSlice';

import { commonApi } from 'api';
import ArtistItemImage from './ArtistItemImage';
import ArtistItemInfo from './ArtistItemInfo';
import ArtistFollowBtn from './ArtistFollowBtn';

export default function ArtistItem({ data, small }) {
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
      if (!isAuth) return dispatch(openAuthForm());
      const result = await commonApi.toggleFollowerArtist(data._id, currentUser._id);
      const { updatedFollowerCount, updatedFollowedArtists } = result;
      setFollowerCount(updatedFollowerCount);
      dispatch(updateUserField({ field: 'followedArtists', value: updatedFollowedArtists }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="artist__item">
      <ArtistItemImage artist={data} small={small} />
      <ArtistItemInfo small={small} artist={data} followerCount={followerCount} />
      {!small && <ArtistFollowBtn isFollowing={isFollowing} onClickFollow={handleFollowArtist} />}
    </div>
  );
}
