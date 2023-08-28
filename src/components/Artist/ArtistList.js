import React from 'react';
import { Col, Row } from 'reactstrap';

import ArtistItem from './ArtistItem';
import './Artist.scss';
function ArtistList({ artists, small }) {
  const classes = small
    ? 'col-4 col-sm-3 col-md-2-4 col-lg-2'
    : 'col-6 col-sm-4 col-md-3 col-lg-2-4';

  return (
    <Row className="row-custom g-custom">
      {artists.map((artist, index) => (
        <Col key={index} className={classes}>
          <ArtistItem small={small} data={artist} />
        </Col>
      ))}
    </Row>
  );
}

ArtistList.propTypes = {};

export default ArtistList;
