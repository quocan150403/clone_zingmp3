import React from 'react';
import { Row } from 'reactstrap';
import './Album.scss';
import AlbumItem from './AlbumItem';

function AlbumList({ albumList = [] }) {
  return (
    <Row className="row row-cols-5 g-5">
      {albumList.map((album, index) => (
        <AlbumItem key={index} data={album} />
      ))}
    </Row>
  );
}

export default AlbumList;
