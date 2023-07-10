import Helmet from 'components/Helmet';
import Title from 'components/Title';
import { MediaItem } from 'components/Media';
import './NewMusic.scss';
import { Col, Row } from 'reactstrap';
function NewMusic() {
  return (
    <Helmet title="BXH Nhạc mới">
      <div className="mt-custom">
        <Title name="BXH Nhạc mới" />
        <Row>
          <Col md={12} lg={12} xl={12}>
            {Array.from({ length: 100 }).map((item, index) => (
              <MediaItem key={index} index={index} media={item} full showOption indexChart isBorder />
            ))}
          </Col>
        </Row>
      </div>
    </Helmet>
  );
}

export default NewMusic;
