import { useParams, NavLink } from 'react-router-dom';
import Helmet from 'components/Helmet';
import './History.scss';
import Title from 'components/Title';
import Tabs from 'components/Tabs';
import { Col, Row } from 'reactstrap';
import AlbumItem from 'components/Album';
import { useState } from 'react';
import { useEffect } from 'react';
import albumApi from 'api/albumApi';

function History() {
  const [albums, setAlbums] = useState([]);

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
    <Helmet title="Lịch sử">
      <div className="history">
        <div className="is-border-bottom d-flex align-items-center">
          <Title className="mb-0" small hideIcon name="Phát gần đây" />
          <div className="vertical-separator" />
          <Tabs
            uppercase
            tabs={[
              { id: 1, name: 'Bài hát' },
              { id: 2, name: 'Playlist' },
              { id: 3, name: 'MV' },
              { id: 4, name: 'Radio' },
              { id: 5, name: 'Podcast' },
            ]}
          />
        </div>
        <div className="history-content mt-4">
          <Row className="row-custom g-custom">
            {albums.map((item, index) => (
              <Col key={index} xs={6} sm={4} md={3} lg={'2-4'}>
                <AlbumItem data={item} small />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Helmet>
  );
}

export default History;