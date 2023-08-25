import {
  BsFillMicFill,
  BsThreeDots,
  BsDashLg,
  BsPlayFill,
  BsPlusCircle,
  BsHeart,
  BsHeadphones,
  BsDownload,
  BsMusicNoteList,
  BsExclamationCircle,
  BsMusicNoteBeamed,
  BsTextWrap,
  BsCollectionPlay,
  BsArrowReturnRight,
  BsLink45Deg,
  BsThreeDotsVertical,
  BsPlusCircleDotted,
  BsTrash,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useDispatch, useSelector } from 'react-redux';
import { setSong, playPause } from 'app/features/playerSlide';
import { fRelativeTimeAgo, fDate, fMinutes } from 'utils/formatTime';

import './Media.scss';
import Wrapper from 'components/Wrapper';
import images from 'assets/images';
import MenuItem from 'components/Wrapper/MenuItem';

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
  checkbox = false,
  indexChart = false,
  isBorder = false,
  showAlbum = false,
  responsive = false,
  arrayCheck = [],
  isPlaylist,
  onAddPlaylist,
  onRemovePlaylist,
  handleCheck,
}) {
  const { currentSong, isActive, isPlaying } = useSelector((state) => state.player);
  const [isShowOption, setIsShowOption] = useState(false);
  const dispatch = useDispatch();

  const handleClickSong = () => {
    const isCurrentSong = currentSong._id === data._id;
    if (isCurrentSong) {
      isPlaying ? dispatch(playPause(false)) : dispatch(playPause(true));
    } else {
      dispatch(setSong({ tracks, song: data, i: index }));
      dispatch(playPause(true));
    }
  };

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

  const classes = classNames('media-item', {
    checked: arrayCheck.includes(index),
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

  const classNameIndex = classNames('media-left__order', {
    'outline--blue': index === 0,
    'outline--green': index === 1,
    'outline--red': index === 2,
    'outline--text': index > 2,
  });

  const Comp = link ? Link : 'h2';
  const to = link ? `/song/${data.slug}` : null;

  return (
    <div className={classes}>
      <div className="media-left">
        {indexChart && (
          <div className="media-left__index">
            <h2 className={classNameIndex}>{index + 1}</h2>
            <BsDashLg className="media-left__separator" />
          </div>
        )}
        {checkbox && (
          <div className="media-left__box">
            <div className="media-checkbox">
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                className="media-checkbox__input"
                checked={arrayCheck.includes(index)}
                onChange={() => handleCheck(index)}
              />
              <label className="media-checkbox__label" htmlFor={`checkbox-${index}`} />
            </div>
            <BsMusicNoteBeamed className="media-left__music" />
          </div>
        )}
        <div className="media-left__inner">
          <div onClick={handleClickSong} className="media-left__wrapper me-3">
            <img className="media-left__image" src={data.imageUrl} alt="" />
            <div className="media-left__overlay" />
            <div className="media-left__icon media-left__icon--play">
              <BsPlayFill />
            </div>
            <div className="media-left__icon media-left__icon--playing">
              <img src={images.iconPlaying} alt="" />
            </div>
          </div>
          <div className="media-left__content">
            <div className="media-left__info">
              <Comp to={to} className="media-title">
                {data.name}
              </Comp>
              <div className="media-description">
                {data.artists &&
                  data.artists.map((artist, index) => (
                    <Link key={index} to={`/artist/${artist.slug}`}>
                      {artist.name}
                    </Link>
                  ))}
              </div>
              {release && (
                <div className="media-description media-left__release">
                  {fRelativeTimeAgo(data.createdAt)}
                </div>
              )}
            </div>
            {rank && (
              <div className="media-left__rank">
                <span className="media-left__order media-left__order--secondary">#{index + 1}</span>
                <span className="media-left__day">{fDate(data.createdAt)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {showAlbum && (
        <span className="media-album">
          {data.albumId && <Link href={`/album/${data.albumId.slug}`}>{data.albumId.name}</Link>}
        </span>
      )}
      <span className="media-middle">{fMinutes(data.duration)}</span>
      {!rank && (
        <div className="media-right">
          {!isPlaylist && (
            <Tippy content="Phát cùng lời bài hát">
              <span className="media-right__option media-right__option--mic">
                <BsFillMicFill />
              </span>
            </Tippy>
          )}
          <Tippy content="Thêm vào thư viện">
            <span className="media-right__option media-right__option--heart">
              <BsHeart />
            </span>
          </Tippy>
          {isPlaylist && (
            <Tippy content="Thêm vào playlist">
              <span onClick={() => onAddPlaylist(data._id)} className="media-right__option">
                <BsPlusCircleDotted />
              </span>
            </Tippy>
          )}
          {!isPlaylist && (
            <TippyHeadless
              visible={isShowOption}
              interactive={true}
              placement="right-end"
              offset={[-350, 2]}
              onClickOutside={() => setIsShowOption(false)}
              onHide={() => setIsShowOption(false)}
              appendTo={() => document.body}
              render={(attrs) => (
                <div {...attrs} tabIndex="-1" className="media-right__wrapper">
                  <Wrapper className="pb-3 p-0">
                    <div className="p-3 pb-0 d-flex align-items-center">
                      <img src={data.imageUrl} alt="" className="me-3 rounded is-40x40" />
                      <div className="d-flex flex-column">
                        <h4 className="media-title">Chưa Bao Giờ Em Quên</h4>
                        <div className="d-flex gap-3 media-description">
                          <span>
                            <BsHeart /> 207k
                          </span>
                          <span>
                            <BsHeadphones /> 207k
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="m-3 pb-0 mb-2 mt-3 d-flex align-items-center justify-content-center g-3 media-popper__group">
                      <div className="d-flex w-100 flex-column justify-content-center align-items-center media-popper__item">
                        <BsDownload />
                        Tải xuống
                      </div>
                      <div className="d-flex w-100 flex-column justify-content-center align-items-center media-popper__item">
                        <BsMusicNoteList />
                        Lời bài hát
                      </div>
                      <div className="d-flex w-100 flex-column justify-content-center align-items-center media-popper__item">
                        <BsExclamationCircle />
                        Chặn
                      </div>
                    </div>
                    <MenuItem small option icon={<BsTextWrap />} title="Thêm vào danh sách phát" />
                    <MenuItem small option icon={<BsCollectionPlay />} title="Phát tiếp theo" />
                    <MenuItem small option icon={<BsPlusCircle />} title="Thêm vào playlist" />
                    <MenuItem small option icon={<BsLink45Deg />} title="Sao chép link" />
                    <MenuItem small option icon={<BsArrowReturnRight />} title="Chia sẻ" />
                    {onRemovePlaylist && (
                      <MenuItem
                        onClick={() => {
                          setIsShowOption(false);
                          onRemovePlaylist(data._id);
                        }}
                        small
                        option
                        icon={<BsTrash />}
                        title="Xóa khỏi playlist"
                      />
                    )}
                  </Wrapper>
                </div>
              )}
            >
              <Tippy content="Khác">
                <span
                  className="media-right__option media-right__option--more"
                  onClick={() => {
                    setIsShowOption(!isShowOption);
                  }}
                >
                  <BsThreeDots />
                  <BsThreeDotsVertical />
                </span>
              </Tippy>
            </TippyHeadless>
          )}
        </div>
      )}
    </div>
  );
}

MediaItem.propTypes = {
  media: PropTypes.object,
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
  arrayCheck: PropTypes.array,
  handleCheck: PropTypes.func,
};

export default memo(MediaItem);
