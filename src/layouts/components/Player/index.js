import {
  BsArrowsAngleExpand,
  BsBadge4K,
  BsChevronDown,
  BsFillPlayFill,
  BsFillSkipEndFill,
  BsFillSkipStartFill,
  BsGear,
  BsMic,
  BsMusicNoteList,
  BsRepeat,
  BsShuffle,
  BsVolumeMute,
  BsVolumeUp,
} from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import MediaItem from 'components/Media/MediaItem';
import './Player.scss';
import Queue from '../Queue';
import Button from 'components/Button';

function Player() {
  const [value, setValue] = useState(0);
  const [volume, setVolume] = useState(50);

  const [isShowQueue, setIsShowQueue] = useState(false);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnChangeVolume = (e) => {
    setVolume(e.target.value);
  };

  return (
    <>
      <div className="player d-flex align-items-center justify-content-between">
        <div className="player-left">
          <MediaItem isPlayer ignore />
        </div>
        <div className="player-middle">
          <div className="d-flex flex-column align-items-center">
            <div className="player-controls d-flex align-items-center justify-content-center">
              <Tippy content="Phát ngẫu nhiên">
                <div className="player-control d-none-mobile">
                  <BsShuffle />
                </div>
              </Tippy>
              <div>
                <div className="player-control large d-none-mobile">
                  <BsFillSkipStartFill />
                </div>
              </div>
              <div className="player-control play">
                <BsFillPlayFill />
              </div>
              <div className="player-control large">
                <BsFillSkipEndFill />
              </div>
              <Tippy content="Phát lại">
                <div className="player-control d-none-mobile">
                  <BsRepeat />
                </div>
              </Tippy>
            </div>
            <div className="d-flex align-items-center justify-content-center player-duration d-none-mobile">
              <span className="player-duration__time">00:00</span>
              <div className="player-duration__process">
                <input type="range" min="0" max="100" value={value} onChange={(e) => handleOnChange(e)} />
                <span
                  style={{
                    width: `${value}%`,
                  }}
                />
              </div>
              <span className="player-duration__time">04:30</span>
            </div>
          </div>
        </div>
        <div className="player-right d-none-mobile">
          <div className="d-flex align-items-center justify-content-end">
            <Tippy content="MV">
              <div className="player-right__btn">
                <BsBadge4K />
              </div>
            </Tippy>
            <Tippy content="Xem lời bài hát">
              <div className="player-right__btn">
                <BsMic />
              </div>
            </Tippy>
            <div className="player-right__btn large">
              <BsVolumeUp />
              {/* <BsVolumeMute /> */}
            </div>
            <div className="player-right__volume">
              <input type="range" min="0" max="100" value={volume} onChange={(e) => handleOnChangeVolume(e)} />
              <span
                style={{
                  width: `${volume}%`,
                }}
              />
            </div>
            <div className="player-right__divide"></div>
            <Tippy content="Danh sách phát">
              <div onClick={() => setIsShowQueue(!isShowQueue)} className="player-right__btn is-bg-content rounded-2">
                <BsMusicNoteList />
              </div>
            </Tippy>
          </div>
        </div>
      </div>
      <Queue isShowQueue={isShowQueue} />
      {/* <div className="player-background">
        <div className="player-background__header d-flex align-items-center justify-content-between">
          <div className="player-background__left"></div>
          <div className="player-background__middle"></div>
          <div className="player-background__right">
            <Button circle secondary leftIcon={<BsArrowsAngleExpand />} />
            <Button circle secondary leftIcon={<BsGear />} />
            <Button circle secondary leftIcon={<BsChevronDown />} />
          </div>
        </div>
        <div className="player-background__content"></div>
      </div> */}
    </>
  );
}

Player.propTypes = {
  handleShowQueue: PropTypes.func,
};

export default Player;
