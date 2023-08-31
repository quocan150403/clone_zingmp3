import {
  BsArrowRepeat,
  BsArrowReturnRight,
  BsDownload,
  BsLink45Deg,
  BsPauseFill,
  BsPen,
  BsPlayFill,
  BsTextWrap,
  BsThreeDots,
  BsTrash,
} from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import TippyHeadless from '@tippyjs/react/headless';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setSong } from 'app/features/playerSlice';

import './DetailPlaylistPage.scss';
import Helmet from 'components/Helmet';
import { MediaList, Section, ArtistList, AlbumList, Button, Wrapper, MenuItem } from 'components';
import { playlistApi, songApi, userApi } from 'api';
import images from 'assets/images';
import { updateUserField } from 'app/features/userSlice';
import Tippy from '@tippyjs/react/headless';
import { openDeleteForm, openEditForm, setCurrentPlaylist } from 'app/features/playlistSlice';

export default function DetailPlaylistPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { isPlaying } = useSelector((state) => state.player);
  const { playlists } = useSelector((state) => state.playlist);

  const [playlist, setPlaylist] = useState({});
  const [songList, setSongList] = useState([]);
  const [image, setImage] = useState('');
  const [isShowOption, setIsShowOption] = useState(false);

  const [songRelateList, setSongRelateList] = useState([]);
  const [albumRelate, setAlbumRelate] = useState([]);
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resPlaylist = await playlistApi.getBySlug(slug);
        const { tracks, _id } = resPlaylist;
        const artistIds = handleGetArtistsFromTracks(tracks);

        const [resSongHot, resSongRelate] = await Promise.all([
          songApi.getHot(10),
          artistIds.length && songApi.getByArtistIds({ ids: artistIds.join(), limit: 10 }),
          currentUser._id && userApi.createHistoryPlaylist(currentUser._id, _id),
        ]);

        const newSongRelateList = [...tracks, ...resSongHot];
        setSongRelateList(handleRemoveSongExisted(tracks, newSongRelateList));
        setSongList(tracks);
        setPlaylist(resPlaylist);
        dispatch(
          setSong({
            tracks: [...tracks, ...resSongRelate],
            song: tracks.length ? tracks[0] : resSongRelate[0],
            i: 0,
          }),
        );
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
    const updateHistoryPlayList = async () => {
      try {
        if (currentUser._id && playlist._id) {
          const historyPlaylist = await userApi.createHistoryPlaylist(
            currentUser._id,
            playlist._id,
          );
          dispatch(updateUserField({ ...historyPlaylist }));
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log(error.response.data.error);
        } else {
          console.log('error! an error occurred. please try again later!');
        }
      }
    };
    updateHistoryPlayList();
  }, [playlist._id, currentUser._id]);

  useEffect(() => {
    const resetData = async () => {
      if (songList.length) {
        const firstImage = songList[0].imageUrl;
        setAlbumRelate(songList.map((item) => item.albumId));
        setImage(firstImage);
        setArtistList(handleGetArtistsFromSongs(songList));
      } else {
        setImage('');
      }
    };
    resetData();
  }, [songList]);

  const handleGetArtistsFromTracks = (songList) => {
    const artistsRelate = new Set();

    songList.forEach((song) => {
      song.artists.forEach((artist) => {
        artistsRelate.add(artist._id);
      });

      song.composers.forEach((composer) => {
        artistsRelate.add(composer._id);
      });
    });

    return Array.from(artistsRelate);
  };

  const handleRemoveSongExisted = (tracks, songList) => {
    const trackIds = new Set(tracks.map((track) => track._id));
    const filteredSongList = songList.filter((song) => !trackIds.has(song._id));
    return filteredSongList;
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleGetArtistsFromSongs = (songList) => {
    const artistsRelate = [];

    songList.forEach((song) => {
      song.artists.forEach((artist) => {
        if (!artistsRelate.some((item) => item._id === artist._id)) {
          artistsRelate.push(artist);
        }
      });
    });

    return artistsRelate;
  };

  const handleAddSongToPlaylist = async (idSong) => {
    try {
      const resSong = await toast.promise(playlistApi.addSongToPlaylist(playlist._id, idSong), {
        pending: 'Đag thêm...',
      });
      toast.dismiss();
      toast.success(`Thêm bài hát ${resSong.name} vào playlist thành công.`);
      setSongRelateList(songRelateList.filter((item) => item._id !== idSong));
      setSongList((prev) => [...prev, resSong]);
    } catch (error) {
      console.log(error);
      toast.error('Thêm thất bại');
    }
  };

  const handleRemoveSongFromPlaylist = async (idSong) => {
    try {
      await toast.promise(playlistApi.removeSongFromPlaylist(playlist._id, idSong), {
        pending: 'Đag xóa...',
      });
      toast.dismiss();
      toast.success(`Xóa bài hát khỏi playlist thành công.`);
      setSongList(songList.filter((item) => item._id !== idSong));
    } catch (error) {
      console.log(error);
      toast.error('Xóa thất bại');
    }
  };

  const handleShowModalEdit = () => {
    setIsShowOption(false);
    dispatch(setCurrentPlaylist(playlist));
    dispatch(openEditForm());
  };

  const handleShowModalDelete = () => {
    setIsShowOption(false);
    dispatch(setCurrentPlaylist(playlist));
    dispatch(openDeleteForm());
  };

  return (
    <Helmet title="Chi tiết">
      <div className="mt-custom">
        <Row className="mb-5 g-4">
          <Col xs={12} lg={4} xl={3}>
            <div className="playlist-detail">
              <div className="playlist-detail__thumb">
                <img src={image || images.albumDefault} alt="" />
              </div>
              <div className="playlist-detail__inner">
                <div className="mt-3 mb-1 d-flex align-items-center justify-content-center">
                  <h2 className="playlist-detail__title">{playlist.name}</h2>
                  <span onClick={handleShowModalEdit} className="ms-3 cursor-pointer ">
                    <BsPen />
                  </span>
                </div>
                <p className="playlist-detail__description">
                  Tạo bởi {playlist.userId && playlist.userId.fullName}
                </p>
                <p className="playlist-detail__description">
                  {playlist.public ? 'Công khai' : 'Cá nhân'}
                </p>
                <Button
                  onClick={handlePlayPause}
                  className="mt-3"
                  primary
                  uppercase
                  leftIcon={isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                >
                  {isPlaying ? 'Tạm dừng' : 'Phát tất cả'}
                </Button>
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
                      <MenuItem
                        onClick={handleShowModalEdit}
                        small
                        option
                        icon={<BsPen />}
                        title="Chỉnh sửa playlist"
                      />
                      <MenuItem
                        onClick={handleShowModalDelete}
                        small
                        option
                        icon={<BsTrash />}
                        title="Xóa playlist"
                      />
                    </Wrapper>
                  )}
                >
                  <Tippy content="Khác" placement="bottom">
                    <div className="mt-3">
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
          </Col>
          <Col xs={12} lg={8} xl={9}>
            <div>
              {songList.length ? (
                <MediaList onRemovePlaylist={handleRemoveSongFromPlaylist} mediaList={songList} />
              ) : (
                <div className="no-image-bg d-flex flex-column align-items-center justify-content-center">
                  <div className="no-image" />
                  <h6 className="no-image-title">Không có bài hát nào trong playlist này</h6>
                </div>
              )}
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
              <MediaList
                isPlaylist
                onAddPlaylist={handleAddSongToPlaylist}
                mediaList={songRelateList}
              />
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
