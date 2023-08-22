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
import { useState, memo, useEffect } from 'react';
import {
  BsArrowReturnRight,
  BsChevronRight,
  BsDownload,
  BsLink45Deg,
  BsPen,
  BsPlus,
  BsTextWrap,
  BsThreeDots,
  BsTrash,
  BsX,
} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import classNames from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';

import './Sidebar.scss';
import images from 'assets/images';
import config from '../../../config';
import { MenuItem, Button, Wrapper } from 'components';
import { playlistApi } from 'api';
import { Link } from 'react-router-dom';

function Sidebar() {
  const { tracks } = useSelector((state) => state.player);
  const { current } = useSelector((state) => state.user);

  const [isShowOption, setIsShowOption] = useState(false);

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
        // console.log(response);
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
          to={config.routes.genre}
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
            <Link key={index} to={`/playlist/${item.slug}`} className="sidebar-playlist">
              <div className="sidebar-playlist__title">{item.name}</div>
              <TippyHeadless
                visible={isShowOption}
                interactive={true}
                placement="top"
                offset={[0, 10]}
                onClickOutside={() => setIsShowOption(false)}
                onHide={() => setIsShowOption(false)}
                appendTo={() => document.body}
                render={(attrs) => (
                  <Wrapper {...attrs} tabIndex="-1" className="pb-3 pt-3 p-0">
                    <MenuItem small option icon={<BsTextWrap />} title="Thêm vào danh sách phát" />
                    <MenuItem small option icon={<BsDownload />} title="Tải xuống" />
                    <MenuItem small option icon={<BsLink45Deg />} title="Sao chép link" />
                    <MenuItem small option icon={<BsArrowReturnRight />} title="Chia sẻ" />
                    <MenuItem small option icon={<BsPen />} title="Chỉnh sửa playlist" />
                    <MenuItem small option icon={<BsTrash />} title="Xóa playlist" />
                  </Wrapper>
                )}
              >
                <Tippy content="Khác">
                  <div
                    onClick={(e) => setIsShowOption(!isShowOption)}
                    className="sidebar-playlist__expand"
                  >
                    <BsThreeDots />
                  </div>
                </Tippy>
              </TippyHeadless>
            </Link>
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
