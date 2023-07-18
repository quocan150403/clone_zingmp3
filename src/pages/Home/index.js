import { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';

import images from 'assets/images';
import Section from 'components/Section';
import Button from 'components/Button';
import { MediaItem } from 'components/Media';
import CardItem from 'components/CardItem';
import Helmet from 'components/Helmet';
import AlbumItem from 'components/AlbumItem';
import RadioItem from 'components/RadioItem';
import { albumApi, galleryApi, songApi } from 'api';
import './Home.scss';

function Home() {
  const [albums, setAlbums] = useState([]);
  const [slides, setSlides] = useState([]);
  const [songs, setSongs] = useState([]);

  // Fetch song
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

  // Fetch slide
  useEffect(() => {
    const getSlide = async () => {
      try {
        const response = await galleryApi.getQuery();
        setSlides(response);
      } catch (error) {
        console.log(error);
      }
    };
    getSlide();
  }, []);

  // Fetch albums
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
    <Helmet title="Trang chủ">
      {/* <div className="row">
        <div className="col-12">
          <div className="row explore__slide--container">
            <div className="explore__slide-move">
              <div className="slide__move-btn btn--prev">
                <i className="bi bi-chevron-left"></i>
              </div>
              <div className="slide__move-btn btn--next">
                <i className="bi bi-chevron-right"></i>
              </div>
            </div>
            {images.slide.map((item, index) => (
              <div
                key={index}
                className={`
                        col-lg-4 col-md-4 col-6 explore__slide-item
                        ${index === 0 && 'first next'}
                        ${index === 1 && 'second'}
                        ${index === 2 && 'third'}
                        ${index === 3 && 'fourth'}
                        ${index > 3 && index < images.slide.length - 1 && 'fifth'}
                        ${index === images.slide.length - 1 && 'sixth prev'}
                        `}
              >
                <div className="row__item-display">
                  <div
                    className="explore__slide-img row__item-img img--rec"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                      backgroundSize: 'cover',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <Row>
        {slides.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={4}>
            <CardItem image={item.image_url} />
          </Col>
        ))}
      </Row>

      <Section title="Gần đây" to={`/recently`}>
        <Row className="row-custom g-custom">
          {albums.map((item, index) => (
            <Col key={index} xs={4} sm={3} md={'2-4'} lg={'1-7'}>
              <AlbumItem data={item} small />
            </Col>
          ))}
        </Row>
      </Section>

      <Section title="Mới phát hành" to={`/new-release`}>
        <div className="mb-4">
          <Button medium uppercase primary>
            Tất cả
          </Button>
          <Button medium uppercase outline>
            Việt Nam
          </Button>
          <Button medium uppercase outline>
            Quốc tế
          </Button>
        </div>
        <Row className="g-4 row-custom">
          <Col sm={12} md={6} lg={4}>
            {songs.map((item, index) => (
              <MediaItem data={item} release key={index} />
            ))}
          </Col>
          <Col sm={12} md={6} lg={4}>
            {songs.map((item, index) => (
              <MediaItem data={item} release key={index} />
            ))}
          </Col>
          <Col sm={12} md={6} lg={4}>
            {songs.map((item, index) => (
              <MediaItem data={item} release key={index} />
            ))}
          </Col>
        </Row>
      </Section>

      <Section title="Có thể bạn muốn nghe">
        <Row className="row-custom g-custom">
          {albums.map((item, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={'2-4'}>
              <AlbumItem data={item} small />
            </Col>
          ))}
        </Row>
      </Section>

      <Section title="Hè chill nhạc phiêu">
        <Row className="row-custom g-custom">
          {albums.map((item, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={'2-4'}>
              <AlbumItem data={item} small />
            </Col>
          ))}
        </Row>
      </Section>

      <Section title="Hè chill nhạc phiêu">
        <Row className="row-custom  g-custom">
          {albums.map((item, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={'2-4'}>
              <AlbumItem data={item} small />
            </Col>
          ))}
        </Row>
      </Section>

      <Section title="Lo gì xoã đi">
        <Row className="row-custom g-custom">
          {albums.map((item, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={'2-4'}>
              <AlbumItem data={item} small />
            </Col>
          ))}
        </Row>
      </Section>

      <Section title="Lo gì xoã đi">
        <Row className="row-custom g-custom">
          {albums.map((item, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={'2-4'}>
              <AlbumItem data={item} small />
            </Col>
          ))}
        </Row>
      </Section>

      <Section
        info={{
          image: images.playlist.image,
          name: 'Dành cho fan',
          singer: 'Hương Ly',
        }}
      >
        <Row className="row-custom g-custom">
          {albums.map((item, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={'2-4'}>
              <AlbumItem data={item} small />
            </Col>
          ))}
        </Row>
      </Section>

      <Section title="BXH Nhạc mới" to="/top100">
        <Row className="g-custom">
          {songs.map((item, index) => (
            <Col key={index} xs={12} sm={4} md={6} lg={4}>
              <MediaItem data={item} rank />
            </Col>
          ))}
        </Row>
      </Section>

      <section className="mb-5">
        <Row className="row-cols-3 g-custom row-custom">
          {Array.from({ length: 3 }).map((item, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={4}>
              <CardItem image={images.label.image} />
            </Col>
          ))}
        </Row>
      </section>

      <Section title="Top 100" to="/top100">
        <Row className="row-custom  g-custom">
          {albums.map((item, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={'2-4'}>
              <AlbumItem data={item} small />
            </Col>
          ))}
        </Row>
      </Section>

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

      <Section title="Radio nổi bật" to="/radio">
        <Row className="row-custom g-custom">
          {albums.map((item, index) => (
            <Col key={index} xs={4} sm={3} md={'2-4'} lg={'1-7'}>
              <RadioItem small />
            </Col>
          ))}
        </Row>
      </Section>
    </Helmet>
  );
}

export default Home;
