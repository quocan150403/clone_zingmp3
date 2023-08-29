import { memo } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import './Album.scss';
import AlbumItem from './AlbumItem';
import { BsPlusCircle } from 'react-icons/bs';

function AlbumList({ albums, small, showAdd, onClickAdd, ...props }) {
  let classes = 'col-6 col-sm-4 col-md-3 col-lg-2-4';
  if (small) {
    classes = 'col-4 col-sm-3 col-md-2-4 col-lg-1-7';
  }

  return (
    <Row className="row-custom g-custom">
      {showAdd && (
        <Col className={classes}>
          <div
            className="album-list__add w-100 h-100 d-flex flex-column align-items-center justify-content-center"
            onClick={onClickAdd}
          >
            <BsPlusCircle />
            <p className="mt-3">Tạo playlist mới</p>
          </div>
        </Col>
      )}
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
