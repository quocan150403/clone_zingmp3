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
} from 'react-icons/bs';
import images from 'assets/images';
import './MediaItem.scss';
import Tippy from '@tippyjs/react';
import Popper from 'components/Popper';
import Button from 'components/Button';
import { useState } from 'react';

function MediaItem({ media, index, full = false, indexChart = false, isBorderBottom = false }) {
  const [isShowOption, setIsShowOption] = useState(false);
  const handleClickOutside = () => {
    setIsShowOption(false);
    console.log('click outside');
  };

  const classes = `
    media__item
    ${indexChart && 'is-index-chart'}
    ${isBorderBottom && 'is-border-bottom'}
  `;

  return (
    <div className={classes}>
      <div className="media__item-left">
        {(full || indexChart) && (
          <div className="media__item-rank">
            <h2
              className={`
              ${index === 0 && 'is-outline--blue'}
              ${index === 1 && 'is-outline--green'}
              ${index === 2 && 'is-outline--red'}
              ${index > 2 && 'is-outline--text'}`}
            >
              {index + 1}
            </h2>
            <BsDashLg />
          </div>
        )}
        <div
          className="media__item-thumb me-3"
          style={{
            backgroundImage: `url(${images.song})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="media__item-animate">
            <div
              style={{
                backgroundImage: `url(${images.iconPlaying})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% center',
                backgroundSize: 'contain',
              }}
            ></div>
          </div>
          <div className="media__item-play">
            <BsPlayFill />
          </div>
        </div>
        <div className="media__item-info">
          <h4 className="media__item-title">Chưa Bao Giờ Em Quên</h4>
          <div className="media__item-description">
            <a href="/" className="is-ghost">
              Hương Ly
            </a>
          </div>
        </div>
      </div>
      {full && <span className="media__item-middle">05:11</span>}
      <div className="media__item-right">
        {full && (
          <span className="media__item-option">
            <BsFillMicFill />
          </span>
        )}
        <span className="media__item-option">
          <BsFillHeartFill />
        </span>
        <Tippy
          visible={isShowOption}
          interactive={true}
          placement="bottom-end"
          onClickOutside={handleClickOutside}
          render={(attrs) => (
            <div {...attrs} tabIndex="-1" className="media__item-popper">
              <Popper className="pb-3 p-0">
                <div className="p-4 pb-0 d-flex align-items-center">
                  <img src={images.song} alt="" className="me-3 rounded is-40x40" />
                  <div className="d-flex flex-column">
                    <h4 className="media__item-title">Chưa Bao Giờ Em Quên</h4>
                    <div className="d-flex gap-3 media__item-description">
                      <span>
                        <BsHeart /> 207k
                      </span>
                      <span>
                        <BsHeadphones /> 207k
                      </span>
                    </div>
                  </div>
                </div>
                <div className="m-4 pb-0 mb-3 mt-4 d-flex align-items-center justify-content-center g-3 media__popper-group">
                  <div className="d-flex w-100 flex-column justify-content-center align-items-center media__popper-item">
                    <BsDownload />
                    Tải xuống
                  </div>
                  <div className="d-flex w-100 flex-column justify-content-center align-items-center media__popper-item">
                    <BsMusicNoteList />
                    Lời bài hát
                  </div>
                  <div className="d-flex w-100 flex-column justify-content-center align-items-center media__popper-item">
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
              </Popper>
            </div>
          )}
        >
          <span
            className="media__item-option"
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
