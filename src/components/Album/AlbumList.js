import { memo } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import './Album.scss';
import AlbumItem from './AlbumItem';

function AlbumList({ albums, small }) {
  let classes = 'col-6 col-sm-4 col-md-3 col-lg-2-4';
  if (small) {
    classes = 'col-4 col-sm-3 col-md-2-4 col-lg-1-7';
  }

  return (
    <Row className="row-custom g-custom">
      {albums.map((item, index) => (
        <Col key={index} className={classes}>
          <AlbumItem data={item} small={small} />
        </Col>
      ))}
    </Row>
  );
}

AlbumList.propTypes = {
  albums: PropTypes.array,
};

export default memo(AlbumList);
