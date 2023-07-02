import { BsChevronRight, BsPencil, BsPlus, BsThreeDots } from 'react-icons/bs';
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
import MenuItem from 'components/MenuItem';

function Sidebar() {
  return (
    <div className="app-sidebar">
      <div className="sidebar-logo hide-on-mobile">
        <a href="/" className="sidebar-logo__link">
          <img src={images.logo} alt="Logo" className="sidebar-logo__main" />
          <img src={images.logoSmall} alt="Logo" className="sidebar-logo__sub" />
        </a>
      </div>

      <nav>
        <MenuItem to={config.routes.home} icon={<ExploreIcon />} title="Khám Phá" />
        <MenuItem to={config.routes.zingChart} icon={<ZingChartIcon />} title="#zingchart" />
        <MenuItem to={config.routes.radio} icon={<RadioIcon />} title="Radio" label="LIVE" />
        <MenuItem to={config.routes.library.path} icon={<PersonalIcon />} title="Thư viện" />
      </nav>
      <div className="sidebar-separate" />
      <nav className="sidebar-subnav hide-on-mobile">
        <MenuItem to={config.routes.newMusic} icon={<NewMusicIcon />} title="BXH Nhạc Mới" />
        <MenuItem to={config.routes.topic} icon={<TopicIcon />} title="Thể Loại" />
        <MenuItem to={config.routes.top100} icon={<Top100Icon />} title="Top 100" />

        <MenuItem to={config.routes.library.history} icon={<HistoryIcon />} title="Nghe gần đây" />
        <MenuItem to={config.routes.library.favorite} icon={<FavoriteIcon />} title="Bài hát yêu thích" />
        <MenuItem to={config.routes.library.playlist} icon={<PlaylistIcon />} title="Playlist" />
        <MenuItem to={config.routes.library.album} icon={<AlbumIcon />} title="Album" />
        <MenuItem to={config.routes.library.upload} icon={<UploadIcon />} title="Đã tải lên" />
        <div className="sidebar-separate"></div>

        <MenuItem to="/" title="Nhạc Bích phương Nhạc Bích ph" iconExpand={<BsThreeDots />} />
        <MenuItem to="/" title="Nhạc Bích phương Nhạc Bích ph" iconExpand={<BsThreeDots />} />
      </nav>

      <div className="sidebar-playlist">
        <div className="sidebar-playlist__inner hide-on-tablet-mobile">
          <BsPlus />
          <h2 className="sidebar-playlist__title ms-3">Tạo playlist mới</h2>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
