import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

import Helmet from 'components/Helmet';
import AlbumItem from 'components/Album';
import { MediaWrapper } from 'components/Media';
import './Detail.scss';
import albumApi from 'api/albumApi';
import { songApi } from 'api';

function Detail() {
  const { slug } = useParams();
  const [album, setAlbum] = useState();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const response = await albumApi.getBySlug(slug);
        setAlbum(response);
        const { _id } = response;
        const responseSong = await songApi.getQuery({ albumId: _id });
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
            {/* <AlbumItem data={album} detail /> */}
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
