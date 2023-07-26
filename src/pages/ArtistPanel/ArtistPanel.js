import React from 'react';
import PropTypes from 'prop-types';
import './ArtistPanel.scss';
import ArtistInfo from './ArtistInfo';

function ArtistPanel(props) {
  return (
    <div className="artist-panel">
      <ArtistInfo />
    </div>
  );
}

ArtistPanel.propTypes = {};

export default ArtistPanel;
