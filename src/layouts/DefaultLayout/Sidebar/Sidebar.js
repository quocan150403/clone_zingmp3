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
} from 'react-icons/bs';
import {
  openAddForm,
  openDeleteForm,
  openEditForm,
  setCurrentPlaylist,
} from 'app/features/playlistSlice';
import { useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';

import './Sidebar.scss';
import images from 'assets/images';
import config from '../../../config';
import { MenuItem, Button, Wrapper } from 'components';

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.user);
  const { playlists } = useSelector((state) => state.playlist);

  const [data, setData] = useState();
  const [isShowOption, setIsShowOption] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const handleShowOptions = (e, playlist) => {
    e.preventDefault();
    setData(playlist);
    setIsShowOption(!isShowOption);
  };

  const handleCheckAndShowModalAddPlaylist = () => {
    if (!isAuth) return navigate('/login');
    dispatch(openAddForm());
  };

  const handleShowModalEdit = (e) => {
    e.preventDefault();
    setIsShowOption(false);
    dispatch(setCurrentPlaylist(data));
    dispatch(openEditForm());
  };

  const handleShowModalDelete = (e) => {
    e.preventDefault();
    setIsShowOption(false);
    dispatch(setCurrentPlaylist(data));
    dispatch(openDeleteForm());
  };

  const isOpen = isToggle ? 'is-open' : null;

  return (
    <aside className={`sidebar ${isOpen}`}>
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

        <div className="sidebar-separate" />
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
              <MenuItem small option icon={<BsTextWrap />} title="Thêm vào danh sách phát" />
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
          <div className="sidebar-subnav__library">
            {playlists.map((item, index) => (
              <Link key={index} to={`/playlist/${item.slug}`} className="sidebar-playlist">
                <div className="sidebar-playlist__title">{item.name}</div>

                <Tippy content="Khác">
                  <div
                    onClick={(e) => handleShowOptions(e, item)}
                    className="sidebar-playlist__expand"
                  >
                    <BsThreeDots />
                  </div>
                </Tippy>
              </Link>
            ))}
          </div>
        </TippyHeadless>
      </nav>

      <div className="sidebar-playlist__add d-none-mobile">
        <div onClick={handleCheckAndShowModalAddPlaylist} className="sidebar-playlist__inner">
          <BsPlus className="sidebar-playlist__plus" />
          <h2 className="sidebar-playlist__title ms-3">Tạo playlist mới</h2>
        </div>
        <div
          className="sidebar-playlist__chevron d-none-desktop"
          onClick={() => setIsToggle(!isToggle)}
        >
          <Button circle secondary medium leftIcon={<BsChevronRight />} />
        </div>
      </div>
    </aside>
  );
}

export default memo(Sidebar);
