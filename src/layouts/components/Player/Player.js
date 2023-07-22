import PropTypes from 'prop-types';
import { useState } from 'react';
import 'tippy.js/dist/tippy.css'; // optional
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { nextSong, prevSong, playPause } from 'app/features/playerSlide';
import Queue from '../Queue';
import Controls from './Controls';
import SeekBar from './SeekBar';
import Options from './Options';
import Track from './Track';
import Background from './Background';
import Audio from './Audio';
import './Player.scss';

function Player() {
  const { tracks, currentSong, currentIndex, isPlaying } = useSelector((state) => state.player);
  const [songProgress, setSongProgress] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(40);

  const [muted, setMuted] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  const [isShowQueue, setIsShowQueue] = useState(false);
  const [isShowPlayerPopper, setIsShowPlayerPopper] = useState(false);
  const dispatch = useDispatch();

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % tracks.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * tracks.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(tracks.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * tracks.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };

  // console.log(isPlaying, repeat, shuffle);

  const classes = classNames('player', {
    'player-popper': isShowPlayerPopper,
  });

  return (
    <>
      {tracks.length && (
        <div className={classes}>
          <Audio
            muted={muted}
            volume={volume}
            repeat={repeat}
            seekTime={seekTime}
            isPlaying={isPlaying}
            currentSong={currentSong}
            onTimeUpdate={(event) => setSongProgress(event.target.currentTime)}
            onLoadedData={(event) => setDuration(event.target.duration)}
            onEnded={handleNextSong}
          />
          <Track currentSong={currentSong} />

          <div className="player-middle">
            <div className="d-flex flex-column align-items-center">
              <Controls
                isPlaying={isPlaying}
                repeat={repeat}
                shuffle={shuffle}
                onClickPlayPause={handlePlayPause}
                onClickNextSong={handleNextSong}
                onClickPrevSong={handlePrevSong}
                onClickRepeat={() => setRepeat(!repeat)}
                onClickShuffle={() => setShuffle(!shuffle)}
              />

              <SeekBar
                min={0}
                max={duration}
                value={songProgress}
                duration={duration}
                onInput={(event) => setSeekTime(event.target.value)}
                onChangeSeekTime={setSeekTime}
              />
            </div>
          </div>

          <Options
            muted={muted}
            volume={volume}
            isShowQueue={isShowQueue}
            onClickShowQueue={setIsShowQueue}
            onClickToggleBackground={setIsShowPlayerPopper}
            onChangeVolume={setVolume}
            onClickToggleMuted={setMuted}
          />
        </div>
      )}

      <Queue isShowQueue={isShowQueue} />
      <Background
        image_url={currentSong.image_url}
        isShowPlayerPopper={isShowPlayerPopper}
        onClickToggleBackground={setIsShowPlayerPopper}
      />
    </>
  );
}

Player.propTypes = {
  handleShowQueue: PropTypes.func,
};

export default Player;
