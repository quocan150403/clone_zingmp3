import { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';

import Helmet from 'components/Helmet';
import Title from 'components/Title';
import Section from 'components/Section';
import images from 'assets/images';
import RadioItem from 'components/RadioItem';
import AlbumItem from 'components/AlbumItem';
import albumApi from 'api/albumApi';

function Radio() {
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
    <Helmet title="Radio">
      <div className="radio mt-custom">
        <Title name="Radio" hideIcon />

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

export default Radio;
