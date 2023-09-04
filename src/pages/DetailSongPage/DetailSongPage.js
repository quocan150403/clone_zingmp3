import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserField } from 'app/features/userSlice';
import {
  BsArrowReturnRight,
  BsDownload,
  BsHeart,
  BsHeartFill,
  BsLink45Deg,
  BsTextWrap,
  BsThreeDots,
} from 'react-icons/bs';

import './DetailSongPage.scss';
import { MediaList, Helmet, Section, AlbumList, Button, Wrapper, MenuItem } from 'components';
import { albumApi, songApi } from 'api';
import images from 'assets/images';

export default function DetailSongPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const [songId, setSongId] = useState('');
  const [song, setSong] = useState({});
  const [isShowOption, setIsShowOption] = useState(false);
  const [albumRelate, setAlbumRelate] = useState([]);
  const [songRecommend, setSongRecommend] = useState([]);

  const [isFavoriteSong, setIsFavoriteSong] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resSong = await songApi.getBySlug(slug);
        const { artists, composers, _id } = resSong;
        const artistIds = [...artists.map((item) => item._id), composers.map((item) => item._id)];

        const [resSongsByArtists, resAlbumsByArtists] = await Promise.all([
          songApi.getByArtistIds({
            ids: artistIds.join(),
            limit: 9,
          }),
          albumApi.getByArtistIds({
            ids: artistIds.join(),
            limit: 5,
          }),
        ]);
        setSongId(_id);
        setAlbumRelate(resAlbumsByArtists);
        setSong(resSong);
        setSongRecommend(resSongsByArtists.filter((item) => item.slug !== slug));
        if (currentUser && currentUser.favoriteSongs) {
          setIsFavoriteSong(currentUser.favoriteSongs.includes(_id));
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

  const handleFavoriteSong = async () => {
    try {
      const result = await songApi.toggleLike(songId, currentUser._id);
      const { updatedFavorites, updatedSongFavorites, liked } = result;
      setSong((prev) => ({ ...prev, favorites: updatedSongFavorites }));
      dispatch(updateUserField({ field: 'favoriteSongs', value: updatedFavorites }));
      setIsFavoriteSong(liked);
      if (liked) {
        toast.success('Đã thêm bài hát vào thư viện');
      } else {
        toast.success('Đã xóa bài hát khỏi thư viện');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Helmet title="Chi tiết">
      <div className="mt-custom">
        <Row className="mb-5 g-4">
          <Col xs={12} lg={4} xl={3}>
            <div className="playlist-detail">
              <div className="playlist-detail__thumb">
                <img src={song.imageUrl || images.albumDefault} alt="" />
              </div>
              <div className="playlist-detail__inner">
                <h2 className="playlist-detail__title mt-4">{song.name}</h2>
                <p className="playlist-detail__description">
                  {song.artists && song.artists.map((item) => item.name).join(', ')}
                </p>
                <p className="playlist-detail__description">
                  {song.favorites && song.favorites} người yêu thích
                </p>
                {/* <Button className="mt-3" primary uppercase leftIcon={<BsPlayFill />}>
                  Phát tất cả
                </Button> */}

                <div className="mt-4 gap-3 d-flex align-items-center justify-content-center">
                  <Tippy content="Thêm vào thư viện" placement="bottom">
                    <Button
                      onClick={handleFavoriteSong}
                      circle
                      secondary
                      medium
                      leftIcon={isFavoriteSong ? <BsHeartFill /> : <BsHeart />}
                    />
                  </Tippy>
                  <TippyHeadless
                    visible={isShowOption}
                    interactive={true}
                    placement="right-end"
                    offset={[-200, 2]}
                    onClickOutside={() => setIsShowOption(false)}
                    onHide={() => setIsShowOption(false)}
                    appendTo={() => document.body}
                    render={(attrs) => (
                      <Wrapper {...attrs} tabIndex="-1" className="pb-3 pt-3 p-0">
                        <MenuItem
                          small
                          option
                          icon={<BsTextWrap />}
                          title="Thêm vào danh sách phát"
                        />
                        <MenuItem medium option icon={<BsDownload />} title="Tải xuống" />
                        <MenuItem medium option icon={<BsLink45Deg />} title="Sao chép link" />
                        <MenuItem medium option icon={<BsArrowReturnRight />} title="Chia sẻ" />
                      </Wrapper>
                    )}
                  >
                    <Tippy content="Khác" placement="bottom">
                      <div>
                        <Button
                          onClick={() => setIsShowOption(!isShowOption)}
                          circle
                          secondary
                          medium
                          leftIcon={<BsThreeDots />}
                        />
                      </div>
                    </Tippy>
                  </TippyHeadless>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={8} xl={9}>
            <div>
              {song ? <MediaList tracks={[song, ...songRecommend]} mediaList={[song]} /> : null}
              <h2 className="playlist-detail__title mb-3 mt-5">Có thể bạn quan tâm</h2>
            </div>
            <MediaList isMusicIcon checkbox={false} mediaList={songRecommend} />
          </Col>
        </Row>

        {albumRelate?.length ? (
          <Section title="Có thể bạn sẽ thích">
            <AlbumList albums={albumRelate} />
          </Section>
        ) : null}
      </div>
    </Helmet>
  );
}
