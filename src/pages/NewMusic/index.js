import Helmet from 'components/Helmet';
import Title from 'components/Title';
import { MediaItem } from 'components/Media';
import './NewMusic.scss';
import { Col, Row } from 'reactstrap';
import { useState } from 'react';
import { songApi } from 'api';
import { useEffect } from 'react';

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
        <Title name="BXH Nhạc mới" />
        <Row>
          <Col md={12} lg={12} xl={12}>
            {songs.map((item, index) => (
              <MediaItem data={item} key={index} index={index} media={item} full showOption indexChart isBorder />
            ))}
          </Col>
        </Row>
      </div>
    </Helmet>
  );
}

export default NewMusic;
