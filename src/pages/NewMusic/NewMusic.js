import { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';

import './NewMusic.scss';
import { MediaItem, Title, Helmet } from 'components';
import { songApi } from 'api';

function NewMusic() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSong = async () => {
      try {
        const response = await songApi.getQuery();
        setSongs(response);
      } catch (error) {
        console.log(error);
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
              <MediaItem tracks={songs} data={item} key={index} index={index} media={item} indexChart isBorder />
            ))}
          </Col>
        </Row>
      </div>
    </Helmet>
  );
}

export default NewMusic;
