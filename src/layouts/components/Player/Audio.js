import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function Audio({ muted, isPlaying, volume, repeat, seekTime, currentSong, onTimeUpdate, onLoadedData, onEnded }) {
  const audioRef = useRef(null);

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [currentSong, isPlaying]);

  useEffect(() => {
    audioRef.current.currentTime = seekTime;
  }, [seekTime]);

  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);

  return (
    <audio
      muted={muted}
      ref={audioRef}
      src={currentSong?.audio_url}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
      loop={repeat}
      onEnded={onEnded}
    />
  );
}

Audio.propTypes = {
  mute: PropTypes.bool,
  isPlaying: PropTypes.bool,
  repeat: PropTypes.bool,
  seekTime: PropTypes.number,
  currentSong: PropTypes.object,
  onTimeUpdate: PropTypes.func,
  onLoadedData: PropTypes.func,
  onEnded: PropTypes.func,
};

export default Audio;
