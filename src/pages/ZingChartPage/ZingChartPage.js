import { useState, useEffect, useRef } from 'react';
import { Col, Row } from 'reactstrap';

import { MediaItem, Title, Button, Helmet } from 'components';
import { songApi } from 'api';

export default function ZingChartPage() {
  const [songs, setSongs] = useState([]);
  const [limit, setLimit] = useState(10);
  const [isFull, setIsFull] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const getSong = async () => {
      try {
        const response = await songApi.getHot(limit);
        setSongs(response);

        if (containerRef.current) {
          containerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log(error.response.data.error);
        } else {
          console.log('error! an error occurred. please try again later!');
        }
      }
    };
    getSong();
  }, [limit]);

  const onClickShowAll = () => {
    setLimit(isFull ? 10 : 100);
    setIsFull(!isFull);
  };

  return (
    <Helmet title="ZingChart">
      <div ref={containerRef} className="zingchart mt-custom">
        <Row>
          <Col md={12} lg={12} xl={12}>
            <Title>#zingchart</Title>
          </Col>
          <Col md={12} lg={12} xl={12}>
            {songs.map((item, index) => (
              <MediaItem
                full
                isBorder
                indexChart
                showAlbum
                key={index}
                index={index}
                data={item}
                tracks={songs}
              />
            ))}
          </Col>
          <div className="text-center mt-5">
            <Button onClick={onClickShowAll} outline>
              {isFull ? 'Ẩn bớt' : 'Xem thêm'}
            </Button>
          </div>
        </Row>

        {/* <Row>
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
                        grow
                        indexChart
                        key={index}
                        index={index}
                        tracks={songs}
                        data={item}
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
        </Row> */}
      </div>
    </Helmet>
  );
}
