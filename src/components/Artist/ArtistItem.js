import { Link } from 'react-router-dom';
import React from 'react';
import { BsPersonAdd, BsShuffle } from 'react-icons/bs';

import { Button } from 'components';
const BACKEND_URL = process.env.REACT_APP_API_URL;

export default function ArtistItem({ data }) {
  return (
    <div className="artist-item">
      <Link to="/" className="artist-item__img">
        <img src={`${BACKEND_URL}${data.thumbnail_url}`} alt={data.name} />
        <div className="artist-item__overlay"></div>
        <span className="artist-item__icon">
          <BsShuffle />
        </span>
      </Link>
      <div className="artist-item__info">
        <h3 className="artist-item__name">{data.name}</h3>
        <p className="artist-item__desc">21K quan tâm</p>
        <Button uppercase className="px-4" primary medium leftIcon={<BsPersonAdd />}>
          Quan tâm
        </Button>
      </div>
    </div>
  );
}
