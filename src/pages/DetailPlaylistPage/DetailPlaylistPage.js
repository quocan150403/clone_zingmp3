import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

import './DetailPlaylistPage.scss';
import { AlbumItem, MediaList, Helmet, Section, ArtistList, AlbumList, Button } from 'components';
import { albumApi, playlistApi, songApi } from 'api';
import { BsArrowRepeat, BsPen, BsPlayFill, BsThreeDots } from 'react-icons/bs';
import images from 'assets/images';

export default function DetailAlbumPage() {
  const { slug } = useParams();
  const [playlist, setPlaylist] = useState({});
  const [albumRelate, setAlbumRelate] = useState([]);
  const [songList, setSongList] = useState([]);
  const [songRelateList, setSongRelateList] = useState([]);
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await playlistApi.getBySlug(slug);
        const { _id, tracks } = response;
        const resSongRelate = await songApi.getHot(10);
        if (tracks.length) {
          const resSong = await songApi.getByIds({ ids: tracks.join(',') });

          setSongList(tracks);
        }
        setSongRelateList(resSongRelate);
        // albumApi.
        // const [responseSong, responseAlbumRelate] = await Promise.all([
        //   songApi.getQuery({ albumId: _id }),
        //   albumApi.getByArtistIds({ ids: albumIds, limit: 6 }),
        // ]);

        // setArtistList(artists);
        // setAlbum(response);
        // setSongList(responseSong);
        // setAlbumRelate(responseAlbumRelate.filter((album) => album._id !== _id));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <Helmet title="Chi tiết">
      <div className="mt-custom">
        <Row className="mb-5">
          <Col xs={12} lg={4} xl={3}>
            <div className="playlist-detail">
              <div className="playlist-detail__thumb">
                <img src={playlist.imageUrl || images.playlist.image} alt="" />
              </div>
              <div className="playlist-detail__inner">
                <div className="mt-3 mb-1 d-flex align-items-center justify-content-center">
                  <h2 className="playlist-detail__title">Mới</h2>
                  <span className="ms-3  playlist-detail__edit">
                    <BsPen />
                  </span>
                </div>
                <p className="playlist-detail__description">Tạo bởi Quốc An</p>
                <p className="playlist-detail__description">Công khai</p>
                <Button className="mt-3" primary uppercase leftIcon={<BsPlayFill />}>
                  Phát tất cả
                </Button>
                <div className="mt-3">
                  <Button circle secondary medium leftIcon={<BsThreeDots />} />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={8} xl={9}>
            <div>
              <MediaList mediaList={songList} />
              <div className="mt-4 mb-4 d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column">
                  <h2 className="playlist-detail__title">Bài Hát Gợi Ý</h2>
                  <p className="playlist-detail__subtitle">
                    Dựa trên các bài hát trong playlist này
                  </p>
                </div>
                <Button className="mt-3" small primary uppercase leftIcon={<BsArrowRepeat />}>
                  Làm mới
                </Button>
              </div>
              <MediaList mediaList={songRelateList} />
            </div>
          </Col>
        </Row>

        {/* <Section title="Nghệ sĩ tham gia">
          {artistList && <ArtistList artists={artistList} />}
        </Section>

        <Section title="Có thể bạn sẽ thích">
          <AlbumList albums={albumRelate} />
        </Section> */}
      </div>
    </Helmet>
  );
}
