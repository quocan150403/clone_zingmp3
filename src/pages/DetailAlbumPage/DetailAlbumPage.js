import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

import { AlbumItem, MediaList, Helmet, Section, ArtistList, AlbumList } from 'components';
import { albumApi, commonApi, songApi, userApi } from 'api';
import { updateUserField } from 'app/features/userSlice';
import { toast } from 'react-toastify';

export default function DetailAlbumPage() {
  const { currentUser } = useSelector((state) => state.user);
  const { slug } = useParams();
  const dispatch = useDispatch();

  const [album, setAlbum] = useState({});
  const [albumRelate, setAlbumRelate] = useState([]);
  const [songList, setSongList] = useState([]);
  const [artistList, setArtistList] = useState([]);
  const [isFavoriteAlbum, setIsFavoriteAlbum] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await albumApi.getBySlug(slug);
        const { _id: albumId, artists } = response;
        const albumIds = artists.map((item) => item._id).join(',');
        const [responseSong, responseAlbumRelate] = await Promise.all([
          songApi.getQuery({ albumId: albumId }),
          albumApi.getByArtistIds({ ids: albumIds, limit: 6 }),
        ]);

        setArtistList(artists);
        setAlbum(response);
        setSongList(responseSong);
        setAlbumRelate(responseAlbumRelate.filter((album) => album._id !== albumId));
        if (currentUser && currentUser.favoriteAlbums) {
          setIsFavoriteAlbum(currentUser.favoriteAlbums.includes(albumId));
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

  useEffect(() => {
    const updateHistoryAlbum = async () => {
      try {
        if (currentUser._id && album._id) {
          const historyAlbum = await userApi.createHistoryAlbum(currentUser._id, album._id);
          dispatch(updateUserField({ ...historyAlbum }));
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log(error.response.data.error);
        } else {
          console.log('error! an error occurred. please try again later!');
        }
      }
    };
    updateHistoryAlbum();
  }, [album._id, currentUser._id]);

  const handleLikeAlbum = async () => {
    try {
      const result = await commonApi.toggleLikeAlbum(album._id, currentUser._id);
      console.log(result);
      const { updatedFavorites, updatedItemFavorites, liked } = result;
      setAlbum((prev) => ({ ...prev, favorites: updatedItemFavorites }));
      dispatch(updateUserField({ field: 'favoriteAlbums', value: updatedFavorites }));
      setIsFavoriteAlbum(liked);
      if (liked) {
        toast.success('Đã thêm album vào thư viện');
      } else {
        toast.success('Đã xóa album khỏi thư viện');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Helmet title="Chi tiết">
      <div className="detail mt-custom">
        <Row className="mb-5">
          <Col xs={12} lg={4} xl={3}>
            {album && (
              <AlbumItem
                detail
                data={album}
                isFavoriteAlbum={isFavoriteAlbum}
                onClickLike={handleLikeAlbum}
              />
            )}
          </Col>
          <Col xs={12} lg={8} xl={9}>
            <div>
              <MediaList mediaList={songList} />
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
