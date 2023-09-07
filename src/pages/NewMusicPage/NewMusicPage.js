import { useState, useEffect, useRef } from 'react';
import { Col, Row } from 'reactstrap';

import { MediaItem, Title, Helmet, Button } from 'components';
import { songApi } from 'api';

export default function NewMusicPage() {
  const [songs, setSongs] = useState([]);
  const [limit, setLimit] = useState(10);
  const [isFull, setIsFull] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const getSong = async () => {
      try {
        const response = await songApi.getNew(limit);
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
    <Helmet title="BXH Nhạc mới">
      <div ref={containerRef} className="mt-custom">
        <Title>BXH Nhạc mới</Title>
        <Row>
          <Col md={12} lg={12} xl={12}>
            {songs.map((item, index) => (
              <MediaItem
                full
                isBorder
                indexChart
                showAlbum
                tracks={songs}
                data={item}
                key={index}
                index={index}
                media={item}
              />
            ))}
          </Col>
          <div className="text-center mt-lg-5 my-4">
            <Button onClick={onClickShowAll} outline>
              {isFull ? 'Ẩn bớt' : 'Xem thêm'}
            </Button>
          </div>
        </Row>
      </div>
    </Helmet>
  );
}
