import React from 'react';
import { BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ArtistItemImage = ({ artist, small }) => {
  return (
    <Link to={`/artist/${artist.slug}`} className="artist__image">
      <div className="artist__image-img">
        <img src={artist.imageUrl} alt={artist.name} />
        <div className="artist__image-overlay"></div>
        {!small && (
          <span className="artist__image-icon">
            <BsShuffle />
          </span>
        )}
      </div>

      {small && (
        <span className="artist__image-play">
          <BsFillPlayFill />
        </span>
      )}
    </Link>
  );
};

export default ArtistItemImage;
