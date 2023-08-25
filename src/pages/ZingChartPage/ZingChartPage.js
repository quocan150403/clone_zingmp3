import { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';

import { MediaItem, Title, Button } from 'components';
import { songApi } from 'api';

export default function ZingChartPage() {
  const [songs, setSongs] = useState([]);

  // Fetch song
  useEffect(() => {
    const getSong = async () => {
      try {
        const response = await songApi.getHot(10);
        setSongs(response);
      } catch (error) {
        console.log(error);
      }
    };
    getSong();
  }, []);

  return (
    <div className="zingchart mt-custom">
      <Row>
        <Col md={12} lg={12} xl={12}>
          <Title>#zingchart</Title>
        </Col>
        <Col md={12} lg={12} xl={12}>
          {songs.map((item, index) => (
            <MediaItem
              tracks={songs}
              showAlbum
              data={item}
              key={index}
              index={index}
              media={item}
              full
              indexChart
              isBorder
            />
          ))}
        </Col>
        <div className="text-center mt-5">
          <Button outline>Xem top 100</Button>
        </div>
      </Row>

      <Row>
        <Col md={12} lg={12} xl={12} className="mt-5 mb-5">
          <Title hideIcon>Bảng xếp hạng tuần</Title>
        </Col>

        <Col md={12} lg={12} xl={12}>
          <Row className="g-5">
            <Col md={6} lg={6} xl={6}>
              <div className="p-3 pt-4 pb-4 is-bg-content rounded-5">
                <Title sub small className="mb-3 ms-5">
                  Việt Nam
                </Title>
                <div>
                  {songs.map((item, index) => (
                    <MediaItem
                      tracks={songs}
                      data={item}
                      key={index}
                      index={index}
                      grow
                      indexChart
                      media={item}
                    />
                  ))}
                </div>
                <div className="text-center mt-4">
                  <Button outline>Xem top 100</Button>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6} xl={6}>
              <div className="p-3 pt-4 pb-4 is-bg-content rounded-5">
                <Title sub small className="mb-3 ms-5">
                  Quốc tế
                </Title>
                <div>
                  {songs.map((item, index) => (
                    <MediaItem
                      tracks={songs}
                      data={item}
                      key={index}
                      index={index}
                      grow
                      indexChart
                      media={item}
                    />
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