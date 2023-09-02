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
  BsX,
} from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import Modal from 'react-modal';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setSong } from 'app/features/playerSlice';

import './DetailPlaylistPage.scss';
import Helmet from 'components/Helmet';
import {
  MediaList,
  Section,
  ArtistList,
  AlbumList,
  Button,
  Wrapper,
  MenuItem,
  Nodata,
} from 'components';
import { playlistApi, songApi, userApi } from 'api';
import images from 'assets/images';
import { updateUserField } from 'app/features/userSlice';
import usePlaylistForm from 'hooks/usePlaylistForm';
import { deletePlaylistAsync, editPlaylistAsync } from 'app/features/playlistSlice';

export default function DetailAlbumPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { isPlaying, tracks } = useSelector((state) => state.player);

  const { form, setAllForms, handleNameChange, handlePublicChange } = usePlaylistForm();

  const [image, setImage] = useState('');
  const [isShowOption, setIsShowOption] = useState(false);
  const [isShowModalEditPlaylist, setIsShowModalEditPlaylist] = useState(false);
  const [isShowModalDeletePlaylist, setIsShowModalDeletePlaylist] = useState(false);

  const [songList, setSongList] = useState([]);
  const [songRelateList, setSongRelateList] = useState([]);
  const [albumRelate, setAlbumRelate] = useState([]);
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resPlaylist = await playlistApi.getBySlug(slug);
        const { tracks: tracksOfSong, _id: playlistId } = resPlaylist;

        // const artistIds = handleGetArtistsFromTracks(tracks);
        // if (artistIds.length) {
        //   fetchSongPromises.push(songApi.getByArtistIds({ ids: artistIds.join(), limit: 10 }));
        // }

        const fetchSongPromises = [songApi.getHot(10)];

        if (currentUser._id) {
          fetchSongPromises.push(userApi.createHistoryPlaylist(currentUser._id, playlistId));
        }

        const [resSongHot] = await Promise.all(fetchSongPromises);
        const filteredSongRelateList = handleRemoveSongExisted(tracksOfSong, resSongHot);

        setSongRelateList(filteredSongRelateList);
        setSongList(tracksOfSong);
        setAllForms(resPlaylist);

        if (tracksOfSong.length > 0 && tracks.length === 0) {
          dispatch(
            setSong({
              tracks: [...tracksOfSong, ...filteredSongRelateList],
              song: tracksOfSong[0],
              i: 0,
            }),
          );
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [slug, currentUser]);

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

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleAddSongToPlaylist = async (idSong) => {
    try {
      const resSong = await toast.promise(playlistApi.addSongToPlaylist(form._id, idSong), {
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
      await toast.promise(playlistApi.removeSongFromPlaylist(form._id, idSong), {
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
    setIsShowModalEditPlaylist(true);
  };

  const handleEditPlaylist = async () => {
    setIsShowModalEditPlaylist(false);
    const newForm = {
      name: form.name,
      public: form.public,
      userId: form.userId._id,
    };

    try {
      const response = await dispatch(editPlaylistAsync({ id: form._id, playlistData: newForm }));
      if (editPlaylistAsync.fulfilled.match(response)) {
        toast.success('Đã sửa playlist thành công.');
      } else if (editPlaylistAsync.rejected.match(response)) {
        toast.error('Lỗi khi sửa playlist. Vui lòng thử lại sau.');
      }
      toast.dismiss();
      navigate(`/playlist/${response.slug}`);
      toast.success(`Sửa playlist ${response.name} thành công`);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.error);
      } else {
        toast.error('Đã xảy ra lỗi');
      }
    }
  };

  const handleShowModalDelete = () => {
    setIsShowOption(false);
    setIsShowModalDeletePlaylist(true);
  };

  const handleDeletePlaylist = async () => {
    setIsShowModalDeletePlaylist(false);
    try {
      const response = await dispatch(deletePlaylistAsync(form._id));
      if (deletePlaylistAsync.fulfilled.match(response)) {
        toast.success('Đã xóa playlist thành công.');
      } else if (deletePlaylistAsync.rejected.match(response)) {
        toast.error('Lỗi khi xóa playlist. Vui lòng thử lại sau.');
      }
      toast.dismiss();
      navigate('/');
      toast.success(`Delete playlist ${response.name} thành công`);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.error);
      } else {
        toast.error('Đã xảy ra lỗi');
      }
    }
  };

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

  const handleRemoveSongExisted = (tracks, songList) => {
    const trackIds = new Set(tracks.map((track) => track._id));
    const filteredSongList = songList.filter((song) => !trackIds.has(song._id));
    return filteredSongList;
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
                  <h2 className="playlist-detail__title">{form.name}</h2>
                  <span
                    onClick={handleShowModalEdit}
                    className="ms-3 cursor-pointer playlist-detail__edit"
                  >
                    <BsPen />
                  </span>
                </div>
                <p className="playlist-detail__description">
                  Tạo bởi {form.userId && form.userId?.fullName}
                </p>
                <p className="playlist-detail__description">
                  {form.public ? 'Công khai' : 'Cá nhân'}
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
                <Nodata message="Không có bài hát nào trong playlist này" />
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

        {/* Modal edit playlist */}
        <Modal
          isOpen={isShowModalEditPlaylist}
          onRequestClose={() => setIsShowModalEditPlaylist(false)}
          className="add-playlist"
          overlayClassName="overlay"
        >
          <span onClick={() => setIsShowModalEditPlaylist(false)} className="add-playlist__close">
            <BsX />
          </span>
          <h2 className="add-playlist__heading">Chỉnh sửa playlist</h2>
          <input
            type="text"
            placeholder="Nhập tên playlist"
            className="add-playlist__input"
            value={form.name}
            onChange={handleNameChange}
          />
          <div className="add-playlist__option d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column">
              <h3 className="add-playlist__title">Công khai</h3>
              <p className="add-playlist__subtitle">Mọi người có thể tìm thấy playlist này.</p>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                value={form.public}
                checked={form.public}
                onChange={handlePublicChange}
              />
            </div>
          </div>
          <div className="add-playlist__option d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column">
              <h3 className="add-playlist__title">Phát ngẫu nhiên</h3>
              <p className="add-playlist__subtitle">Luôn phát ngẫu nhiên tất cả bài hát </p>
            </div>
            <div className="form-check form-switch">
              <input
                defaultChecked
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
          <div className="mt-4">
            <Button onClick={handleEditPlaylist} primary uppercase fullWidth>
              Lưu
            </Button>
          </div>
        </Modal>

        {/* Modal delete playlist */}
        <Modal
          isOpen={isShowModalDeletePlaylist}
          onRequestClose={() => setIsShowModalDeletePlaylist(false)}
          overlayClassName="overlay"
          className="modal-default"
        >
          <div className="p-4 d-flex flex-column">
            <h4 className="fw-bold fs-4">Xóa playlist</h4>
            <p className="text-wrap">
              Playlist của bạn sẽ bị xóa khỏi thư viện cá nhân. Các bài hát do bạn tải lên sẽ vẫn
              được giữ lại.
              <br />
              Bạn có muốn xóa?
            </p>
            <div className="d-flex justify-content-end">
              <Button onClick={() => setIsShowModalDeletePlaylist(false)} secondary uppercase>
                Không
              </Button>
              <Button onClick={handleDeletePlaylist} primary uppercase>
                Có
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </Helmet>
  );
}
