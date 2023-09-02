import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';

import './Home.scss';
import Gallery from './Gallery';
import { Button, MediaItem, Helmet, AlbumList, Section } from 'components';
import { albumApi, genreApi, songApi } from 'api';

export default function HomePage() {
  const { currentUser } = useSelector((state) => state.user);
  const [songNewList, setSongNewList] = useState([]);
  const [songRankList, setSongRankList] = useState([]);

  const [albumList, setAlbumList] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [albumHistory, setAlbumHistory] = useState([]);

  const itemsPerColumn = 4;
  const columnCount = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [songsNew, songsRank, genres] = await Promise.all([
          songApi.getNew(12),
          songApi.getHot(3),
          genreApi.getQuery({ isHome: true }),
        ]);

        const genreIds = genres.map((item) => item._id).join(',');
        const requests = [];

        if (genreIds.length > 0) {
          requests.push(albumApi.getByGenreIds({ ids: genreIds }));
        }

        if (currentUser.historyAlbums.length > 0) {
          requests.push(
            albumApi.getByIds({
              ids: currentUser.historyAlbums.toString(),
              limit: 7,
            }),
          );
        }

        const [albumsResult, historyAlbumResult] = await Promise.all(requests);

        if (albumsResult) setAlbumList(albumsResult);
        if (historyAlbumResult) setAlbumHistory(historyAlbumResult);
        setSongNewList(songsNew);
        setSongRankList(songsRank);
        setGenreList(genres);
      } catch (error) {
        console.log('Lỗi! Đã xảy ra một lỗi. Vui lòng thử lại sau!', error);
      }
    };

    fetchData();
  }, [currentUser]);

  return (
    <Helmet title="Trang chủ">
      <Gallery />
      {albumHistory.length > 0 && (
        <Section title="Gần đây" to="/my-music/history/album" showAll={albumHistory.length >= 7}>
          <AlbumList albums={albumHistory} small />
        </Section>
      )}

      {/* New songs */}
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
          {Array.from({ length: columnCount }, (_, colIndex) => (
            <Col key={colIndex} sm={12} md={6} lg={4}>
              {songNewList
                .slice(colIndex * itemsPerColumn, (colIndex + 1) * itemsPerColumn)
                .map((item, index) => (
                  <MediaItem
                    key={index}
                    index={index}
                    tracks={songNewList}
                    data={item}
                    link
                    release
                  />
                ))}
            </Col>
          ))}
        </Row>
      </Section>

      {/* Album list */}
      {genreList.map((genre, index) => {
        const albums = albumList.filter((album) =>
          album.genres.some((genreItem) => genreItem._id === genre._id),
        );
        return (
          <Section key={index} title={genre.name}>
            <AlbumList albums={albums} />
          </Section>
        );
      })}

      {/* Rating */}
      <Section title="BXH Nhạc mới" to="/moi-phat-hanh">
        <Row className="g-custom">
          {songRankList.map((item, index) => (
            <Col key={index} xs={12} sm={4} md={6} lg={4}>
              <MediaItem tracks={songRankList} index={index} data={item} rank />
            </Col>
          ))}
        </Row>
      </Section>
    </Helmet>
  );
}
