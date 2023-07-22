import Helmet from 'components/Helmet';
import { Top100Banner } from 'components/Icons';
import Section from 'components/Section';
import './Top100.scss';
import { Col, Row } from 'reactstrap';
import AlbumItem from 'components/Album';
import { useState } from 'react';
import { useEffect } from 'react';
import albumApi from 'api/albumApi';

const albums = Array.from({ length: 4 });

function Top100() {
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

export default Top100;
