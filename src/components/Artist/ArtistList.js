import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import ArtistItem from './ArtistItem';
import './Artist.scss';
function ArtistList({ artists }) {
  return (
    <Row className="row-custom g-custom">
      {artists.map((artist, index) => (
        <Col key={index} className="col-6 col-sm-4 col-md-3 col-lg-2-4">
          <ArtistItem data={artist} />
        </Col>
      ))}
    </Row>
  );
}

ArtistList.propTypes = {};

export default ArtistList;
