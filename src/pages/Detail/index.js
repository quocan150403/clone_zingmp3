import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import Helmet from 'components/Helmet';
import images from 'assets/images';
import AlbumItem from 'components/AlbumItem';
import { MediaWrapper } from 'components/Media';
import './Detail.scss';

const myArray = Array.from({ length: 4 });

function Detail(props) {
  return (
    <Helmet title="Chi tiết">
      <div className="detail mt-custom">
        <Row>
          <Col xs={12} lg={4} xl={3}>
            <AlbumItem data={images.playlist} detail />
          </Col>
          <Col xs={12} lg={8} xl={9}>
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
