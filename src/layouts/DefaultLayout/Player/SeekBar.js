import PropTypes from 'prop-types';
import { useMemo, useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

function SeekBar({ value, duration, min = 0, max = 100, onChangeSeekTime }) {
  const getTime = useMemo(() => (time) => `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`, []);
  const getProgress = useMemo(() => (value, duration) => (value / duration) * 100, []);

  return (
    <div className="d-flex align-items-center justify-content-center player-duration d-none-mobile">
      <span className="player-duration__time">{value === 0 ? '00:00' : getTime(value)}</span>

      <div className="player-progress player-progress__main">
        <input
          title="duration"
          type="range"
          step="1"
          min={min}
          max={max}
          value={value}
          onInput={(event) => onChangeSeekTime(Number(event.target.value))}
          className="player-progress__input"
        />
        <div className="player-progress__track">
          <div
            className="player-progress__update"
            style={{
              width: `${getProgress(value, duration)}%`,
            }}
          />
        </div>
      </div>
      <span className="player-duration__time"> {duration === 0 ? '00:00' : getTime(duration)}</span>
    </div>
  );
}

SeekBar.propTypes = {
  value: PropTypes.number,
  duration: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChangeSeekTime: PropTypes.func,
};

export default SeekBar;
