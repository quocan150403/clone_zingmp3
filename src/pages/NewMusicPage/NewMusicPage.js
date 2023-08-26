import { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';

import { MediaItem, Title, Helmet } from 'components';
import { songApi } from 'api';

export default function NewMusicPage() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSong = async () => {
      try {
        const response = await songApi.getNew(10);
        setSongs(response);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log(error.response.data.error);
        } else {
          console.log('error! an error occurred. please try again later!');
        }
      }
    };
    getSong();
  }, []);

  return (
    <Helmet title="BXH Nhạc mới">
      <div className="mt-custom">
        <Title>BXH Nhạc mới</Title>
        <Row>
          <Col md={12} lg={12} xl={12}>
            {songs.map((item, index) => (
              <MediaItem
                tracks={songs}
                data={item}
                key={index}
                index={index}
                media={item}
                indexChart
                isBorder
              />
            ))}
          </Col>
        </Row>
      </div>
    </Helmet>
  );
}
