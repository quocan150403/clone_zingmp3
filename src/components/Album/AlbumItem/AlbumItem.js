import { useState, memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'tippy.js/dist/tippy.css'; // optional
import { useDispatch, useSelector } from 'react-redux';
import { playPause } from 'app/features/playerSlice';
import { toast } from 'react-toastify';
import { openAuthForm, updateUserField } from 'app/features/userSlice';
import { setCurrentPlaylist, openDeleteForm, openEditForm } from 'app/features/playlistSlice';

import './AlbumItem.scss';
import images from 'assets/images';
import { commonApi } from 'api';
import AlbumActions from './AlbumActions';
import AlbumInfo from './AlbumInfo';

function AlbumItem({ data, small, detail, isArtist, type = 'album', hideLikeBtn, hideMoreBtn }) {
  const dispatch = useDispatch();
  const { album, isPlaying } = useSelector((state) => state.player);
  const { currentUser, isAuth } = useSelector((state) => state.user);
  const [isShowOption, setIsShowOption] = useState(false);
  const [isFavoriteAlbum, setIsFavoriteAlbum] = useState(false);

  useEffect(() => {
    if (currentUser && currentUser.favoriteAlbums) {
      setIsFavoriteAlbum(currentUser.favoriteAlbums.includes(data._id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleShowOption = (e) => {
    e.preventDefault();
    setIsShowOption(!isShowOption);
  };

  const handleEditPlaylist = (e) => {
    e.preventDefault();
    setIsShowOption(false);
    dispatch(setCurrentPlaylist(data));
    dispatch(openEditForm());
  };

  const handleClickHeart = async (e) => {
    e.preventDefault();
    if (!isAuth) dispatch(openAuthForm());
    try {
      const result = await commonApi.toggleLikeAlbum(data._id, currentUser._id);
      const { updatedFavorites, liked } = result;
      dispatch(updateUserField({ field: 'favoriteAlbums', value: updatedFavorites }));
      setIsFavoriteAlbum(liked);
      if (liked) {
        toast.success('Đã thêm album vào thư viện');
      } else {
        toast.success('Đã xóa album khỏi thư viện');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePlaylist = (e) => {
    e.preventDefault();
    setIsShowOption(false);
    dispatch(setCurrentPlaylist(data));
    dispatch(openDeleteForm());
  };

  const classes = classNames('album', {
    detail,
    small,
    active: album._id === data._id && isPlaying,
    'is-artist': isArtist,
  });

  const isPlaylist = type === 'playlist';
  const to = `/${type}/${data.slug}`;

  return (
    <div className={classes}>
      <Link to={to} className="album__wrapper br-5">
        <img className="album__wrapper-image" src={data.imageUrl || images.albumDefault} alt="" />
        <AlbumActions
          hideLikeBtn={hideLikeBtn}
          hideMoreBtn={hideMoreBtn}
          isFavoriteAlbum={isFavoriteAlbum}
          isPlaylist={isPlaylist}
          isShowOption={isShowOption}
          onClickHeart={handleClickHeart}
          onClickPlay={handlePlayPause}
          onHide={() => setIsShowOption(false)}
          onShowOption={handleShowOption}
          onClickEditBtn={handleEditPlaylist}
          onClickDeleteBtn={handleDeletePlaylist}
        />
        <div className="album__wrapper-overlay" />
      </Link>
      <AlbumInfo
        small={small}
        data={data}
        detail={detail}
        isArtist={isArtist}
        isFavoriteAlbum={isFavoriteAlbum}
        isPlaying={isPlaying}
        isShowOption={isShowOption}
        onClickHeart={handleClickHeart}
        onClickPlay={handlePlayPause}
        onShowOption={handleShowOption}
        onHideOption={() => setIsShowOption(false)}
      />
    </div>
  );
}

AlbumItem.propTypes = {
  data: PropTypes.object,
  small: PropTypes.bool,
  detail: PropTypes.bool,
  isArtist: PropTypes.bool,
  type: PropTypes.string,
  hideLikeBtn: PropTypes.func,
  hideMoreBtn: PropTypes.func,
};

export default memo(AlbumItem);
