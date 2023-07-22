import { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';

import images from 'assets/images';
import { Button, MediaItem, Helmet, AlbumList, Section } from 'components';
import { albumApi, songApi } from 'api';
import './Home.scss';

function Home() {
  const [albums, setAlbums] = useState([]);
  // const [slides, setSlides] = useState([]);
  const [songs, setSongs] = useState([]);

  // Fetch song
  // useEffect(() => {
  //   const getSong = async () => {
  //     try {
  //       const response = await songApi.getQuery();
  //       setSongs(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getSong();
  // }, []);

  // // Fetch slide
  // useEffect(() => {
  //   const getSlide = async () => {
  //     try {
  //       const response = await galleryApi.getQuery();
  //       setSlides(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getSlide();
  // }, []);

  console.log('render');

  // Fetch albums
  // useEffect(() => {
  //   const getAlbum = async () => {
  //     try {
  //       const response = await albumApi.getQuery();
  //       setAlbums(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getAlbum();
  // }, []);

  return (
    <Helmet title="Trang chủ">
      {/* <Gallery galleries={slides} /> */}
      {/* 
      <Section title="Gần đây" to={`/recently`}>
        <AlbumList albums={albums} small />
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
              <MediaItem tracks={songs} data={item} release key={index} />
            ))}
          </Col>
          <Col sm={12} md={6} lg={4}>
            {songs.map((item, index) => (
              <MediaItem tracks={songs} data={item} release key={index} />
            ))}
          </Col>
          <Col sm={12} md={6} lg={4}>
            {songs.map((item, index) => (
              <MediaItem tracks={songs} data={item} release key={index} />
            ))}
          </Col>
        </Row>
      </Section>

      <Section title="Có thể bạn muốn nghe">
        <AlbumList albums={albums} />
      </Section>

      <Section title="Hè chill nhạc phiêu">
        <AlbumList albums={albums} />
      </Section>

      <Section title="Hè chill nhạc phiêu">
        <AlbumList albums={albums} />
      </Section>

      <Section title="Lo gì xoã đi">
        <AlbumList albums={albums} />
      </Section>

      <Section title="Lo gì xoã đi">
        <AlbumList albums={albums} />
      </Section>

      <Section
        info={{
          image: images.playlist.image,
          name: 'Dành cho fan',
          singer: 'Hương Ly',
        }}
      >
        <AlbumList albums={albums} />
      </Section>

      <Section title="BXH Nhạc mới" to="/top100">
        <Row className="g-custom">
          {songs.map((item, index) => (
            <Col key={index} xs={12} sm={4} md={6} lg={4}>
              <MediaItem tracks={songs} data={item} rank />
            </Col>
          ))}
        </Row>
      </Section> */}

      {/* <section className="mb-5">
        <Row className="row-cols-3 g-custom row-custom">
          {Array.from({ length: 3 }).map((item, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={4}>
              <CardItem image={images.label.image} />
            </Col>
          ))}
        </Row>
      </section> */}
      {/* 
      <Section title="Top 100" to="/top100">
        <AlbumList albums={albums} />
      </Section>

      <Section
        info={{
          image: images.playlist.image,
          name: 'Bạn đã nghe nhiều',
          singer: 'Nhạc hàn',
        }}
      >
        <AlbumList albums={albums} />
      </Section>

      <Section title="Album hot ">
        <AlbumList albums={albums} />
      </Section> */}
      {/* 
      <Section title="Radio nổi bật" to="/radio">
        <RadioList radios={albums} />
      </Section> */}
    </Helmet>
  );
}

export default Home;
