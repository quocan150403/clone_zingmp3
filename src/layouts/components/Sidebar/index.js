import images from 'assets/images';
import config from 'config';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import {
  ExploreIcon,
  MVIcon,
  PersonalIcon,
  RadioIcon,
  Top100Icon,
  TopicIcon,
  ZingChartIcon,
  NewMusicIcon,
  MusicIcon,
  PlaylistIcon,
  HistoryIcon,
} from 'components/Icons';

function Sidebar() {
  return (
    <div className="app__sidebar">
      <div className="sidebar__logo hide-on-mobile">
        <a href="/" className="sidebar__logo-link">
          <img src={images.logo} alt="Logo" className="sidebar__logo-img" />
          <img src={images.logoSmall} alt="Logo" className="sidebar__small-logo" />
        </a>
      </div>
      <div className="sidebar__nav">
        <ul className="sidebar__nav-list sidebar__nav-list--separate">
          <li data-name="explore" className="sidebar__nav-item active">
            <Link to={config.routes.home} className="sidebar__item-link">
              <ExploreIcon />
              <span>Khám Phá</span>
            </Link>
          </li>
          <li data-name="zingchart" className="sidebar__nav-item">
            <Link to={config.routes.zingChart} className="sidebar__item-link">
              <ZingChartIcon />
              <span>#zingchart</span>
            </Link>
          </li>
          <li data-name="radio" className="sidebar__nav-item">
            <Link to={config.routes.radio} className="sidebar__item-link">
              <RadioIcon />
              <span>Radio</span>
              <div className="sidebar__nav-label">LIVE</div>
            </Link>
          </li>
          <li data-name="personal" className="sidebar__nav-item">
            <Link to={config.routes.personal} className="sidebar__item-link">
              <PersonalIcon />
              <span>Cá Nhân</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar__subnav hide-on-mobile">
        <ul className="sidebar__nav-list">
          <li className="sidebar__nav-item subnab--item">
            <Link to={config.routes.newMusic} className="sidebar__item-link">
              <NewMusicIcon />
              <span>Nhạc Mới</span>
            </Link>
          </li>
          <li className="sidebar__nav-item subnab--item">
            <Link to={config.routes.topic} className="sidebar__item-link">
              <TopicIcon />
              <span>Thể Loại</span>
            </Link>
          </li>
          <li className="sidebar__nav-item subnab--item">
            <Link to={config.routes.top100} className="sidebar__item-link">
              <Top100Icon />
              <span>Top 100</span>
            </Link>
          </li>
          <li className="sidebar__nav-item subnab--item">
            <Link to={config.routes.mv} className="sidebar__item-link">
              <MVIcon />
              <span>MV</span>
            </Link>
          </li>
        </ul>
        <div className="sidebar__login">
          <p className="sidebar__login-description">Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
          <a href="/" className="sidebar__login-btn button is-small button-gold">
            Mua vip
          </a>
        </div>
        <ul className="sidebar__subnav-menu">
          <li className="sidebar__menu-item menu-header">
            <h2 className="sidebar__menu-title">THƯ VIỆN</h2>
            <i className="bi bi-pencil hide-on-tablet" />
          </li>
          <li className="sidebar__menu-item">
            <a href="/" className="sidebar__menu-link">
              <MusicIcon />
              <span>Bài hát</span>
            </a>
          </li>
          <li className="sidebar__menu-item">
            <a href="/" className="sidebar__menu-link">
              <PlaylistIcon />
              <span>Playlist</span>
            </a>
          </li>
          <li className="sidebar__menu-item">
            <a href="/" className="sidebar__menu-link">
              <HistoryIcon />
              <span>Gần đây</span>
            </a>
          </li>
        </ul>
        <ul className="sidebar__nav-list hide-on-tablet-mobile">
          <li className="sidebar__nav-item">
            <a href="/" className="sidebar__item-link">
              <span className="sidebar__link-topic">Tháng 1</span>
            </a>
          </li>
          <li className="sidebar__nav-item">
            <a href="/" className="sidebar__item-link">
              <span className="sidebar__link-topic">Nhạc Quốc Tế</span>
            </a>
          </li>
          <li className="sidebar__nav-item">
            <a href="/" className="sidebar__item-link">
              <span className="sidebar__link-topic">Sky Ơi</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar__create-playlist">
        <div className="sidebar__create-container hide-on-tablet-mobile">
          <i className="bi bi-plus-lg" />
          <h2 className="sidebar__create-title">Tạo playlist mới</h2>
        </div>
        <div className="sidebar__expand">
          <div className="sidebar__expand-btn btn--expand">
            <i className="bi bi-chevron-right" />
          </div>
          <div className="sidebar__expand-btn btn--shrink">
            <i className="bi bi-chevron-left" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
