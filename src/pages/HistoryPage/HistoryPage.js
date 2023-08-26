import { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';

import { AlbumItem, Title, Tabs, Helmet } from 'components';
import albumApi from 'api/albumApi';

export default function HistoryPage() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getAlbum = async () => {
      try {
        const response = await albumApi.getQuery();
        setAlbums(response);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log(error.response.data.error);
        } else {
          console.log('error! an error occurred. please try again later!');
        }
      }
    };
    getAlbum();
  }, []);

  return (
    <Helmet title="Lịch sử">
      <div className="history">
        <div className="is-border-bottom d-flex align-items-center">
          <Title className="mb-0" small hideIcon>
            Phát gần đây
          </Title>
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
