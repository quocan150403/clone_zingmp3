import { BsPlayFill } from 'react-icons/bs';
import { Col, Row } from 'reactstrap';

import Button from 'components/Button';
import { MediaItem } from 'components/Media';
import './ZingChart.scss';

function ZingChart() {
  return (
    <div className="zingchart mt-5 mb-5">
      <Row>
        <Col md={12} lg={12} xl={12}>
          <div className="d-flex align-items-center mb-5">
            <h3 className="zingchart__heading me-3">#zingchart</h3>
            <BsPlayFill className="zingchart__icon" />
          </div>
        </Col>
        <Col md={12} lg={12} xl={12}>
          {Array.from({ length: 5 }).map((item, index) => (
            <MediaItem key={index} index={index} media={item} full indexChart isBorderBottom />
          ))}
        </Col>
        <div className="text-center mt-5">
          <Button outline>Xem top 100</Button>
        </div>
      </Row>

      <Row>
        <Col md={12} lg={12} xl={12} className="mt-5 mb-5">
          <h3 className="zingchart__heading">Bảng xếp hạng tuần</h3>
        </Col>

        <Col md={12} lg={12} xl={12}>
          <Row className="g-5">
            <Col md={6} lg={6} xl={6}>
              <div className="p-3 is-bg-content rounded-5">
                <div className="d-flex align-items-center mb-2">
                  <h3 className="zingchart__heading fs-2 ms-5 me-2">Việt Nam</h3>
                  <BsPlayFill className="zingchart__icon fs-1" />
                </div>
                <div>
                  {Array.from({ length: 5 }).map((item, index) => (
                    <MediaItem key={index} index={index} indexChart media={item} />
                  ))}
                </div>
                <div className="text-center mt-4">
                  <Button outline>Xem top 100</Button>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6} xl={6}>
              <div className="p-3 is-bg-content rounded-5">
                <div className="d-flex align-items-center mb-2">
                  <h3 className="zingchart__heading fs-2 ms-5 me-2">Quốc tế</h3>
                  <BsPlayFill className="zingchart__icon fs-1" />
                </div>
                <div>
                  {Array.from({ length: 5 }).map((item, index) => (
                    <MediaItem key={index} index={index} indexChart media={item} />
                  ))}
                </div>
                <div className="text-center mt-4">
                  <Button outline>Xem top 100</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ZingChart;
