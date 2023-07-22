import { Col, Row } from 'reactstrap';

import Helmet from 'components/Helmet';
import Section from 'components/Section';
import Button from 'components/Button';
import { MediaWrapper } from 'components/Media';
import Title from 'components/Title';
import Tabs from 'components/Tabs';
import AlbumItem from 'components/Album';
import './Library.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import albumApi from 'api/albumApi';
import { songApi } from 'api';

const albumList = Array.from({ length: 10 });
const TABS = [
  {
    id: 1,
    name: 'Bài Hát',
    to: '/bai-hat',
  },
  {
    id: 2,
    name: 'Podcast',
    to: '/podcast',
  },
  {
    id: 3,
    name: 'Album',
    to: '/album',
  },
  {
    id: 4,
    name: 'MV',
    to: '/mv',
  },
];

const myArray = Array.from({ length: 5 });

function Library() {
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

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
    <Helmet title="Thư Viện">
      <div className="library mt-custom">
        <Title name="Thư viện" />

        <Section title="Album hot ">
          <Row className="row-custom  g-custom">
            {albums.map((item, index) => (
              <Col key={index} xs={6} sm={4} md={3} lg={'2-4'}>
                <AlbumItem data={item} small />
              </Col>
            ))}
          </Row>
        </Section>

        <div className="div mt-5 mb-5">
          <Tabs tabs={TABS} uppercase isBorderBottom />
          <div className="mt-4">
            <div className="d-flex align-items-center mb-4">
              <Button medium uppercase primary>
                Yêu thích
              </Button>
              <Button medium uppercase outline>
                Đã tải lên
              </Button>
            </div>
            <MediaWrapper MediaList={songs} />
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default Library;
