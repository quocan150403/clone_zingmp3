import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import Helmet from 'components/Helmet';
import images from 'assets/images';
import { AlbumItem } from 'components/Album';
import { MediaWrapper } from 'components/Media';
import './Detail.scss';

function Detail(props) {
  return (
    <Helmet title="Chi tiết">
      <div className="detail">
        <Row>
          <Col xs={3}>
            <AlbumItem data={images.playlist} detail />
          </Col>
          <Col xs={9}>
            <div>
              <MediaWrapper MediaList={Array.from({ length: 10 })} />
            </div>
          </Col>
        </Row>
      </div>
    </Helmet>
  );
}

Detail.propTypes = {};

export default Detail;
