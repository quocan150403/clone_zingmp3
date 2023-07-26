import {
  ExploreIcon,
  PersonalIcon,
  RadioIcon,
  Top100Icon,
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
import { useState, memo } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

import './Sidebar.scss';
import images from 'assets/images';
import config from 'config';
import { MenuItem, Button } from 'components';
import classNames from 'classnames';

function Sidebar() {
  const { tracks } = useSelector((state) => state.player);
  const [isToggle, setIsToggle] = useState(false);
  const [isShowModalAddPlaylist, setIsShowModalAddPlaylist] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const classes = classNames('sidebar', {
    'is-open': isToggle,
    'is-player': tracks.length > 0,
  });

  return (
    <aside className={classes}>
      <div className="sidebar-logo d-none-mobile">
        <a href="/" className="sidebar-logo__link">
          <img src={images.logo} alt="Logo" className="sidebar-logo__main" />
          <img src={images.logoSmall} alt="Logo" className="sidebar-logo__sub" />
        </a>
      </div>

      <nav className="sidebar-nav">
        <MenuItem responsive={!isToggle} to={config.routes.home} icon={<ExploreIcon />} title="Khám Phá" />
        <MenuItem responsive={!isToggle} to={config.routes.zingChart} icon={<ZingChartIcon />} title="#zingchart" />
        <MenuItem responsive={!isToggle} to={config.routes.radio} icon={<RadioIcon />} title="Radio" label="LIVE" />
        <MenuItem responsive={!isToggle} to={config.routes.library.path} icon={<PersonalIcon />} title="Thư viện" />
      </nav>

      <div className="sidebar-separate d-none-mobile" />

      <nav className="sidebar-subnav d-none-mobile">
        <MenuItem responsive={!isToggle} to={config.routes.newMusic} icon={<NewMusicIcon />} title="BXH Nhạc Mới" />
        <MenuItem responsive={!isToggle} to={config.routes.topic} icon={<TopicIcon />} title="Thể Loại" />
        <MenuItem responsive={!isToggle} to={config.routes.top100} icon={<Top100Icon />} title="Top 100" />

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

        <MenuItem responsive={!isToggle} to={config.routes.library.playlist} icon={<PlaylistIcon />} title="Playlist" />
        <MenuItem responsive={!isToggle} to={config.routes.library.album} icon={<AlbumIcon />} title="Album" />
        <MenuItem responsive={!isToggle} to={config.routes.library.upload} icon={<UploadIcon />} title="Đã tải lên" />

        <div className="sidebar-subnav__library">
          <div className="sidebar-separate"></div>
          <MenuItem
            responsive={!isToggle}
            to="/bichphuong"
            title="Nhạc Bích phương Nhạc Bích ph"
            iconExpand={<BsThreeDots />}
          />
          <MenuItem
            responsive={!isToggle}
            to="/bichphuong2"
            title="Nhạc Bích phương Nhạc Bích ph"
            iconExpand={<BsThreeDots />}
          />
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
        <input type="text" placeholder="Nhập tên playlist" className="add-playlist__input" />
        <div className="add-playlist__option d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column">
            <h3 className="add-playlist__title">Công khai</h3>
            <p className="add-playlist__subtitle">Mọi người có thể tìm thấy playlist này.</p>
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
          <Button primary uppercase fullWidth>
            Tạo mới
          </Button>
        </div>
      </Modal>
    </aside>
  );
}

export default memo(Sidebar);
