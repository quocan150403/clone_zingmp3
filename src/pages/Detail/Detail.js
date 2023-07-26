import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

import { AlbumItem, MediaList, Helmet } from 'components';
import './Detail.scss';
import { songApi, albumApi } from 'api';

function Detail() {
  const { slug } = useParams();
  const [album, setAlbum] = useState();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      try {
        if (!slug) return;
        const response = await albumApi.getBySlug(slug);
        const { _id } = response;
        const responseSong = await songApi.getQuery({ albumId: _id });
        setAlbum(response);
        setSongs(responseSong);
      } catch (error) {
        console.log(error);
      }
    };
    getAlbums();
  }, [slug]);

  return (
    <Helmet title="Chi tiết">
      <div className="detail mt-custom">
        <Row>
          <Col xs={12} lg={4} xl={3}>
            <AlbumItem data={album} detail />
          </Col>
          <Col xs={12} lg={8} xl={9}>
            <div>
              <MediaList mediaList={songs} />
            </div>
          </Col>
        </Row>
      </div>
    </Helmet>
  );
}

Detail.propTypes = {};

export default Detail;
