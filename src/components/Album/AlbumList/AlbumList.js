import { memo } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import './AlbumList.scss';
import AlbumItem from '../AlbumItem/AlbumItem';
import AddBtn from './AddBtn';

function AlbumList({ albums, small, showAdd, onClickAdd, ...props }) {
  const classes = small
    ? 'col-4 col-sm-3 col-md-2-4 col-lg-1-7'
    : 'col-6 col-sm-4 col-md-3 col-lg-2-4';

  return (
    <Row className="row-custom g-custom">
      {showAdd && <AddBtn classes={classes} onClickAdd={onClickAdd} />}
      {albums.map((item, index) => (
        <Col key={index} className={classes}>
          <AlbumItem data={item} small={small} {...props} />
        </Col>
      ))}
    </Row>
  );
}

AlbumList.propTypes = {
  albums: PropTypes.array,
};

export default memo(AlbumList);
