import { Link } from 'react-router-dom';
import React from 'react';

function SearchCard({ data, isAlbum }) {
  return (
    <Link to={`/${isAlbum ? 'album' : 'artist'}/${data.slug}`} className="search-card">
      <div className="search-card__img">
        <img
          style={isAlbum ? { borderRadius: '4px' } : { borderRadius: '50%' }}
          src={data.imageUrl}
          alt={data.name}
        />
      </div>
      <div className="search-card__info">
        <h3 className="search-card__name">{data.name}</h3>
        <p className="search-card__desc">
          {isAlbum ? 'Album' : data.roles.map((item) => item).join(' - ')} •&nbsp;
          {isAlbum
            ? data.artists.map((item) => item.name).join(', ')
            : `${data.followers} người theo dõi`}
        </p>
      </div>
    </Link>
  );
}

export default SearchCard;
