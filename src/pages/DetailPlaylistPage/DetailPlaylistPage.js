import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import Modal from 'react-modal';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  BsArrowRepeat,
  BsArrowReturnRight,
  BsDownload,
  BsLink45Deg,
  BsPen,
  BsPlayFill,
  BsTextWrap,
  BsThreeDots,
  BsTrash,
  BsX,
} from 'react-icons/bs';

import './DetailPlaylistPage.scss';
import {
  AlbumItem,
  MediaList,
  Helmet,
  Section,
  ArtistList,
  AlbumList,
  Button,
  Wrapper,
  MenuItem,
} from 'components';
import { albumApi, playlistApi, songApi, userApi } from 'api';
import images from 'assets/images';
import { updateUserField } from 'app/features/userSlice';

export default function DetailAlbumPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [playlist, setPlaylist] = useState({});
  const [songList, setSongList] = useState([]);
  const [image, setImage] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [isShowOption, setIsShowOption] = useState(false);
  const [isShowModalEditPlaylist, setIsShowModalEditPlaylist] = useState(false);
  const [isShowModalDeletePlaylist, setIsShowModalDeletePlaylist] = useState(false);

  const [songRelateList, setSongRelateList] = useState([]);
  const [albumRelate, setAlbumRelate] = useState([]);
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resPlaylist = await playlistApi.getBySlug(slug);
        const { tracks, _id } = resPlaylist;
        const [resSongRelate] = await Promise.all([
          songApi.getHot(10),
          currentUser._id && userApi.createHistoryPlaylist(currentUser._id, _id),
        ]);
        if (tracks.length) {
          const resSong = await songApi.getByIds({ ids: tracks.join(',') });
          setSongList(resSong);
        }

        setName(resPlaylist.name);
        setIsPublic(resPlaylist.public);
        setSongRelateList(resSongRelate);
        setPlaylist(resPlaylist);
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
    const currentPlaylist = playlist;
    setIsShowOption(false);
    setId(currentPlaylist._id);
    setName(currentPlaylist.name);
    setIsPublic(currentPlaylist.public);
    setIsShowModalEditPlaylist(true);
  };

  const handleEditPlaylist = async () => {
    if (name.trim()) {
      setIsShowModalEditPlaylist(false);

      const playlistData = {
        name,
        userId: currentUser._id,
        public: isPublic,
      };

      try {
        const newPlaylist = await toast.promise(playlistApi.update(id, playlistData), {
          pending: 'Đang thực hiện...',
        });
        toast.dismiss();
        navigate(`/playlist/${newPlaylist.slug}`);
        toast.success(`Sửa playlist ${newPlaylist.name} thành công`);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          toast.error(error.response.data.error);
        } else {
          toast.error('Đã xảy ra lỗi');
        }
      }
    }
  };

  const handleShowModalDelete = () => {
    setIsShowOption(false);
    setIsShowModalDeletePlaylist(true);
  };

  const handleDeletePlaylist = async () => {
    if (name.trim()) {
      setIsShowModalDeletePlaylist(false);
      try {
        const newPlaylist = await toast.promise(playlistApi.remove(playlist._id), {
          pending: 'Đang thực hiện...',
        });
        toast.dismiss();
        navigate('/');
        toast.success(`Delete playlist ${newPlaylist.name} thành công`);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          toast.error(error.response.data.error);
        } else {
          toast.error('Đã xảy ra lỗi');
        }
      }
    }
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
                  <h2 className="playlist-detail__title">{name}</h2>
                  <span onClick={handleShowModalEdit} className="ms-3 cursor-pointer ">
                    <BsPen />
                  </span>
                </div>
                <p className="playlist-detail__description">
                  Tạo bởi {playlist.userId && playlist.userId.fullName}
                </p>
                <p className="playlist-detail__description">{isPublic ? 'Công khai' : 'Cá nhân'}</p>
                <Button className="mt-3" primary uppercase leftIcon={<BsPlayFill />}>
                  Phát tất cả
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
                value={isPublic}
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
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
