import {
  BsFillHeartFill,
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
  BsBookmarkPlus,
  BsChevronRight,
  BsShare,
  BsPlusLg,
  BsLink,
  BsMusicNoteBeamed,
} from 'react-icons/bs';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import classNames from 'classnames';

import Wrapper from 'components/Wrapper';
import Button from 'components/Button';
import images from 'assets/images';

import './Media.scss';

function MediaItem({
  media,
  large,
  index = '',
  checkbox = false,
  full = false,
  indexChart = false,
  isBorderBottom = false,
  ignore = false,
}) {
  const [isShowOption, setIsShowOption] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClickOutside = () => {
    setIsShowOption(false);
  };

  const classes = classNames('media-item', {
    checked,
    'is-index-chart': indexChart,
    'is-border-bottom': isBorderBottom,
    'is-large': large,
    'is-ignore': ignore,
    'is-checkbox': checkbox,
    'is-full': full,
  });

  const classNameRank = classNames({
    'is-outline--blue': index === 0,
    'is-outline--green': index === 1,
    'is-outline--red': index === 2,
    'is-outline--text': index > 2,
  });

  return (
    <div className={classes}>
      <div className="media-left">
        {full && indexChart && (
          <div className="media-left__rank">
            <h2 className={classNameRank}>{index + 1}</h2>
            <BsDashLg />
          </div>
        )}
        {checkbox && (
          <div className="media-left__box">
            <div className="media-checkbox">
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                className="media-checkbox__input"
                onChange={() => setChecked(!checked)}
              />
              <label className="media-checkbox__label" htmlFor={`checkbox-${index}`} />
            </div>
            <BsMusicNoteBeamed className="media-left__music" />
          </div>
        )}
        <div className="media-left__wrapper me-3">
          <img className="media-left__image" src={images.song} alt="" />
          <div className="media-left__overlay" />
          <div className="media-left__icon media-left__icon--play">
            <BsPlayFill />
          </div>
          <div className="media-left__icon media-left__icon--playing">
            <img src={images.iconPlaying} alt="" />
          </div>
        </div>
        <div className="media-left__info">
          <h4 className="media-title">Chưa Bao Giờ Em Quên</h4>
          <div className="media-description">
            <a href="/">Hương Ly</a>
          </div>
        </div>
      </div>
      {full && <span className="media-middle">05:11</span>}
      <div className="media-right">
        {full && (
          <span className="media-right__option">
            <BsFillMicFill />
          </span>
        )}
        <span className="media-right__option">
          <BsFillHeartFill />
        </span>
        <Tippy
          visible={isShowOption}
          interactive={true}
          placement="top-start"
          onClickOutside={handleClickOutside}
          render={(attrs) => (
            <div {...attrs} tabIndex="-1" className="media-right__wrapper">
              <Wrapper className="pb-3 p-0">
                <div className="p-4 pb-0 d-flex align-items-center">
                  <img src={images.song} alt="" className="me-3 rounded is-40x40" />
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
                <div className="m-4 pb-0 mb-3 mt-4 d-flex align-items-center justify-content-center g-3 media-popper__group">
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

                <Button option leftIcon={<BsBookmarkPlus />}>
                  Thêm vào danh sách phát
                </Button>
                <Button option leftIcon={<BsPlusLg />}>
                  Phát tiếp theo
                </Button>
                <Button option leftIcon={<BsPlusCircle />}>
                  Thêm vào playlist
                </Button>
                <Button option leftIcon={<BsLink />}>
                  Sao chép link
                </Button>
                <Button option leftIcon={<BsShare />} linkIcon={<BsChevronRight />}>
                  Chia sẻ
                </Button>
              </Wrapper>
            </div>
          )}
        >
          <span
            className="media-right__option"
            onClick={() => {
              setIsShowOption(!isShowOption);
              console.log('click');
            }}
          >
            <BsThreeDots />
          </span>
        </Tippy>
      </div>
    </div>
  );
}

export default MediaItem;
