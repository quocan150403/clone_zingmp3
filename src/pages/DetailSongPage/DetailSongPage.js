import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import Modal from 'react-modal';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import {
  BsArrowRepeat,
  BsArrowReturnRight,
  BsDownload,
  BsHeart,
  BsLink45Deg,
  BsPen,
  BsPlayFill,
  BsTextWrap,
  BsThreeDots,
  BsTrash,
  BsX,
} from 'react-icons/bs';

import './DetailSongPage.scss';
import {
  MediaList,
  Helmet,
  Section,
  ArtistList,
  AlbumList,
  Button,
  Wrapper,
  MenuItem,
  MediaItem,
} from 'components';
import { albumApi, playlistApi, songApi } from 'api';
import images from 'assets/images';

export default function DetailSongPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const [id, setId] = useState('');
  const [song, setSong] = useState({});
  const [isShowOption, setIsShowOption] = useState(false);
  const [albumRelate, setAlbumRelate] = useState([]);
  const [songRecommend, setSongRecommend] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resSong = await songApi.getBySlug(slug);
        const { artists, composers } = resSong;
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

        setAlbumRelate(resAlbumsByArtists);
        setSong(resSong);
        setSongRecommend(resSongsByArtists.filter((item) => item.slug !== slug));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [slug]);

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
                <Button className="mt-3" primary uppercase leftIcon={<BsPlayFill />}>
                  Phát tất cả
                </Button>

                <div className="mt-4 gap-3 d-flex align-items-center justify-content-center">
                  <Tippy content="Thêm vào thư viện" placement="bottom">
                    <Button circle secondary medium leftIcon={<BsHeart />} />
                  </Tippy>
                  <TippyHeadless
                    visible={isShowOption}
                    interactive={true}
                    placement="right-end"
                    offset={[-260, 2]}
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
                        <MenuItem small option icon={<BsDownload />} title="Tải xuống" />
                        <MenuItem small option icon={<BsLink45Deg />} title="Sao chép link" />
                        <MenuItem small option icon={<BsArrowReturnRight />} title="Chia sẻ" />
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
              {song ? <MediaList mediaList={[song]} /> : null}
              <h2 className="playlist-detail__title mb-3 mt-5">Có thể bạn quan tâm</h2>
            </div>
            <MediaList mediaList={songRecommend} />
          </Col>
        </Row>

        <Section title="Có thể bạn sẽ thích">
          <AlbumList albums={albumRelate} />
        </Section>
      </div>
    </Helmet>
  );
}
