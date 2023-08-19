import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import './Artist.scss';

function ArtistCardItem({ data }) {
  return (
    <Link to="/" className="artist-card">
      <div className="artist-card__img">
        <img src={data.imageUrl} alt={data.name} />
      </div>
      <div className="artist-card__info">
        <h3 className="artist-card__name">{data.name}</h3>
        <p className="artist-card__desc">Ca sĩ • 2,5 triệu người theo dõi</p>
      </div>
    </Link>
  );
}

ArtistCardItem.propTypes = {};

export default ArtistCardItem;
