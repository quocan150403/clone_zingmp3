import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { playPause, setSong } from 'app/features/playerSlice';

import { AlbumItem, MediaList, Helmet, Section, ArtistList, AlbumList } from 'components';
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

        if (currentUser._id) {
          fetchPromises.push(userApi.createHistoryAlbum(currentUser._id, albumId));
        }

        const [responseSong, responseAlbumRelate, historyAlbum] = await Promise.all(fetchPromises);

        setArtistList(artists);
        setAlbum(response);
        setSongList(responseSong);
        setAlbumRelate(responseAlbumRelate.filter((album) => album._id !== albumId));

        dispatch(updateUserField({ ...historyAlbum }));

        if (responseSong.length > 0 && tracks.length === 0) {
          dispatch(setSong({ tracks: responseSong, song: responseSong[0] }));
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log(error.response.data.error);
        } else {
          console.log('error! an error occurred. please try again later!');
        }
      }
    };
    fetchData();
  }, [slug, currentUser]);

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
                <div className="no-image-bg d-flex flex-column align-items-center justify-content-center">
                  <div className="no-image" />
                  <h6 className="no-image-title">Không có bài hát nào trong album này</h6>
                </div>
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
