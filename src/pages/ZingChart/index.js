import { BsPlayFill } from 'react-icons/bs';
import { Col, Row } from 'reactstrap';

import Button from 'components/Button';
import { MediaItem } from 'components/Media';
import './ZingChart.scss';
import Title from 'components/Title';

function ZingChart() {
  return (
    <div className="zingchart mt-custom">
      <Row>
        <Col md={12} lg={12} xl={12}>
          <Title name="#zingchart" />
        </Col>
        <Col md={12} lg={12} xl={12}>
          {Array.from({ length: 5 }).map((item, index) => (
            <MediaItem key={index} index={index} media={item} full showOption indexChart isBorder />
          ))}
        </Col>
        <div className="text-center mt-5">
          <Button outline>Xem top 100</Button>
        </div>
      </Row>

      <Row>
        <Col md={12} lg={12} xl={12} className="mt-5 mb-5">
          <Title name="Bảng xếp hạng tuần" hideIcon />
        </Col>

        <Col md={12} lg={12} xl={12}>
          <Row className="g-5">
            <Col md={6} lg={6} xl={6}>
              <div className="p-3 pt-4 pb-4 is-bg-content rounded-5">
                <Title sub small name="Việt Nam" className="mb-3 ms-5" />
                <div>
                  {Array.from({ length: 5 }).map((item, index) => (
                    <MediaItem key={index} index={index} grow indexChart media={item} />
                  ))}
                </div>
                <div className="text-center mt-4">
                  <Button outline>Xem top 100</Button>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6} xl={6}>
              <div className="p-3 pt-4 pb-4 is-bg-content rounded-5">
                <Title sub small name="Quốc tế" className="mb-3 ms-5" />
                <div>
                  {Array.from({ length: 5 }).map((item, index) => (
                    <MediaItem key={index} index={index} grow indexChart media={item} />
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
