import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsCheck2, BsPersonAdd } from 'react-icons/bs';
import { Col, Row } from 'reactstrap';
import { updateUserField } from 'app/features/userSlice';

import './DetailArtistPage.scss';
import { artistApi, songApi, albumApi, commonApi } from 'api';
import {
  AlbumItem,
  AlbumList,
  ArtistList,
  Button,
  Helmet,
  MediaItem,
  Section,
  Title,
} from 'components';
import { fNumberWithUnits } from 'utils/formatNumber';

export default function DetailArtistPage() {
  const { currentUser } = useSelector((state) => state.user);
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [artist, setArtist] = useState({});
  const [songList, setSongList] = useState([]);
  const [newAlbum, setNewAlbum] = useState({});
  const [hotAlbumList, setHotAlbumList] = useState([]);
  const [artistRelate, setArtistRelateList] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  const columnCount = 2;
  const itemsPerColumn = 3;

  useEffect(() => {
    if (slug)
      (async () => {
        try {
          const resArtist = await artistApi.getBySlug(slug);
          const { _id } = resArtist;
          const [resSongList, resNewAlbum, resHotAlbums] = await Promise.all([
            songApi.getByArtistId(_id, 6),
            albumApi.getByArtistId(_id, { limit: 1 }),
            albumApi.getByArtistId(_id, { limit: 5, sort: 'favorites' }),
          ]);
          setNewAlbum(resNewAlbum[0]);
          setArtist(resArtist);
          setSongList(resSongList);
          setHotAlbumList(resHotAlbums);

          const artistData = handleGetArtistsFromAlbums(resHotAlbums, _id);
          setArtistRelateList(artistData);
          if (currentUser && currentUser.followedArtists) {
            setIsFollowing(currentUser.followedArtists.includes(_id));
          }
        } catch (error) {
          console.log(error);
        }
      })();
  }, [slug, currentUser]);

  const handleGetArtistsFromAlbums = (albumList, idCurrent) => {
    const artistsRelate = [];

    albumList.forEach((album) => {
      album.artists.forEach((artist) => {
        if (artistsRelate.length >= 5) return artistsRelate;
        if (artist._id !== idCurrent && !artistsRelate.some((item) => item._id === artist._id)) {
          artistsRelate.push(artist);
        }
      });
    });

    return artistsRelate;
  };

  const handleFollowArtist = async () => {
    try {
      const result = await commonApi.toggleFollowerArtist(artist._id, currentUser._id);
      const { updatedFollowerCount, updatedFollowedArtists, isFollowing } = result;
      setArtist((prev) => ({ ...prev, followers: updatedFollowerCount }));
      dispatch(updateUserField({ field: 'followedArtists', value: updatedFollowedArtists }));
      setIsFollowing(isFollowing);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Helmet title={artist.stageName}>
      <div className="artist mt-custom">
        <section className="artist-hero d-flex">
          <div className="artist-hero__img">
            <img src={artist.imageUrl} alt="" />
          </div>
          <div className=" d-flex flex-column">
            <Title className="mb-3" large primary>
              {artist.stageName}
            </Title>
            <div className="artist-hero__info d-flex align-items-center">
              <p>{artist.followers && fNumberWithUnits(artist.followers)} người theo dõi</p>
              <Button
                onClick={handleFollowArtist}
                uppercase
                className="px-4"
                primary={isFollowing}
                outline={!isFollowing}
                medium
                leftIcon={isFollowing ? <BsCheck2 /> : <BsPersonAdd />}
              >
                {isFollowing ? 'Đã Quan tâm' : 'Quan tâm'}
              </Button>
            </div>
          </div>
        </section>

        <section className="artist-content">
          <Row>
            <Col sm="4" md="4" lg="4">
              <Section title="Mới phát hành">
                {newAlbum && <AlbumItem isArtist data={newAlbum} />}
              </Section>
            </Col>
            <Col sm="8" md="8" lg="8">
              <Section title="Bài hát nổi bật" to="/">
                <Row className="g-4 row-custom">
                  {Array.from({ length: columnCount }, (_, colIndex) => (
                    <Col key={colIndex} sm={12} md={6} lg={6}>
                      {songList
                        .slice(colIndex * itemsPerColumn, (colIndex + 1) * itemsPerColumn)
                        .map((item, index) => (
                          <MediaItem key={index} tracks={songList} isBorder data={item} />
                        ))}
                    </Col>
                  ))}
                </Row>
              </Section>
            </Col>
          </Row>

          <Section className="mt-5" title="Album đã tham gia">
            {hotAlbumList && <AlbumList albums={hotAlbumList} />}
          </Section>

          <Section title="Có thể bạn thích">
            {artistRelate && <ArtistList artists={artistRelate} />}
          </Section>

          {/* <Row>
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
                      <p>{artist.bio}</p>
                      <div className="d-flex flex-column artist-description__follow">
                        <h2>{artist.followers && fNumberWithUnits(artist.followers)}</h2>
                        <p>Người quan tâm</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Section>
            </Col>
          </Row> */}
        </section>
      </div>
    </Helmet>
  );
}
