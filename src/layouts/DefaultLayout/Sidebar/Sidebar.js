import {
  ExploreIcon,
  PersonalIcon,
  TopicIcon,
  ZingChartIcon,
  NewMusicIcon,
  PlaylistIcon,
  HistoryIcon,
  FavoriteIcon,
  AlbumIcon,
  UploadIcon,
} from 'components/Icons';
import { BsChevronRight, BsPlus, BsThreeDots, BsX } from 'react-icons/bs';
import { useState, memo, useEffect } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Sidebar.scss';
import images from 'assets/images';
import config from 'config';
import { MenuItem, Button } from 'components';
import classNames from 'classnames';
import { playlistApi } from 'api';

function Sidebar() {
  const { tracks } = useSelector((state) => state.player);
  const { current } = useSelector((state) => state.user);

  const [playlists, setPlaylists] = useState([]);
  const [name, setName] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [isShowModalAddPlaylist, setIsShowModalAddPlaylist] = useState(false);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await playlistApi.getAll();
        setPlaylists(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlaylist();
  }, []);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const handleAddPlaylist = async () => {
    if (!name.trim()) {
      console.log('vui lòng nhập tên playlist');
    }
    isShowModalAddPlaylist(false);

    const playlistData = {
      name,
      userId: current._id,
    };

    try {
      await toast.promise(playlistApi.create(playlistData), {
        pending: 'Đang thực hiện...',
        success: 'Thêm playlist thành công',
      });
      resetForm();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.error);
      } else {
        toast.error('Đã xảy ra lỗi');
      }
    }
  };

  const resetForm = () => {
    setName('');
    setIsPublic(false);
  };

  const classes = classNames('sidebar', {
    'is-open': isToggle,
    'is-player': tracks.length > 0,
  });

  return (
    <aside className={classes}>
      <ToastContainer />
      <div className="sidebar-logo d-none-mobile">
        <a href="/" className="sidebar-logo__link">
          <img src={images.logo} alt="Logo" className="sidebar-logo__main" />
          <img src={images.logoSmall} alt="Logo" className="sidebar-logo__sub" />
        </a>
      </div>

      <nav className="sidebar-nav">
        <MenuItem
          responsive={!isToggle}
          to={config.routes.home}
          icon={<ExploreIcon />}
          title="Khám Phá"
        />
        <MenuItem
          responsive={!isToggle}
          to={config.routes.zingChart}
          icon={<ZingChartIcon />}
          title="#zingchart"
        />
        {/* <MenuItem responsive={!isToggle} to={config.routes.radio} icon={<RadioIcon />} title="Radio" label="LIVE" /> */}
        <MenuItem
          responsive={!isToggle}
          to={config.routes.topic}
          icon={<TopicIcon />}
          title="Thể Loại"
        />
        <MenuItem
          responsive={!isToggle}
          to={config.routes.newMusic}
          icon={<NewMusicIcon />}
          title="BXH Nhạc Mới"
        />
        <MenuItem
          responsive={!isToggle}
          to={config.routes.library.path}
          icon={<PersonalIcon />}
          title="Thư viện"
        />
      </nav>

      <div className="sidebar-separate d-none-mobile" />

      <nav className="sidebar-subnav d-none-mobile">
        {/* <MenuItem responsive={!isToggle} to={config.routes.top100} icon={<Top100Icon />} title="Top 100" /> */}
        <MenuItem
          responsive={!isToggle}
          to={config.routes.library.history}
          icon={<HistoryIcon />}
          title="Nghe gần đây"
        />

        <MenuItem
          responsive={!isToggle}
          to={config.routes.library.favorite}
          icon={<FavoriteIcon />}
          title="Bài hát yêu thích"
        />

        <MenuItem
          responsive={!isToggle}
          to={config.routes.library.playlist}
          icon={<PlaylistIcon />}
          title="Playlist"
        />
        <MenuItem
          responsive={!isToggle}
          to={config.routes.library.album}
          icon={<AlbumIcon />}
          title="Album"
        />
        <MenuItem
          responsive={!isToggle}
          to={config.routes.library.upload}
          icon={<UploadIcon />}
          title="Đã tải lên"
        />

        <div className="sidebar-separate"></div>
        <div className="sidebar-subnav__library">
          {playlists.map((item, index) => (
            <MenuItem
              key={index}
              responsive={!isToggle}
              to={item.slug}
              title={item.name}
              iconExpand={<BsThreeDots />}
            />
          ))}
        </div>
      </nav>

      <div className="sidebar-playlist d-none-mobile">
        <div onClick={() => setIsShowModalAddPlaylist(true)} className="sidebar-playlist__inner">
          <BsPlus className="sidebar-playlist__plus" />
          <h2 className="sidebar-playlist__title ms-3">Tạo playlist mới</h2>
        </div>
        <div onClick={handleToggle} className="sidebar-playlist__chevron d-none-desktop">
          <Button circle secondary medium leftIcon={<BsChevronRight />} />
        </div>
      </div>

      {/* Modal Playlist */}
      <Modal
        isOpen={isShowModalAddPlaylist}
        onRequestClose={() => setIsShowModalAddPlaylist(false)}
        className="add-playlist"
        overlayClassName="overlay"
      >
        <span onClick={() => setIsShowModalAddPlaylist(false)} className="add-playlist__close">
          <BsX />
        </span>
        <h2 className="add-playlist__heading">Tạo playlist mới</h2>
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
          <Button onClick={handleAddPlaylist} primary uppercase fullWidth>
            Tạo mới
          </Button>
        </div>
      </Modal>
    </aside>
  );
}

export default memo(Sidebar);
