import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateUserField } from 'app/features/userSlice';
import { setSong, playPause, setAlbum } from 'app/features/playerSlice';

import './Media.scss';
import { songApi, userApi } from 'api';
import { fMinutes } from 'utils/formatTime';
import MediaItemImage from './MediaItemImage';
import MediaItemCheckbox from './MediaItemCheckbox';
import MediaItemInfo from './MediaItemInfo';
import MediaItemOptions from './MediaItemOptions';
import MediaItemAlbum from './MediaItemAlbum';

function MediaItem({
  tracks,
  data,
  release,
  rank,
  primary,
  singer,
  grow,
  isPlayer,
  isQueue,
  index = 0,
  ignore = false,
  link = false,
  isMusicIcon = false,
  checkbox = false,
  indexChart = false,
  isBorder = false,
  showAlbum = false,
  responsive = false,
  checkedList = [],
  isPlaylist,
  onAddPlaylist,
  onRemovePlaylist,
  onChangeChecked,
}) {
  const { currentSong, isActive, isPlaying } = useSelector((state) => state.player);
  const { currentUser, isAuth } = useSelector((state) => state.user);
  const [isShowOption, setIsShowOption] = useState(false);
  const [isFavoriteSong, setIsFavoriteSong] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser && currentUser.favoriteSongs) {
      setIsFavoriteSong(currentUser.favoriteSongs.includes(data._id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  useEffect(() => {
    if (data?.albumId?._id) dispatch(setAlbum(data.albumId));
  }, [currentSong]);

  useEffect(() => {
    const handleScroll = () => {
      setIsShowOption(false);
    };
    const appElement = document.querySelector('.app-content');
    appElement.addEventListener('scroll', handleScroll);
    return () => {
      appElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickSong = async () => {
    const isCurrentSong = currentSong._id === data._id;
    if (isCurrentSong) {
      isPlaying ? dispatch(playPause(false)) : dispatch(playPause(true));
    } else {
      const itemIndex = tracks.findIndex((item) => item._id === data._id);
      dispatch(setSong({ tracks, song: data, i: itemIndex }));
      dispatch(playPause(true));
    }
    if (currentUser._id) {
      const { field, value } = await userApi.createHistorySong(currentUser._id, data._id);
      dispatch(updateUserField({ field, value }));
    }
  };

  const handleToggleLike = async () => {
    if (!isAuth) return navigate('/login');
    const result = await songApi.toggleLike(data._id, currentUser._id);
    const { updatedFavorites, liked } = result;
    dispatch(updateUserField({ field: 'favoriteSongs', value: updatedFavorites }));
    setIsFavoriteSong(liked);
    if (liked) {
      toast.success('Đã thêm bài hát vào thư viện');
    } else {
      toast.success('Đã xóa bài hát khỏi thư viện');
    }
  };

  const classes = classNames('media-item', {
    checked: checkedList.includes(index),
    active: isActive && currentSong._id === data._id,
    playing: isPlaying && isActive && currentSong._id === data._id,
    rank,
    release,
    primary,
    grow,
    ignore,
    checkbox,
    singer,
    responsive,
    'is-queue': isQueue,
    'is-player': isPlayer,
    'is-border': isBorder,
  });

  return (
    <div className={classes}>
      <div className="media-left">
        <MediaItemCheckbox
          index={index}
          indexChart={indexChart}
          checkbox={checkbox}
          isMusicIcon={isMusicIcon}
          checkedList={checkedList.includes(index)}
          onChangeChecked={() => onChangeChecked(index)}
        />

        <div className="media-left__inner">
          <MediaItemImage imageUrl={data.imageUrl} handleClick={handleClickSong} />
          <MediaItemInfo
            name={data.name}
            slug={data.slug}
            artists={data.artists}
            createdAt={data.createdAt}
            index={index}
            link={link}
            rank={rank}
            release={release}
          />
        </div>
      </div>
      {showAlbum && <MediaItemAlbum albumId={data.albumId} />}
      <span className="media-middle">{fMinutes(data.duration)}</span>
      {!rank && (
        <MediaItemOptions
          isPlaylist={isPlaylist}
          isShowOption={isShowOption}
          isFavoriteSong={isFavoriteSong}
          imageUrl={data.imageUrl}
          onClickLike={handleToggleLike}
          onClickAdd={() => onAddPlaylist(data._id)}
          onClickOption={() => setIsShowOption(!isShowOption)}
          onClickHideTippyHeadless={() => setIsShowOption(false)}
          onClickTrash={() => {
            setIsShowOption(false);
            onRemovePlaylist(data._id);
          }}
        />
      )}
    </div>
  );
}

MediaItem.propTypes = {
  release: PropTypes.bool,
  rank: PropTypes.bool,
  primary: PropTypes.bool,
  singer: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  full: PropTypes.bool,
  ignore: PropTypes.bool,
  index: PropTypes.number,
  checkbox: PropTypes.bool,
  indexChart: PropTypes.bool,
  isBorder: PropTypes.bool,
  checkedList: PropTypes.array,
  onChangeChecked: PropTypes.func,
};

export default memo(MediaItem);
