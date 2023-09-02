import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { setSong } from 'app/features/playerSlice';

import { AlbumItem, MediaList, Helmet, Section, ArtistList, AlbumList, Nodata } from 'components';
import { albumApi, songApi, userApi } from 'api';
import { updateUserField } from 'app/features/userSlice';

export default function DetailAlbumPage() {
  const { currentUser } = useSelector((state) => state.user);
  const { tracks, isPlaying } = useSelector((state) => state.player);
  const { slug } = useParams();
  const dispatch = useDispatch();

  const [album, setAlbum] = useState({});
  const [albumRelate, setAlbumRelate] = useState([]);
  const [songList, setSongList] = useState([]);
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await albumApi.getBySlug(slug);
        const { _id: albumId, artists } = response;

        const fetchPromises = [songApi.getQuery({ albumId: albumId })];
        if (artists && artists.length > 0) {
          const albumIds = artists.map((item) => item._id).join(',');
          fetchPromises.push(albumApi.getByArtistIds({ ids: albumIds, limit: 5 }));
        }
        const [responseSong, responseAlbumRelate] = await Promise.all(fetchPromises);

        setArtistList(artists);
        setAlbum(response);
        setSongList(responseSong);
        setAlbumRelate(responseAlbumRelate.filter((album) => album._id !== albumId));

        if (responseSong.length > 0 && tracks.length === 0) {
          dispatch(setSong({ tracks: responseSong, song: responseSong[0] }));
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log(error.response.data.error);
        } else {
          console.log('error! an error occurred.');
        }
      }
    };
    fetchData();
  }, [slug, currentUser]);

  useEffect(() => {
    const updateHistoryAlbum = async () => {
      try {
        if (currentUser._id && album._id) {
          const historyAlbum = await userApi.createHistoryAlbum(currentUser._id, album._id);
          dispatch(updateUserField({ ...historyAlbum }));
        }
      } catch (error) {
        console.log('error! an error occurred:', error);
      }
    };
    updateHistoryAlbum();
  }, [album._id, currentUser._id]);

  return (
    <Helmet title="Chi tiết">
      <div className="detail mt-custom">
        <Row className="mb-5">
          <Col xs={12} lg={4} xl={3}>
            {album && <AlbumItem detail data={album} />}
          </Col>
          <Col xs={12} lg={8} xl={9}>
            <div>
              {songList.length > 0 ? (
                <MediaList mediaList={songList} />
              ) : (
                <Nodata message="Không có bài hát nào trong album này" />
              )}
            </div>
          </Col>
        </Row>

        <Section title="Nghệ sĩ tham gia">
          {artistList && <ArtistList artists={artistList} />}
        </Section>

        <Section title="Có thể bạn sẽ thích">
          <AlbumList albums={albumRelate} />
        </Section>
      </div>
    </Helmet>
  );
}
