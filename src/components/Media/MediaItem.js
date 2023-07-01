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
  BsChevronRight,
  BsMusicNoteBeamed,
  BsTextWrap,
  BsCollectionPlay,
  BsArrowReturnRight,
  BsLink45Deg,
} from 'react-icons/bs';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import classNames from 'classnames';

import Wrapper from 'components/Wrapper';
import Button from 'components/Button';
import images from 'assets/images';
import './Media.scss';

function MediaItem({
  media,
  release,
  rank,
  primary,
  singer,
  small,
  large,
  full = false,
  ignore = false,
  index = 0,
  checkbox = false,
  indexChart = false,
  isBorder = false,
  arrayCheck = [],
  handleCheck,
}) {
  const [isShowOption, setIsShowOption] = useState(false);

  const classes = classNames('media-item', {
    checked: arrayCheck.includes(index),
    rank,
    release,
    primary,
    large,
    small,
    ignore,
    checkbox,
    full,
    'is-border': isBorder,
  });

  const classNameIndex = classNames('media-left__order', {
    'outline--blue': index === 0,
    'outline--green': index === 1,
    'outline--red': index === 2,
    'outline--text': index > 2,
  });

  return (
    <div className={classes}>
      <div className="media-left">
        {indexChart && (
          <div className="media-left__index">
            <h2 className={classNameIndex}>{index + 1}</h2>
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
                checked={arrayCheck.includes(index)}
                onChange={() => handleCheck(index)}
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
        <div className="media-left__content">
          <div className="media-left__info">
            <h4 className="media-title">
              Chưa Bao Giờ Em Quên Chưa Chưa Bao Giờ Em Quên Chưa Chưa Bao Giờ Em Quên Chưa
            </h4>
            <div className="media-description">
              <a href="/">Hương Ly, </a>
              <a href="/">Hương Ly, </a>
              <a href="/">Hương Ly, </a>
              <a href="/">Hương Ly, </a>
            </div>
            <div className="media-description media-left__release">3 giờ trước</div>
          </div>
          {rank && (
            <div className="media-left__rank">
              <span className="media-left__order media-left__order--secondary">#1</span>
              <span className="media-left__day">28.06.2023</span>
            </div>
          )}
        </div>
      </div>
      {full && <span className="media-middle">05:11</span>}
      {!rank && (
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
            placement="bottom-end"
            onClickOutside={() => setIsShowOption(false)}
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

                  <Button option leftIcon={<BsTextWrap />}>
                    Thêm vào danh sách phát
                  </Button>
                  <Button option leftIcon={<BsCollectionPlay />}>
                    Phát tiếp theo
                  </Button>
                  <Button option leftIcon={<BsPlusCircle />}>
                    Thêm vào playlist
                  </Button>
                  <Button option leftIcon={<BsLink45Deg />}>
                    Sao chép link
                  </Button>
                  <Button option leftIcon={<BsArrowReturnRight />} linkIcon={<BsChevronRight />}>
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
              }}
            >
              <BsThreeDots />
            </span>
          </Tippy>
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

export default MediaItem;
