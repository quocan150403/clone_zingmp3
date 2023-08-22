import { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';

import { Helmet, Section, AlbumItem } from 'components';
import { Top100Banner } from 'components/Icons';
import { albumApi } from 'api';

export default function Top100() {
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
    <Helmet title="Top 100">
      <div className="top100">
        <div className="mb-5 text-center">
          <Top100Banner />
        </div>
        <Section className="pt-5" title="Nổi bật">
          <Row>
            {albums.map((item, index) => (
              <Col key={index}>
                <AlbumItem data={item} small />
              </Col>
            ))}
          </Row>
        </Section>

        <Section title="Nhạc Việt">
          <Row>
            {albums.map((item, index) => (
              <Col key={index}>
                <AlbumItem data={item} small />
              </Col>
            ))}
          </Row>
        </Section>
      </div>
    </Helmet>
  );
}
