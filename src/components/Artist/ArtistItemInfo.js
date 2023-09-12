import React from 'react';
import { fNumberWithUnits } from 'utils/formatNumber';

function ArtistItemInfo({ artist, small, followerCount }) {
  return (
    <div className="artist__info">
      <h3 className="artist__info-name">{artist.name}</h3>
      {!small && (
        <p className="artist__info-desc">
          {fNumberWithUnits(followerCount || artist.followers)} quan tâm
        </p>
      )}
    </div>
  );
}

export default ArtistItemInfo;
