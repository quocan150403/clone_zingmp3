import { useParams, NavLink } from 'react-router-dom';
import Helmet from 'components/Helmet';
import './History.scss';
import Title from 'components/Title';

function History() {
  const { type } = useParams();
  return (
    <Helmet title="Lịch sử">
      <div className="history">
        <div className="is-border-bottom d-flex align-items-center">
          <Title className="mb-0" small hideIcon name="Phát gần đây" />
          <div className="vertical-separator" />
          <div className="tabs__list">
            <NavLink to="/my-music/history/song" className="tabs__item tabs__item--active">
              Bài Hát
            </NavLink>
            <NavLink to="/my-music/history/playlist" className="tabs__item">
              Playlist
            </NavLink>
            <NavLink to="/my-music/history/playlist" className="tabs__item">
              MV
            </NavLink>
            <NavLink to="/my-music/history/radio" className="tabs__item">
              RAdio
            </NavLink>
            <NavLink to="/my-music/history/podcast" className="tabs__item">
              Podcast
            </NavLink>
          </div>
        </div>
        <div className="history-content"></div>
      </div>
    </Helmet>
  );
}

export default History;
