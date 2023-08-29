import {
  BsArrowReturnRight,
  BsDownload,
  BsHeart,
  BsHeartFill,
  BsLink45Deg,
  BsPen,
  BsPlayFill,
  BsTextWrap,
  BsThreeDots,
  BsTrash,
  BsXLg,
} from 'react-icons/bs';
import { useState, memo, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';
import { useDispatch, useSelector } from 'react-redux';
import { playPause } from 'app/features/playerSlice';
import { setCurrentPlaylist, openDeleteForm, openEditForm } from 'app/features/playlistSlice';

import { Button, MenuItem, Wrapper } from 'components';
import './Album.scss';
import images from 'assets/images';
import { fDate } from 'utils/formatTime';

function AlbumItem({
  data,
  small,
  detail,
  isArtist,
  isFavoriteAlbum,
  type = 'album',
  hideLikeBtn,
  hideMoreBtn,
  onClickLike,
}) {
  const dispatch = useDispatch();
  const { albumId, isPlaying } = useSelector((state) => state.player);
  const [isShowOption, setIsShowOption] = useState(false);

  const handlePlayPause = async () => {
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

  const handleDeletePlaylist = (e) => {
    e.preventDefault();
    setIsShowOption(false);
    dispatch(setCurrentPlaylist(data));
    dispatch(openDeleteForm());
  };

  const classes = classNames('album', {
    detail,
    small,
    active: albumId === data._id && isPlaying,
    'is-artist': isArtist,
  });

  const isPlaylist = type === 'playlist';

  return (
    <div className={classes}>
      <Link to={`/${type}/${data.slug}`} className="album-wrapper br-5">
        <img className="album-wrapper__image" src={data.imageUrl || images.albumDefault} alt="" />
        <div className="album-wrapper__actions">
          {!hideLikeBtn && (
            <Tippy content="Thêm vào thư viện">
              <div className="album-wrapper__btn">
                <BsHeart />
              </div>
            </Tippy>
          )}
          {isPlaylist && (
            <Tippy content="Xóa playlist">
              <div onClick={handleDeletePlaylist} className="album-wrapper__btn">
                <BsXLg />
              </div>
            </Tippy>
          )}
          <div onClick={handlePlayPause} className="album-wrapper__btn album-wrapper__btn--play">
            <BsPlayFill className="album-icon__play" />
            <img className="album-icon__playing" src={images.iconPlaying} alt="" />
          </div>
          {!hideMoreBtn && (
            <TippyHeadless
              visible={isShowOption}
              interactive={true}
              placement="bottom-end"
              offset={[0, 10]}
              onClickOutside={() => setIsShowOption(false)}
              onHide={() => setIsShowOption(false)}
              appendTo={() => document.body}
              render={(attrs) => (
                <Wrapper {...attrs} tabIndex="-1" className="pb-3 pt-3 p-0">
                  <MenuItem small option icon={<BsTextWrap />} title="Thêm vào danh sách phát" />
                  <MenuItem small option icon={<BsDownload />} title="Tải xuống" />
                  <MenuItem small option icon={<BsLink45Deg />} title="Sao chép link" />
                  <MenuItem small option icon={<BsArrowReturnRight />} title="Chia sẻ" />
                  {isPlaylist && (
                    <>
                      <MenuItem
                        small
                        option
                        icon={<BsPen />}
                        title="Chỉnh sửa playlist"
                        onClick={handleEditPlaylist}
                      />
                      <MenuItem
                        small
                        option
                        icon={<BsTrash />}
                        title="Xóa playlist"
                        onClick={handleDeletePlaylist}
                      />
                    </>
                  )}
                </Wrapper>
              )}
            >
              <Tippy content="Khác">
                <div className="album-wrapper__btn" onClick={handleShowOption}>
                  <BsThreeDots />
                </div>
              </Tippy>
            </TippyHeadless>
          )}
        </div>
        <div className="album-wrapper__overlay" />
      </Link>
      <div className="album-info">
        {isArtist ? <p className="album-info__type mb-2">Singer</p> : null}
        <Link href="/" className="album-info__title">
          {data.name}
        </Link>
        {detail && <p className="album-info__likes">Cập nhật: {fDate(data.updatedAt)} </p>}
        {!small && (
          <p className="album-info__authors">
            {data.artists &&
              data.artists.map((item, index) => (
                <Fragment key={index}>
                  {index > 0 && ', '}
                  <Link to={`/artist/${item.slug}`} className="album-info__author">
                    {item.name}
                  </Link>
                </Fragment>
              ))}
          </p>
        )}
        {isArtist && <p className="album-info__type mb-0 mt-3">{fDate(data.createdAt)}</p>}

        {detail && (
          <div>
            <p className="album-info__likes mb-4">{data.favorites} người yêu thích</p>
            <Button primary uppercase leftIcon={<BsPlayFill />}>
              Phát tất cả
            </Button>
            <div className="mt-4 gap-3 d-flex align-items-center justify-content-center ">
              <Button
                onClick={onClickLike}
                circle
                secondary
                medium
                leftIcon={isFavoriteAlbum ? <BsHeartFill /> : <BsHeart />}
              />
              {detail && (
                <TippyHeadless
                  visible={isShowOption}
                  interactive={true}
                  placement="right-end"
                  offset={[-200, 2]}
                  onClickOutside={() => setIsShowOption(false)}
                  onHide={() => setIsShowOption(false)}
                  appendTo={() => document.body}
                  render={(attrs) => (
                    <Wrapper {...attrs} tabIndex="-1" className="pb-3 pt-3 p-0">
                      <MenuItem
                        small
                        option
                        icon={<BsTextWrap />}
                        title="Thêm vào danh sách phát"
                      />
                      <MenuItem small option icon={<BsDownload />} title="Tải xuống" />
                      <MenuItem small option icon={<BsLink45Deg />} title="Sao chép link" />
                      <MenuItem small option icon={<BsArrowReturnRight />} title="Chia sẻ" />
                    </Wrapper>
                  )}
                >
                  <Tippy content="Khác">
                    <div>
                      <Button
                        circle
                        secondary
                        medium
                        leftIcon={<BsThreeDots />}
                        onClick={() => setIsShowOption(!isShowOption)}
                      />
                    </div>
                  </Tippy>
                </TippyHeadless>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

AlbumItem.propTypes = {
  data: PropTypes.object,
  small: PropTypes.bool,
  detail: PropTypes.bool,
  onClickLike: PropTypes.any,
};

export default memo(AlbumItem);
