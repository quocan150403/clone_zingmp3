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
  BsMusicNoteBeamed,
  BsTextWrap,
  BsCollectionPlay,
  BsArrowReturnRight,
  BsLink45Deg,
  BsFillHeartbreakFill,
  BsThreeDotsVertical,
} from 'react-icons/bs';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Wrapper from 'components/Wrapper';
import images from 'assets/images';
import MenuItem from 'components/Wrapper/Menu';
import './Media.scss';

function MediaItem({
  media,
  release,
  rank,
  primary,
  singer,
  grow,
  isPlayer,
  full = false,
  ignore = false,
  index = 0,
  checkbox = false,
  indexChart = false,
  isBorder = false,
  showOption = false,
  responsive = false,
  arrayCheck = [],
  handleCheck,
}) {
  const [isShowOption, setIsShowOption] = useState(false);
  const mediaRef = useRef();

  const classes = classNames('media-item', {
    checked: arrayCheck.includes(index),
    rank,
    release,
    primary,
    grow,
    ignore,
    checkbox,
    full,
    singer,
    responsive,
    'show-option': showOption,
    'is-player': isPlayer,
    'is-border': isBorder,
  });

  const classNameIndex = classNames('media-left__order', {
    'outline--blue': index === 0,
    'outline--green': index === 1,
    'outline--red': index === 2,
    'outline--text': index > 2,
  });

  return (
    <div ref={mediaRef} className={classes}>
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
              <h2 className="media-title">
                Chưa Bao Giờ Em Quên Chưa Chưa Bao Giờ Em Quên Chưa Chưa Bao Giờ Em Quên Chưa
              </h2>
              <div className="media-description">
                <a href="/">Hương Ly, </a>
                <a href="/">Hương Ly, </a>
                <a href="/">Hương Ly </a>
              </div>
              {release && <div className="media-description media-left__release">3 giờ trước</div>}
            </div>
            {rank && (
              <div className="media-left__rank">
                <span className="media-left__order media-left__order--secondary">#1</span>
                <span className="media-left__day">28.06.2023</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {full && <span className="media-middle">05:11</span>}
      {!rank && (
        <div className="media-right">
          {full && (
            <Tippy content="Phát cùng lời bài hát">
              <span className="media-right__option">
                <BsFillMicFill />
              </span>
            </Tippy>
          )}
          <Tippy content="Thêm vào thư viện">
            <span className="media-right__option media-right__option--heart">
              <BsHeart />
            </span>
          </Tippy>

          <TippyHeadless
            visible={isShowOption}
            interactive={true}
            placement="auto"
            onClickOutside={() => setIsShowOption(false)}
            onHide={() => setIsShowOption(false)}
            appendTo={mediaRef && mediaRef.current}
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
                  <MenuItem small option icon={<BsTextWrap />} title="Thêm vào danh sách phát" />
                  <MenuItem small option icon={<BsCollectionPlay />} title="Phát tiếp theo" />
                  <MenuItem small option icon={<BsPlusCircle />} title="Thêm vào playlist" />
                  <MenuItem small option icon={<BsLink45Deg />} title="Sao chép link" />
                  <MenuItem small option icon={<BsArrowReturnRight />} title="Chia sẻ" />
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
