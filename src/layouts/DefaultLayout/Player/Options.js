import { memo } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import { BsMic, BsMusicNoteList, BsVolumeMute, BsVolumeUp } from 'react-icons/bs';

function Options({
  muted,
  volume,
  isShowQueue,
  onClickShowQueue,
  onChangeVolume,
  onClickToggleBackground,
  onClickToggleMuted,
}) {
  const handleClickToggleMuted = () => {
    onClickToggleMuted(!muted);
  };

  return (
    <div className="player-right d-none-mobile">
      <div className="d-flex align-items-center justify-content-end">
        {/* <Tippy content="MV">
          <div className="player-right__btn">
            <BsBadge4K />
          </div>
        </Tippy> */}
        <Tippy content="Xem lời bài hát">
          <div onClick={() => onClickToggleBackground(true)} className="player-right__btn">
            <BsMic />
          </div>
        </Tippy>
        <div className="player-right__volume">
          <div onClick={handleClickToggleMuted} className="player-right__btn large">
            {muted ? <BsVolumeMute /> : <BsVolumeUp />}
          </div>
          <div className="player-right__block">
            <div className="player-progress">
              <input
                title="volume"
                type="range"
                value={volume}
                step="1"
                min="0"
                max="100"
                className="player-progress__input"
                onChange={(e) => onChangeVolume(Number(e.target.value))}
              />
              <div className="player-progress__track">
                {muted || (
                  <div
                    className="player-progress__update"
                    style={{
                      width: `${volume}%`,
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="player-right__divide"></div>
        <Tippy content="Danh sách phát">
          <div
            onClick={() => onClickShowQueue(!isShowQueue)}
            className={`player-right__btn  is-bg-content rounded-2  ${isShowQueue ? 'active' : ''}`}
          >
            <BsMusicNoteList />
          </div>
        </Tippy>
      </div>
    </div>
  );
}

Options.propTypes = {
  muted: PropTypes.bool,
  isShowQueue: PropTypes.bool,
  volume: PropTypes.number,
  onClickShowQueue: PropTypes.func,
  onChangeVolume: PropTypes.func,
  onClickToggleBackground: PropTypes.func,
  onClickToggleMuted: PropTypes.func,
};

export default memo(Options);
