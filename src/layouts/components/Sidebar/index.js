import { BsPencil, BsPlus } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

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
import images from 'assets/images';
import config from 'config';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="app-sidebar">
      <div className="sidebar-logo hide-on-mobile">
        <a href="/" className="sidebar-logo__link">
          <img src={images.logo} alt="Logo" className="sidebar-logo__main" />
          <img src={images.logoSmall} alt="Logo" className="sidebar-logo__sub" />
        </a>
      </div>

      <div className="sidebar-nav">
        <ul className="sidebar-list">
          <li data-name="explore" className="sidebar-item">
            <NavLink to={config.routes.home} className="sidebar-item__link">
              <ExploreIcon />
              <span>Khám Phá</span>
            </NavLink>
          </li>
          <li data-name="zingchart" className="sidebar-item">
            <NavLink to={config.routes.zingChart} className="sidebar-item__link">
              <ZingChartIcon />
              <span>#zingchart</span>
            </NavLink>
          </li>
          <li data-name="radio" className="sidebar-item">
            <NavLink to={config.routes.radio} className="sidebar-item__link">
              <RadioIcon />
              <span>Radio</span>
              <div className="sidebar__nav-label">LIVE</div>
            </NavLink>
          </li>
          <li data-name="personal" className="sidebar-item">
            <NavLink to={config.routes.library} className="sidebar-item__link">
              <PersonalIcon />
              <span>Thư viện</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="sidebar-separate" />
      <div className="sidebar-subnav hide-on-mobile">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <NavLink to={config.routes.newMusic} className="sidebar-item__link">
              <NewMusicIcon />
              <span>BXH Nhạc Mới</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to={config.routes.topic} className="sidebar-item__link">
              <TopicIcon />
              <span>Thể Loại</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to={config.routes.top100} className="sidebar-item__link">
              <Top100Icon />
              <span>Top 100</span>
            </NavLink>
          </li>
        </ul>
        <ul className="sidebar-menu">
          <li className="sidebar-menu__item">
            <NavLink to={config.routes.history} className="sidebar-menu__link">
              <HistoryIcon />
              <span>Nghe gần đây</span>
            </NavLink>
          </li>
          <li className="sidebar-menu__item">
            <NavLink to={config.routes.favorite} className="sidebar-menu__link">
              <FavoriteIcon />
              <span>Bài hát yêu thích</span>
            </NavLink>
          </li>
          <li className="sidebar-menu__item">
            <NavLink to={config.routes.playlist} className="sidebar-menu__link">
              <PlaylistIcon />
              <span>Playlist</span>
            </NavLink>
          </li>
          <li className="sidebar-menu__item">
            <NavLink to={config.routes.album} className="sidebar-menu__link">
              <AlbumIcon />
              <span>Album</span>
            </NavLink>
          </li>
          <li className="sidebar-menu__item">
            <NavLink to={config.routes.upload} className="sidebar-menu__link">
              <UploadIcon />
              <span>Đã tải lên</span>
            </NavLink>
          </li>
        </ul>
        <div className="sidebar-separate"></div>
        <ul className="sidebar-list hide-on-tablet-mobile">
          <li className="sidebar-item">
            <a href="/" className="sidebar-item__link">
              <span className="sidebar__link-topic">Tháng 1</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="/" className="sidebar-item__link">
              <span className="sidebar__link-topic">Nhạc Quốc Tế</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="/" className="sidebar-item__link">
              <span className="sidebar__link-topic">Sky Ơi</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sidebar-playlist">
        <div className="sidebar-playlist__inner hide-on-tablet-mobile">
          <BsPlus />
          <h2 className="sidebar-playlist__title ms-3">Tạo playlist mới</h2>
        </div>
        {/* <div className="sidebar__expand">
          <div className="sidebar__expand-btn btn--expand">
            <BsChevronRight />
          </div>
          <div className="sidebar__expand-btn btn--shrink">
            <BsChevronLeft />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
