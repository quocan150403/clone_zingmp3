import PropTypes from 'prop-types';
import { useState, useCallback, memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'tippy.js/dist/tippy.css'; // optional

import { nextSong, prevSong, playPause } from 'app/features/playerSlide';
import Controls from './Controls';
import SeekBar from './SeekBar';
import Options from './Options';
import Track from './Track';
import Background from './Background';
import Audio from './Audio';
import './Player.scss';

function Player({ isShowQueue, onChangeIsShowQueue }) {
  const { tracks, currentSong, currentIndex, isPlaying } = useSelector((state) => state.player);
  const [songProgress, setSongProgress] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(40);

  const [muted, setMuted] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  const [isShowPlayerPopper, setIsShowPlayerPopper] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setMuted(volume === 0);
  }, [volume]);

  const handlePlayPause = useCallback(() => {
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  }, [dispatch, isPlaying]);

  const handleNextSong = useCallback(() => {
    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % tracks.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * tracks.length)));
    }
  }, [currentIndex, dispatch, shuffle, tracks.length]);

  const handlePrevSong = useCallback(() => {
    if (currentIndex === 0) {
      dispatch(prevSong(tracks.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * tracks.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  }, [currentIndex, dispatch, shuffle, tracks.length]);

  return (
    tracks.length > 0 && (
      <div className={`player ${isShowPlayerPopper ? 'player-popper' : ''}`}>
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

            <SeekBar min={0} max={duration} value={songProgress} duration={duration} onChangeSeekTime={setSeekTime} />
          </div>
        </div>

        <Options
          muted={muted}
          volume={volume}
          isShowQueue={isShowQueue}
          onClickShowQueue={onChangeIsShowQueue}
          onClickToggleBackground={setIsShowPlayerPopper}
          onChangeVolume={setVolume}
          onClickToggleMuted={setMuted}
        />

        <Background
          image_url={currentSong.image_url}
          isShowPlayerPopper={isShowPlayerPopper}
          onClickToggleBackground={setIsShowPlayerPopper}
        />
      </div>
    )
  );
}

Player.propTypes = {
  handleShowQueue: PropTypes.func,
};

export default memo(Player);