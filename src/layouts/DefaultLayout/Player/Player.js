import PropTypes from 'prop-types';
import { useState, useCallback, memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'tippy.js/dist/tippy.css'; // optional

import { nextSong, prevSong, playPause } from 'app/features/playerSlice';
import Controls from './Controls';
import SeekBar from './SeekBar';
import Options from './Options';
import Track from './Track';
import Background from './Background';
import Audio from './Audio';
import './Player.scss';
import { userApi } from 'api';
import { updateUserField } from 'app/features/userSlice';

function Player({ isShowQueue, onChangeIsShowQueue }) {
  const { tracks, currentSong, currentIndex, isPlaying } = useSelector((state) => state.player);
  const { currentUser } = useSelector((state) => state.user);
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

  const handleNextSong = useCallback(async () => {
    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % tracks.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * tracks.length)));
    }
    if (currentUser._id) {
      const { field, value } = await userApi.createHistorySong(currentUser._id, currentSong._id);
      dispatch(updateUserField({ field, value }));
    }
  }, [currentIndex, dispatch, shuffle, tracks.length]);

  const handlePrevSong = useCallback(async () => {
    if (currentIndex === 0) {
      dispatch(prevSong(tracks.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * tracks.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
    if (currentUser._id) {
      const { field, value } = await userApi.createHistorySong(currentUser._id, currentSong._id);
      dispatch(updateUserField({ field, value }));
    }
  }, [currentIndex, dispatch, shuffle, tracks.length]);

  return (
    tracks.length > 0 && (
      <>
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

              <SeekBar
                min={0}
                max={duration}
                value={songProgress}
                duration={duration}
                onChangeSeekTime={setSeekTime}
              />
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
        </div>
        <Background
          imageUrl={currentSong.imageUrl}
          isShowPlayerPopper={isShowPlayerPopper}
          onClickToggleBackground={setIsShowPlayerPopper}
        />
      </>
    )
  );
}

Player.propTypes = {
  handleShowQueue: PropTypes.func,
};

export default memo(Player);
