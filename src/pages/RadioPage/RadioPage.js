import { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';

import { Helmet, Title, Section, RadioItem, AlbumItem } from 'components';
import images from 'assets/images';
import { albumApi } from 'api';

export default function RadioPage() {
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
    <Helmet title="Radio">
      <div className="radio mt-custom">
        <Title hideIcon>Radio</Title>

        <Section title="Radio nổi bật" to="/radio">
          <Row className="row-custom g-custom">
            {albums.map((item, index) => (
              <Col key={index} xs={4} sm={3} md={'2-4'} lg={'1-7'}>
                <RadioItem small />
              </Col>
            ))}
          </Row>
        </Section>

        {/* <Section title="podcast">
          <Row className="row-custom g-custom">
            {Array.from({ length: 5 }).map((item, index) => (
              <Col key={index} xs={6} sm={4} md={3} lg={'2-4'}>
                <CardItem image={images.podcast} key={index} to="/podcast" />
              </Col>
            ))}
          </Row>
        </Section> */}

        <Section
          info={{
            image: images.playlist.image,
            name: 'Bạn đã nghe nhiều',
            singer: 'Nhạc hàn',
          }}
        >
          <Row className="row-custom  g-custom">
            {albums.map((item, index) => (
              <Col key={index} xs={6} sm={4} md={3} lg={'2-4'}>
                <AlbumItem data={item} small />
              </Col>
            ))}
          </Row>
        </Section>

        <Section title="Album hot ">
          <Row className="row-custom  g-custom">
            {albums.map((item, index) => (
              <Col key={index} xs={6} sm={4} md={3} lg={'2-4'}>
                <AlbumItem data={item} small />
              </Col>
            ))}
          </Row>
        </Section>
      </div>
    </Helmet>
  );
}
