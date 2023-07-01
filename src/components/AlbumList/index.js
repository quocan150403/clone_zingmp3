import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import AlbumItem from './AlbumItem';
import './Album.scss';

function AlbumList({ albumList = [], ...props }) {
  return (
    <Row className="g-5 row-cols-5">
      {albumList.map((album, index) => (
        <Col key={index} xs="12" md="6" className={props.isCol7 ? 'custom-column-7' : 'custom-column-5'}>
          <AlbumItem props={props} data={album} />
        </Col>
      ))}
    </Row>
  );
}

AlbumList.propTypes = {
  albumList: PropTypes.array,
  isCol7: PropTypes.bool,
};

export default AlbumList;
