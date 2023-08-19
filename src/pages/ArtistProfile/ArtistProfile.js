import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsPersonAdd } from 'react-icons/bs';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

import './ArtistProfile.scss';
import { artistApi, songApi, albumApi } from 'api';
import { AlbumItem, AlbumList, Button, Helmet, MediaItem, Section, Title } from 'components';

function Artist() {
  const { slug } = useParams();
  const [artist, setArtist] = useState({});
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (slug)
      (async () => {
        try {
          const resArtist = await artistApi.getBySlug(slug);
          const { _id } = resArtist;
          const resSongs = await songApi.getQuery({ artistId: _id });
          const resAlbums = await albumApi.getQuery({ artistId: _id });
          const newSongs = resSongs.slice(0, 3);
          setSongs(newSongs);
          setArtist(resArtist);
          setAlbums(resAlbums);
          console.log(resArtist);
        } catch (error) {
          console.log(error);
        }
      })();
  }, [slug]);

  return (
    <Helmet title={artist.name}>
      <div className="artist mt-custom">
        <section className="artist-hero d-flex">
          <div className="artist-hero__img">
            <img src={artist.imageUrl} alt="" />
          </div>
          <div className=" d-flex flex-column">
            <Title className="mb-3" large primary>
              {artist.name}
            </Title>
            <div className="artist-hero__info d-flex align-items-center">
              <p>{artist.followers} người theo dõi</p>
              <Button uppercase className="px-4" outline medium leftIcon={<BsPersonAdd />}>
                Quan tâm
              </Button>
            </div>
          </div>
        </section>

        <section className="artist-content">
          <Row>
            <Col sm="4" md="4" lg="4">
              <Section title="Mới phát hành">
                <AlbumItem isArtist data={albums[0]} />
              </Section>
            </Col>
            <Col sm="8" md="8" lg="8">
              <Section title="Bài hát nổi bật" to="/">
                <Row>
                  <Col sm="6" md="6" lg="6">
                    {songs.map((item, index) => (
                      <MediaItem tracks={songs} data={item} key={index} />
                    ))}
                  </Col>
                  <Col sm="6" md="6" lg="6">
                    {songs.map((item, index) => (
                      <MediaItem tracks={songs} data={item} key={index} />
                    ))}
                  </Col>
                </Row>
              </Section>
            </Col>
          </Row>

          <Section className="mt-5" title="Có thể bạn muốn nghe">
            <AlbumList albums={albums} />
          </Section>

          <Row>
            <Col sm={10}>
              <Section title="Về nghệ sĩ">
                <Row className="g-5">
                  <Col sm="6" md="6" lg="6">
                    <div className="artist-description__img">
                      <img src={artist.imageUrl} alt="" />
                    </div>
                  </Col>
                  <Col sm="6" md="6" lg="6">
                    <div className="d-flex flex-column">
                      <p>
                        Bắt đầu hoạt động âm nhạc từ năm 2018 với bài hát đầu tiên là "Chuyện Người
                        Anh Thương". Sau đó thì tiếp tục viết và trực tiếp thể hiện những ca khúc
                        của mình. Những sản phẩm tiếp theo có thể kể đến như "Mưa Ơi Đừng Buồn",
                        "Chẳng Thể Với Lấy" ...
                        {artist?.description}
                      </p>
                      <div className="d-flex flex-column artist-description__follow">
                        <h2>{artist.followers}</h2>
                        <p>Người quan tâm</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Section>
            </Col>
          </Row>
        </section>
      </div>
    </Helmet>
  );
}

Artist.propTypes = {};

export default Artist;
