import React from 'react';
import PropTypes from 'prop-types';
import { MediaItem } from 'components/Media';

function Track({ currentSong }) {
  return <div className="player-left">{<MediaItem data={currentSong} link ignore isPlayer />}</div>;
}

Track.propTypes = {
  currentSong: PropTypes.object,
};

export default Track;
