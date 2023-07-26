import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';
import { memo } from 'react';
import {
  BsFillPauseFill,
  BsFillPlayFill,
  BsFillSkipEndFill,
  BsFillSkipStartFill,
  BsRepeat,
  BsShuffle,
} from 'react-icons/bs';

function Controls({
  repeat,
  shuffle,
  isPlaying,
  onClickPlayPause,
  onClickNextSong,
  onClickPrevSong,
  onClickShuffle,
  onClickRepeat,
}) {
  return (
    <div className="player-controls d-flex align-items-center justify-content-center">
      <Tippy content="Phát ngẫu nhiên">
        <div onClick={onClickShuffle} className={`player-control ${shuffle ? 'active' : ''} d-none-mobile`}>
          <BsShuffle />
        </div>
      </Tippy>
      <div onClick={onClickPrevSong} className="player-control large d-none-mobile">
        <BsFillSkipStartFill />
      </div>
      <div onClick={onClickPlayPause} className="player-control play">
        {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill className="player-control--play" />}
      </div>
      <div onClick={onClickNextSong} className="player-control large">
        <BsFillSkipEndFill />
      </div>
      <Tippy content="Phát lại">
        <div onClick={onClickRepeat} className={`player-control ${repeat ? 'active' : ''} d-none-mobile`}>
          <BsRepeat />
        </div>
      </Tippy>
    </div>
  );
}

Controls.propTypes = {
  repeat: PropTypes.bool,
  shuffle: PropTypes.bool,
  isPlaying: PropTypes.bool,
  onClickPlayPause: PropTypes.func,
  onClickNextSong: PropTypes.func,
  onClickPrevSong: PropTypes.func,
  onClickShuffle: PropTypes.func,
  onClickRepeat: PropTypes.func,
};

export default memo(Controls);
