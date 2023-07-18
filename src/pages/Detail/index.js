import { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';

import Helmet from 'components/Helmet';
import AlbumItem from 'components/AlbumItem';
import { MediaWrapper } from 'components/Media';
import './Detail.scss';
import albumApi from 'api/albumApi';
import { songApi } from 'api';

function Detail() {
  const [albums, setAlbums] = useState([]);
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

  useEffect(() => {
    const getAlbum = async () => {
      try {
        const response = await albumApi.getQuery();
        setAlbums(response);
      } catch (error) {
        console.log(error);
      }
    };
    getAlbum();
  }, []);

  return (
    <Helmet title="Chi tiết">
      <div className="detail mt-custom">
        <Row>
          <Col xs={12} lg={4} xl={3}>
            <AlbumItem data={albums} detail />
          </Col>
          <Col xs={12} lg={8} xl={9}>
            <div>
              <MediaWrapper MediaList={songs} />
            </div>
          </Col>
        </Row>
      </div>
    </Helmet>
  );
}

Detail.propTypes = {};

export default Detail;
