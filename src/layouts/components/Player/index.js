import {
  BsBadge4K,
  BsFillPlayFill,
  BsFillSkipEndFill,
  BsFillSkipStartFill,
  BsMic,
  BsMusicNoteList,
  BsRepeat,
  BsShuffle,
  BsVolumeMute,
  BsVolumeUp,
} from 'react-icons/bs';
import { useState } from 'react';

import MediaItem from 'components/Media/MediaItem';
import './Player.scss';

function Player({ handleShowQueue }) {
  const [value, setValue] = useState(0);
  const [volume, setVolume] = useState(50);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnChangeVolume = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div className="player d-flex align-items-center justify-content-between">
      <div className="player-left">
        <MediaItem large ignore />
      </div>
      <div className="player-middle">
        <div className="d-flex flex-column align-items-center">
          <div className="mb-2 d-flex align-items-center justify-content-center">
            <div className="player-middle__control">
              <BsShuffle />
            </div>
            <div className="player-middle__control large">
              <BsFillSkipStartFill />
            </div>
            <div className="player-middle__control play">
              <BsFillPlayFill />
            </div>
            <div className="player-middle__control large">
              <BsFillSkipEndFill />
            </div>
            <div className="player-middle__control ">
              <BsRepeat />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center player-duration">
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
      <div className="player-right">
        <div className="d-flex align-items-center justify-content-end">
          <div className="player-right__btn">
            <BsBadge4K />
          </div>
          <div className="player-right__btn">
            <BsMic />
          </div>
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
          <div onClick={handleShowQueue} className="player-right__btn is-bg-content rounded-2">
            <BsMusicNoteList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
